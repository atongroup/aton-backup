# document-secretary — Edge Function

Håndterer SA3+SA4+SA5 i sekretær-arkitekturen.

## Deploy

```bash
supabase login
supabase link --project-ref wbwpobojxighhnmrabmj
supabase functions deploy document-secretary
```

## Secrets (sett via Supabase dashboard → Functions → Secrets)

- `ANTHROPIC_API_KEY` — Anthropic API-nøkkel (fra aton_tools)
- `SUPABASE_ANON_KEY` — sb_publishable_nt1mKoLX7QwR920CzWHogg_hhrLVYuQ

## Endepunkter

### Arkiver dokument (SA3+SA4+SA5)
POST `?action=upload`
```json
{
  "file_base64": "...",
  "file_name": "leiekontrakt.pdf",
  "mime_type": "application/pdf",
  "kategori_hint": "Leiekontrakt"
}
```
Returnerer: `{ success, document, metadata, message }`

### Søk etter dokumenter (SA5)
GET `?action=search&q=Elena&kategori=Leiekontrakt`
Returnerer: `{ documents: [...] }` med signerte download_url (1 time gyldige)

## Bruk fra appen (React Native)

```typescript
// Arkiver
const arkiver = async (base64: string, navn: string, type: string) => {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/document-secretary?action=upload`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${session.access_token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ file_base64: base64, file_name: navn, mime_type: type })
  })
  return res.json()
}

// Søk
const sok = async (query: string) => {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/document-secretary?action=search&q=${query}`, {
    headers: { Authorization: `Bearer ${session.access_token}` }
  })
  return res.json()
}
```
