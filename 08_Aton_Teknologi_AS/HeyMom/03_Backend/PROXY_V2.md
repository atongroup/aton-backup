# claude-proxy — Versjon 2 (kreves for v0.8)

## Hva er endret
App.tsx v0.8 sender nå:
```json
{
  "system": "Du er HeyMom...",
  "messages": [
    {"role": "user", "content": "første melding"},
    {"role": "assistant", "content": "svar"},
    {"role": "user", "content": "neste melding"}
  ]
}
```

Den gamle proxyen forventet `{message: "streng"}` og vil ikke fungere med v0.8.

## Slik oppdaterer du proxyen i Supabase

1. Gå til: https://supabase.com/dashboard/project/wbwpobojxighhnmrabmj/functions
2. Klikk på `claude-proxy`
3. Erstatt innholdet med koden under
4. Klikk **Deploy**

## Ny proxy-kode (index.ts)

```typescript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY') ?? ''
const MODEL = 'claude-opus-4-6'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { system, messages, message } = await req.json()

    // Støtt både v0.7 (message: streng) og v0.8 (messages: array)
    const msgs = messages ?? [{ role: 'user', content: message }]

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        system: system ?? undefined,
        messages: msgs,
      }),
    })

    const data = await response.json()
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
```

## Miljøvariabel
Sørg for at `ANTHROPIC_API_KEY` er satt under:
Supabase → Project Settings → Edge Functions → Secrets

*Oppdatert: 4. juni 2026 · v0.8*
