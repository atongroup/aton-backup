// SA3+SA4+SA5 — Aton Sekretær: opplasting, metadata-tolkning og søk
// Deploy: supabase functions deploy document-secretary

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Claude-prompt for automatisk metadata-tolkning
const METADATA_PROMPT = `Du er en sekretær. Brukeren laster opp et dokument.
Trekk ut følgende som JSON (kun JSON, ingen annen tekst):
{
  "tittel": "kort beskrivende tittel på dokumentet",
  "kategori": "Leiekontrakt|Patent|Gavebrev|NDA|Tilskudd|Økonomi|Annet",
  "status": "Aktiv|Arkivert|Venter|Utløpt",
  "person": "navn på motpart, avsender eller relatert person (null hvis ingen)",
  "selskap": "hvilket selskap dette gjelder (Personlig hvis privat)",
  "dato": "YYYY-MM-DD dokumentdato eller signeringsdato (null hvis ukjent)",
  "utlop": "YYYY-MM-DD utløpsdato (null hvis ingen)",
  "notat": "viktige tall, betingelser, beløp eller oppfølgingspunkter (maks 200 tegn)"
}`

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) return new Response('Mangler Authorization', { status: 401, headers: corsHeaders })

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

    // Hent bruker fra JWT
    const { data: { user }, error: userError } = await createClient(SUPABASE_URL, Deno.env.get('SUPABASE_ANON_KEY')!)
      .auth.getUser(authHeader.replace('Bearer ', ''))
    if (userError || !user) return new Response('Ugyldig token', { status: 401, headers: corsHeaders })

    const url = new URL(req.url)
    const action = url.searchParams.get('action') || 'upload'

    // === HANDLING 1: Søk etter dokumenter ===
    if (action === 'search') {
      const query = url.searchParams.get('q') || ''
      const kategori = url.searchParams.get('kategori') || ''

      let dbQuery = supabase
        .from('leif_arkiv')
        .select('*')
        .order('created_at', { ascending: false })

      if (kategori) dbQuery = dbQuery.eq('kategori', kategori)
      if (query) dbQuery = dbQuery.or(
        `tittel.ilike.%${query}%,person.ilike.%${query}%,notat.ilike.%${query}%,selskap.ilike.%${query}%`
      )

      const { data: docs, error } = await dbQuery
      if (error) throw error

      // Generer signerte nedlastingslenker for filer i Storage
      const docsWithUrls = await Promise.all((docs || []).map(async (doc) => {
        if (!doc.storage_path) return doc
        const { data } = await supabase.storage
          .from('user-documents')
          .createSignedUrl(doc.storage_path, 3600) // 1 time
        return { ...doc, download_url: data?.signedUrl }
      }))

      return new Response(JSON.stringify({ documents: docsWithUrls }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // === HANDLING 2: Last opp og arkiver dokument ===
    if (action === 'upload') {
      const body = await req.json()
      const { file_base64, file_name, mime_type, kategori_hint } = body

      if (!file_base64 || !file_name) {
        return new Response('Mangler fil', { status: 400, headers: corsHeaders })
      }

      // SA4: Tolkk dokument med Claude Vision
      let metadata: Record<string, unknown> = {}
      try {
        const isImage = mime_type?.startsWith('image/')
        const isPdf = mime_type === 'application/pdf'

        if (isImage || isPdf) {
          const claudeBody: Record<string, unknown> = {
            model: 'claude-sonnet-4-20250514',
            max_tokens: 500,
            system: METADATA_PROMPT,
            messages: [{
              role: 'user',
              content: isImage
                ? [{ type: 'image', source: { type: 'base64', media_type: mime_type, data: file_base64 } },
                   { type: 'text', text: 'Hva er dette dokumentet? Trekk ut metadata.' }]
                : [{ type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: file_base64 } },
                   { type: 'text', text: 'Hva er dette dokumentet? Trekk ut metadata.' }]
            }]
          }

          const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
            body: JSON.stringify(claudeBody)
          })
          const claudeData = await claudeRes.json()
          const text = claudeData.content?.[0]?.text || '{}'
          metadata = JSON.parse(text.replace(/```json|```/g, '').trim())
        }
      } catch (e) {
        console.error('Metadata-tolkning feilet:', e)
      }

      // Bygg Storage-sti: users/{user_id}/{kategori}/{tidsstempel}_{filnavn}
      const kategori = metadata.kategori || kategori_hint || 'annet'
      const kategoriMappe = String(kategori).toLowerCase().replace(/[^a-z0-9]/g, '-')
      const tidsstempel = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
      const storage_path = `users/${user.id}/${kategoriMappe}/${tidsstempel}_${file_name}`

      // SA3: Last opp til Storage
      const fileBuffer = Uint8Array.from(atob(file_base64), c => c.charCodeAt(0))
      const { error: uploadError } = await supabase.storage
        .from('user-documents')
        .upload(storage_path, fileBuffer, { contentType: mime_type || 'application/octet-stream' })

      if (uploadError) throw uploadError

      // SA5: Registrer metadata i leif_arkiv
      const { data: doc, error: dbError } = await supabase.from('leif_arkiv').insert({
        tittel: metadata.tittel || file_name,
        kategori: metadata.kategori || 'Annet',
        status: metadata.status || 'Aktiv',
        person: metadata.person || null,
        selskap: metadata.selskap || 'Personlig',
        dato: metadata.dato || null,
        utlop: metadata.utlop || null,
        notat: metadata.notat || null,
        kilde: 'Sekretær',
        storage_path,
        file_size: fileBuffer.length,
        mime_type,
      }).select().single()

      if (dbError) throw dbError

      return new Response(JSON.stringify({
        success: true,
        document: doc,
        metadata,
        message: `Arkivert: ${doc.tittel}`
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    return new Response('Ukjent action', { status: 400, headers: corsHeaders })

  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
