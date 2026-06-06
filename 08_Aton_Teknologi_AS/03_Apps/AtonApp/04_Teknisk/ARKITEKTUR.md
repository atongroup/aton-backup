# Teknisk arkitektur — Aton App
**Dato:** 4. juni 2026

## Tech-stack

| Komponent | Teknologi | Status |
|-----------|-----------|--------|
| Frontend | React Native / Expo SDK 54 | ✅ |
| Database | Supabase (PostgreSQL) | ✅ |
| Auth | Supabase Auth | ✅ |
| AI-modell | Claude API via Google Apps Script proxy | ✅ |
| Stemme | ElevenLabs multilingual v2 | ✅ |
| Transkripsjon | OpenAI Whisper | ✅ |
| Push-varsler | Expo Notifications | ✅ |
| Bilde | expo-image-picker | ✅ |
| Bygg | EAS Build (Expo Application Services) | 🔄 |
| Betaling | RevenueCat | ⏳ |

## Supabase-tabeller
- `messages` — samtalehistorikk
- `memories` — Atons minner om brukeren
- `rules` — brukerens instruksjoner til Aton
- `tasks` — oppgaver
- `goals` — mål med progresjon
- `profiles` — brukerprofil (onboarding-svar)
- `user_meta` — innloggingskilde, device, tidspunkt ✅

## API-kostnader (mai 2026)
- Claude Haiku 4.5: $1/$5 per MTok (gratis-brukere)
- Claude Opus 4-6: $5/$25 per MTok (premium-brukere)
- ElevenLabs: ~$0.30/1000 tegn

## Proxy-arkitektur
- Google Apps Script proxy (AtonGroup2026!GmailSender#Leif)
- Skjuler API-nøkler fra klient
- Fremtidig: Flytte til Supabase Edge Functions

## Bygg-status
- EAS Build (cloud) — feiler på Gradle (under utbedring)
- Gradle-feil: EAS_BUILD_UNKNOWN_GRADLE_ERROR
- Fikset: expo-image-picker plugin + scheme + projectId i app.json
