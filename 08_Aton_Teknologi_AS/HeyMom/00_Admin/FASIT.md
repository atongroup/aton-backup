# FASIT — HeyMom
*Eneste sannhetskilde for HeyMom-prosjektet. Aldri skriv statuser fra hukommelsen — sjekk alltid her.*

---

## Identitet

| Parameter | Verdi |
|-----------|-------|
| Appnavn | HeyMom |
| Tidligere navn | AtonApp |
| Eier | Aton Teknologi AS (100%) |
| Morselskap | Aton Group AS |
| Founder | Leif E. Sunde |
| Status | 🔨 Aktiv utvikling — v0.8 |
| Startdato | 4. juni 2026 (navneendring fra AtonApp) |

---

## Teknisk infrastruktur

| Komponent | Verdi |
|-----------|-------|
| GitHub-repo | `github.com/atongroup/atonapp` (privat) |
| Lokal mappe | `C:\atonapp` |
| Kjøre appen | `npx expo start --tunnel` |
| Framework | React Native + Expo SDK 54 |
| Språk | TypeScript |
| Platform | Windows + Android (iOS ikke testet ennå) |
| Versjon | v0.8 |

### Supabase
| Parameter | Verdi |
|-----------|-------|
| Prosjekt-URL | `https://wbwpobojxighhnmrabmj.supabase.co` |
| Publishable key | `sb_publishable_nt1mKoLX7QwR920CzWHogg_hhrLVYuQ` |
| Edge Function | `claude-proxy` (deployet) |
| Tabeller | `messages`, `tasks`, `goals` (alle med RLS) |

### Anthropic
| Parameter | Verdi |
|-----------|-------|
| Modell | `claude-opus-4-6` |
| Tilkobling | Via Supabase Edge Function `claude-proxy` |

---

## App-skjermer (v0.7)

| Tab | Ikon | Status |
|-----|------|--------|
| Chat med Claude + tale (TTS) | 💬 | ✅ Fungerer |
| Huskeliste (Supabase `tasks`) | ✓ | ✅ Fungerer |
| Slagplan med fremdriftslinjer (Supabase `goals`) | ◎ | ✅ Fungerer |
| Profil med Leifs info | ◉ | ✅ Fungerer |
| Innstillinger | ⚙️ | ❌ Ikke bygget |

---

## Design-tokens

| Token | Verdi |
|-------|-------|
| Bakgrunn | `#0A0A0F` |
| Overflate | `#12121A` |
| Kantlinje | `#1E1E2E` |
| Tekst | `#E8E0D0` |
| Tekst dempet | `#6A6A8A` |
| Gull primær | `#C8A96E` |
| Gull dempet | `#8A7040` |
| Logo-bokstav | «A» (Aton-referanse) |

---

## Løst i v0.8

| # | Fix | Status |
|---|-----|--------|
| F1 | Samtalehistorikk sendt til Claude (husker kontekst) | ✅ Løst |
| F2 | HeyMom-persona (systemmelding med Leifs profil) | ✅ Løst |
| F3 | Samtalehistorikk lagres og hentes fra Supabase | ✅ Løst |
| F4 | Slagplan-mål lagres i Supabase (ikke hardkodet) | ✅ Løst |
| F5 | Brukervennlige feilmeldinger ved nettverksproblemer | ✅ Løst |
| F6 | Innstillinger-skjerm bygget (TTS-toggle, app-info) | ✅ Løst |
| F7 | Loading-state med spinner og tekst ved oppstart | ✅ Løst |
| F8 | Mute-knapp synlig i chat-inputfeltet | ✅ Løst |
| F9 | Prioritetsfarger og sortering på huskeliste | ✅ Løst |
| F10 | Klikkbare slagplan-kort med +/− fremdrift og slett | ✅ Løst |

## Åpne problemer (v0.8)

| # | Problem | Alvorlighet | Status |
|---|---------|-------------|--------|
| P1 | SafeArea Android — fortsatt litt variasjon mellom enheter | Lav | ⏳ |
| P2 | Mikrofon / tale-til-tekst ikke implementert | Middels | ⏳ v0.9 |
| P3 | Proxy må oppdateres for å støtte `system` + `messages` array | Kritisk | ⚠️ Se under |

## ⚠️ VIKTIG: Proxy-oppdatering kreves

App.tsx v0.8 sender nå `{system, messages}` til claude-proxy.
Den eksisterende proxyen forventer `{message}` (enkelt streng).

**Proxyen MÅ oppdateres** i Supabase Edge Functions for at v0.8 skal fungere fullt ut.
Se `03_Backend/PROXY_V2.md` for ny proxy-kode.

---

## Hente siste kode (PowerShell)

```powershell
# Token lagret i Bitwarden → "HeyMom GitHub token"
(Invoke-WebRequest -Uri "https://raw.githubusercontent.com/atongroup/atonapp/refs/heads/main/App.tsx" -Headers @{Authorization="token <GITHUB_TOKEN>"} -UseBasicParsing).Content | Out-File App.tsx -Encoding utf8
```

---

## Roadmap (overordnet)

| Fase | Innhold | Når |
|------|---------|-----|
| v0.7 | Fungerende app med Chat/Huskeliste/Slagplan/Profil | ✅ Nå |
| v0.8 | Mute synlig, SafeArea fix, Innstillinger-skjerm | Juni 2026 |
| v0.9 | Tale-til-tekst (mikrofon inn) | Juli 2026 |
| v1.0 MVP | Onboarding-wizard, RevenueCat abonnement, TestFlight | Sep 2026 |
| v1.1 | App Store + Google Play lansering | Q4 2026 |

---

*Opprettet: 4. juni 2026 · Leif E. Sunde · Aton Teknologi AS*
