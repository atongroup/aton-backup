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
| Status | 🔨 Aktiv utvikling — v0.7 |
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
| Versjon | v0.7 |

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

## Åpne problemer (v0.7)

| # | Problem | Alvorlighet | Status |
|---|---------|-------------|--------|
| P1 | Mute-knapp (🔊/🔇) finnes i header, men lite synlig | Lav | ⏳ Fikses |
| P2 | Mikrofon / tale-til-tekst ikke implementert | Middels | ⏳ Planlegges |
| P3 | SafeArea overlapper litt på Android | Lav | ⏳ Fikses |
| P4 | Innstillinger-skjerm ikke bygget | Middels | ⏳ Planlegges |

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
