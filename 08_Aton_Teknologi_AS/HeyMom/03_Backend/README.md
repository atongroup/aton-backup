# HeyMom — Backend

## Supabase

| Parameter | Verdi |
|-----------|-------|
| Prosjekt-URL | `https://wbwpobojxighhnmrabmj.supabase.co` |
| Publishable key | `sb_publishable_nt1mKoLX7QwR920CzWHogg_hhrLVYuQ` |
| Edge Function | `claude-proxy` (deployet og aktiv) |
| Claude-modell | `claude-opus-4-6` |

## Tabeller

### `messages`
Samtalehistorikk. RLS aktivert — kun eier ser egne meldinger.

### `tasks`
Huskeliste. Felt: `user_id`, `text`, `done`, `priority`, `created_at`.

### `goals`
Slagplan-mål. Felt: `user_id`, `title`, `description`, `progress`, `color`.

## Edge Function: claude-proxy
Proxyer kall fra appen til Anthropic API.
Autentisering: `Authorization: Bearer <supabase_publishable_key>`

## Credentials
Alle secrets lagres i Bitwarden (leifsunde@gmail.com).
Anthropic API-nøkkel: se Bitwarden → «HeyMom Anthropic».
GitHub token: se Bitwarden → «HeyMom GitHub».
