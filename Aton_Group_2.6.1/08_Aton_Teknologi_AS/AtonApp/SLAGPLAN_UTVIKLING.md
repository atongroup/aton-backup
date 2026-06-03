# SLAGPLAN — AtonApp Utvikling
**Versjon:** 1.0.0  
**Dato:** 4. juni 2026  
**Eier:** Aton Teknologi AS / Leif E. Sunde  
**Status:** Klar til oppstart

---

## Visjon (én setning)
> En personlig AI-sekretær som husker alt, handler for deg og lagrer alt i din egen sky — bygget på Claude.

---

## Tech stack — valgt og låst

| Lag | Verktøy | Pris | Hvorfor |
|-----|---------|------|---------|
| App-rammeverk | React Native + Expo SDK 55 | Gratis | iOS + Android fra én kodebase, ingen Mac for iOS-bygg |
| Språk | TypeScript | Gratis | Færre bugs, bedre autocompletion |
| UI-bibliotek | Gluestack UI v3 + NativeWind | Gratis | Tailwind i RN, 50+ komponenter, lys/mørk modus |
| Navigasjon | Expo Router | Gratis | Filbasert, deep links, web-støtte |
| Backend | Supabase | Gratis (50k brukere) | PostgreSQL + Auth + Storage, forutsigbar pris |
| AI-kjerne | Anthropic Managed Agents + Memory Stores | Bruksbasert | Persistent minne uten egen infrastruktur |
| Google-integrasjon | Claude MCP (Gmail/Calendar/Drive) | Gratis | Direkte fra Claude, ingen egne integrasjoner |
| Sky-lagring | react-native-cloud-storage | Gratis/OSS | iCloud + Google Drive med samme API |
| Auth | Sign in with Apple + Google Sign-In | Gratis | Obligatorisk for App Store |
| Abonnement | RevenueCat | Gratis til $2 500/mnd | App Store + Google Play fra én SDK |
| Bygg | EAS Build (Expo) | 15 builds/mnd gratis | iOS-bygg uten Mac |
| OTA-oppdatering | EAS Update | Gratis til 1k MAU | Push JS-fixes uten App Store |
| Versjonskontroll | GitHub + GitHub Actions | Gratis | CI/CD, trigger EAS automatisk |
| IDE | VS Code + React Native Tools | Gratis | Beste RN-utvikleropplevelse |
| AI-koding | Claude Code | Max-abonnement | Par-programmerer som kjenner hele kodebasen |

**Total månedskostnad i oppstartsfasen: ~NOK 0 (utenom Claude API-bruk)**

---

## Fase 0 — Oppsett (uke 1–2)
*Mål: Alt er klart til å skrive kode. Ingenting blokkerer.*

### Kontoer og tilganger
- [ ] Opprett Expo-konto på expo.dev
- [ ] Opprett Supabase-prosjekt (gratis tier)
- [ ] Aktiver Anthropic Managed Agents (platform.claude.com → beta)
- [ ] Apple Developer Program ($99/år — engangsutgift)
- [ ] Google Play Developer ($25 engangsregistrering)
- [ ] RevenueCat-konto (gratis)
- [ ] GitHub-repo: `atongroup/atonapp` (privat)

### Lokalt utviklingsmiljø
- [ ] Installer Node.js 20+ og npm
- [ ] `npm install -g expo-cli eas-cli`
- [ ] VS Code + React Native Tools + ESLint + Prettier
- [ ] Expo Go på iPhone og Android-enhet
- [ ] Klon repo og verifiser at `expo start` kjører

### Supabase-oppsett
- [ ] Opprett tabeller: `users`, `sessions`, `subscriptions`
- [ ] Aktiver Row Level Security
- [ ] Konfigurer Apple + Google Sign-In providers
- [ ] Test auth-flyt lokalt

---

## Fase 1 — Prototype (uke 3–6)
*Mål: En fungerende app der én bruker kan logge inn, chatte med Claude og lagre én fil i Drive.*

### Sprint 1 (uke 3–4): Grunnmur
- [ ] Prosjektoppsett med Expo Router + TypeScript
- [ ] Gluestack UI v3 + NativeWind konfigurert
- [ ] Apple Sign-In og Google Sign-In fungerer
- [ ] Supabase Auth koblet til begge
- [ ] Enkel tab-navigasjon: Hjem / Chat / Filer / Profil
- [ ] `react-native-cloud-storage` konfigurert for iCloud og Drive

**Leveranse:** App åpner, bruker logger inn, ser en tom hjemskjerm.

### Sprint 2 (uke 5–6): Claude-chat med minne
- [ ] Anthropic Managed Agents session opprettes ved innlogging
- [ ] Memory Store kobles til sesjonen
- [ ] Chat-grensesnitt med meldingsbobler (bruker + Claude)
- [ ] PROFIL.md og REGLER.md lastes inn i Memory Store ved oppstart
- [ ] Claude svarer med kontekst fra filene
- [ ] Lagre én melding/innsikt til HUSKELISTE.md med ett trykk

**Leveranse:** Ekte samtale med Claude som husker hvem du er mellom sesjoner.

---

## Fase 2 — MVP (uke 7–12)
*Mål: Alle kjernefunksjoner fungerer. Intern testgruppe kan bruke appen daglig.*

### Sprint 3 (uke 7–8): Fil-system og maler
- [ ] Onboarding-wizard (8 spørsmål → genererer PROFIL.md automatisk)
- [ ] Mappe-struktur opprettes i brukerens sky ved første innlogging
- [ ] Vis og rediger HUSKELISTE.md, SLAGPLAN.md i appen
- [ ] Claude kan lese og oppdatere filer direkte
- [ ] Filvelger: Privat / Bedrift

### Sprint 4 (uke 9–10): Google-integrasjon
- [ ] Gmail-lesing via Claude MCP (med brukerens tillatelse)
- [ ] Google Calendar — se og opprett hendelser
- [ ] Claude kan referere til e-post og kalender i svar
- [ ] Push-varsler for påminnelser (Expo Notifications)

### Sprint 5 (uke 11–12): Polering og abonnement
- [ ] RevenueCat abonnement — Gratis / Pro
- [ ] Mørk modus (Gluestack UI håndterer automatisk)
- [ ] Splash screen, app-ikon og onboarding-slides
- [ ] Feilhåndtering og offline-melding
- [ ] Grunnleggende analytics (Expo Insights — gratis)

**Leveranse:** Komplett MVP klar for intern testgruppe (Leif, Lone, Alexandra, Viking).

---

## Fase 3 — TestFlight + Beta (uke 13–16)
*Mål: 10–20 eksterne testbrukere gir tilbakemelding. Kritiske bugs er fikset.*

### Oppsett
- [ ] EAS Build — produksjonsbygg iOS og Android
- [ ] EAS Submit — automatisk innsending til TestFlight og Play Console
- [ ] App Store Connect — metadata, skjermbilder, beskrivelse
- [ ] Google Play Console — samme
- [ ] TestFlight-link deles med testgruppe

### Feedback-runde
- [ ] Ukentlige intervjuer med testbrukere (Google Meet)
- [ ] Feilrapportering via Sentry (gratis tier)
- [ ] Prioriter bugs etter alvorlighetsgrad
- [ ] Minst 2 iterasjoner basert på tilbakemelding

**Leveranse:** Stabil beta. Ingen krasj-bugs. Testbrukere bruker appen daglig.

---

## Fase 4 — App Store-lansering (uke 17–20)
*Mål: Appen er live i App Store og Google Play.*

### App Store-gjennomgang
- [ ] Privacy Policy og Terms of Service (kreves av Apple)
- [ ] App Store-beskrivelse på norsk og engelsk
- [ ] 6 skjermbilder per plattform (Figma → eksport)
- [ ] App Review Notes — forklar Apple Sign-In-implementasjon
- [ ] Send inn til Apple Review (2–7 dager)
- [ ] Send inn til Google Play Review (1–3 dager)

### Lansering
- [ ] Soft launch — kun Norge
- [ ] Kommunikasjon: Leifs LinkedIn + X + Aton-nettverket
- [ ] Første 100 brukere: gratis Pro i 3 måneder
- [ ] SkatteFUNN-søknad sendes (FoU-kostnader kvalifiserer)

---

## Fase 5 — Vekst (måned 6–12)
*Mål: 500 betalende brukere. White-label til første bedrift.*

### Produktvekst
- [ ] Morgenbrief-funksjon (Claude briefer deg ved oppvåkning)
- [ ] Stemme-input (Expo Speech — gratis)
- [ ] Bedrifts-profil og delte filer (Team-plan)
- [ ] Nederlandsk, tysk og engelsk UI
- [ ] iPad-optimalisert layout

### Salg og vekst
- [ ] White-label-pakke for bedrifter (fra NOK 4 900/mnd)
- [ ] Integrasjon med Slack og Microsoft Teams
- [ ] API for tredjepartsutvidelser
- [ ] Affiliate-program: 20% av første 12 måneder

---

## KPI-er — slik vet vi at det går bra

| KPI | Måned 1 | Måned 3 | Måned 6 | Måned 12 |
|-----|---------|---------|---------|---------|
| Aktive brukere | 20 (intern) | 100 | 500 | 2 000 |
| Betalende brukere | 0 | 20 | 150 | 600 |
| MRR | NOK 0 | NOK 2 580 | NOK 19 350 | NOK 77 400 |
| App Store-rating | — | 4,2+ | 4,4+ | 4,5+ |
| Krasj-rate | <5% | <2% | <1% | <0,5% |

---

## Teambehovet

| Rolle | Fase 0–1 | Fase 2–4 | Fase 5+ |
|-------|----------|----------|---------|
| Produktstrategi | Leif | Leif | Leif |
| React Native-dev | Freelance / Launchpad | 1 fast | 2 faste |
| Backend (Supabase) | Samme dev | Samme | 1 fast |
| Design (Figma) | Claude / AI | Freelance | Designer |
| iOS/Apple review | Dev | Dev | Dev |

**Estimert kostnad fase 0–2 (6 uker):**  
1 utvikler × 6 uker × NOK 25 000 = NOK 150 000 (freelance)  
Alternativ: Claude Code + Leif selv = NOK 0 (2–3× lengre tid)

---

## Risiko og mitigeringer

| Risiko | Tiltak |
|--------|--------|
| Apple avviser appen | Ha Privacy Policy klar fra dag 1. Test Sign in with Apple grundig. |
| Anthropic Memory API endres | Abstraksjonslag i koden — aldri kall API direkte fra UI |
| Google Drive rate limits | Cache filer lokalt, sync i bakgrunnen |
| Supabase pauser inaktivt prosjekt | Sett opp en cron-jobb som pinger prosjektet ukentlig |
| Utvikler slutter | All kode på GitHub, dokumentert. Ingen single point of failure. |

---

## Første uke — konkrete handlinger (gjør nå)

1. Opprett GitHub-repo `atongroup/atonapp`
2. `npx create-expo-app atonapp --template blank-typescript`
3. Opprett Supabase-prosjekt på supabase.com
4. Koble Supabase til Expo med `npx expo install @supabase/supabase-js`
5. Installer Gluestack UI: følg docs.gluestack.io
6. Test `expo start` og scan QR med Expo Go på telefon
7. Første commit: tom app med riktig mappestruktur

**Det er alt. Resten følger.**

---

*Sist oppdatert: 4. juni 2026 · v1.0.0*  
*Aton Teknologi AS · Leif E. Sunde · leif@atongroup.no*
