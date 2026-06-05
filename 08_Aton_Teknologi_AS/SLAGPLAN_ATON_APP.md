# Slagplan — Aton App | Aton Teknologi AS
**Versjon:** 2.0 | **Dato:** 5. juni 2026 | **Status:** 🚀 I aktiv utvikling

---

## Oversikt

Aton-appen er Aton Teknologi AS sitt forbrukerprodukt — en personlig AI-assistent for privatpersoner og gründere. Utviklet av Aton Teknologi AS, eid 100% av Aton Group AS.

```
Aton Group AS (100% eier)
└── Aton Teknologi AS
    ├── Produkt 1: Aton AI Starter Pack (SMB-konsultering)
    └── Produkt 2: Aton App (forbrukerapp — dette dokumentet)
```

---

## Strategisk posisjonering (oppdatert 5. juni 2026)

**Aton er bygget på Claude (Anthropic) — verdens beste AI-modell for resonnering og lange kontekster.**

Konkurranseanalyse viser at ingen personlig AI-assistent-app som ligner Aton er bygget på Claude. Alle nærmeste konkurrenter bruker GPT-4/GPT-4o eller egne modeller.

Dette gir Aton en automatisk fordel: når Anthropic lanserer nye modeller (Opus 5, Opus 6 osv.) oppgraderes Aton automatisk — uten ekstra utviklingskostnader.

### Konkurrenter 2026
| Konkurrent | AI-modell | Pris | Svakhet vs Aton |
|-----------|-----------|------|-----------------|
| alfred_ | Ukjent (ikke Claude) | $24.99/mnd | Ikke norsk, ingen Aton-identitet |
| ChatGPT Plus | GPT-4o/GPT-5 | $20/mnd | Ikke norsk, ingen brief, ingen stemme på norsk |
| Claude Pro | Claude | $20/mnd | Kun chat, ingen app-wrapper, ingen brief |
| Google Gemini | Gemini | $19.99/mnd | Krever Google-ecosystem |
| Meta AI | Muse Spark | Gratis | Ingen personlig minneprofil |
| Microsoft Copilot | GPT-4o | $18/mnd | Krever M365, enterprise-fokus |
| Siri (Apple Intelligence) | Eget | Gratis | Generisk, ingen norsk AI-dybde |
| **Aton Premium** | **Claude Sonnet 4.6** | **129 kr/mnd** | Norsk, personlig, brief, stemme, bilder, minneprofil |

**Aton er 3–5× billigere enn konkurrentene og den eneste norskspråklige personlige AI-assistenten bygget på Claude.**

---

## Produktbeskrivelse

| Egenskap | Verdi |
|----------|-------|
| Plattform | Android (APK) → Google Play → App Store |
| Tech-stack | React Native / Expo SDK 52, Supabase, Claude API (Anthropic), ElevenLabs |
| Repo | github.com/atongroup/atonapp |
| Nåværende versjon | v1.5.0 (under bygg) |
| Utgiver (fremtidig) | Aton Teknologi AS (org.nr. TBD) |

### Kjernefunksjoner (implementert 5. juni 2026)
- 🌅 Personlig morgenbrief (AI-generert, daglig, med kalender og e-post)
- 💬 Chat med AI — tekst, tale og bilde/kamera
- 🧠 3-lags minnesystem (profil + episoder + korttid)
- ✅ Oppgavehåndtering med AI-prioritering
- 🎯 Målsporing med progresjonsbar
- 🎙️ ElevenLabs stemme (norsk/engelsk)
- 📷 Bildeanalyse — dokumenter, kvitteringer, whiteboards
- 📅 Kalender-integrasjon (lokalt + Google Calendar)
- 📧 E-post oppsummering på HomeScreen
- 👥 Kontakthukommelse
- 🔐 Permissions-flyt (kamera, mikrofon, sted, varsler, bilder)
- 🌐 Google Sign-In + email/passord
- ✦ Aton-identitet gjennomgående (solguden, pulserende sol, Aton-tone)

### Sekretær-funksjoner
- Intent-deteksjon i chat (kalender, e-post, oppgaver, påminnelse)
- Proaktiv daglig brief med dagens agenda
- AI-prioritering av oppgaver basert på minneprofil
- Kontakthukommelse per person

---

## Økonomimodell

### Inntektsstruktur
| Nivå | Pris | Modell |
|------|------|--------|
| **Gratis** | 0 kr | Haiku 4.5, ubegrenset meldinger, chat |
| **Premium** | 129 kr/mnd | Sonnet 4.6, ubegrenset, stemme, bilder, minne, Gmail |
| **Aton Business** | 299 kr/mnd (fremtidig) | Team-funksjoner, API-tilgang, admin-panel |

### Kostnadsstruktur per bruker/mnd
| Brukertype | Claude API | ElevenLabs | Supabase | Total |
|------------|-----------|------------|----------|-------|
| Gratis (Haiku) | ~kr 5 | kr 0 | kr 0 | **~kr 5** |
| Premium (Opus) | ~kr 60 | ~kr 10 | kr 0 | **~kr 70** |

**Margin Premium:** 129 kr − ~100 kr kostnad = **~29 kr (~22%)**

---

## Lanserings-roadmap

### Fase 0 — Nå (juni 2026)
- [x] App bygget (React Native + Expo SDK 52)
- [x] Supabase database + RLS
- [x] Claude API via Supabase Edge Function proxy (JWT-auth)
- [x] ElevenLabs stemme
- [x] Kamera og bildeanalyse
- [x] Onboarding + velkomstskjerm
- [x] Aton-identitet gjennomgående (pulserende sol, Aton-tone)
- [x] 3-lags minnesystem (profil, episoder, korttid)
- [x] Sekretær-funksjoner (kalender, e-post, oppgaver, kontakter)
- [x] Permissions-flyt etter innlogging
- [x] Google Sign-In
- [x] Tilgangsoversikt i Innstillinger
- [x] AI-oppgaveprioritering i TasksScreen
- [x] E-post + kalender på HomeScreen
- [x] Kontakthukommelse
- [ ] APK-bygg fungerende ← **pågår (Gradle-feil under utbedring)**
- [ ] Google Play identitetsbekreftelse (pass nødvendig)
- [ ] RevenueCat integrert for abonnement

### Fase 1 — Soft launch (juli–august 2026)
- [ ] APK tilgjengelig via direkte nedlasting
- [ ] Første 10–50 brukere (Leifs nettverk)
- [ ] Freemium-modell live
- [ ] Feedback og iterering
- [ ] Google Play offentlig lansering

### Fase 2 — Premium launch (september–oktober 2026)
- [ ] RevenueCat + Stripe for betaling
- [ ] Premium-skjerm i appen
- [ ] Mål: 50 betalende brukere

### Fase 3 — Vekst (2027)
- [ ] App Store (iOS)
- [ ] Aton Business-plan
- [ ] Mål: 500+ betalende brukere

---

## Siste status (5. juni 2026)

- ✅ Appen fungerer i Expo Go
- ✅ Alle skjermer operative med Aton-identitet
- ✅ JWT-auth fikset i proxy — chat skal nå fungere i APK
- ✅ 3-lags minnesystem implementert og i Supabase
- ✅ Sekretær-funksjoner implementert
- ✅ Google Sign-In + Permissions-flyt
- ✅ Supabase Edge Function claude-proxy deployet med ny kode
- 🔄 APK-bygg pågår (bygge #13+, Gradle-sti-feil under utbedring)
- ⏳ RevenueCat — ikke startet
- ⏳ Google Play identitetsbekreftelse — venter på pass

---

## Skaleringsplan (lagt til 5. juni 2026)

> Analysen under er basert på oppdatert prisinformasjon fra Supabase juni 2026.

### Kapasitet i dag — Supabase gratis plan

| Ressurs | Grense | Status |
|---------|--------|--------|
| Database | 500 MB | ✅ God margin |
| Fil-lagring | 1 GB | ✅ God margin |
| Båndbredde | 5 GB/mnd | ⚠️ Kritisk grense |
| MAU (månedlige aktive brukere) | 50 000 | ✅ Trygt lenge |
| Samtidige tilkoblinger | 200 | ✅ God margin |
| Inaktivitet-pause | 7 dager | ⚠️ Risiko — krever keepalive |
| Backup | Ingen automatisk | ❌ Risiko — tap av data ved feil |

**Smerteterskel:** ~300–500 daglige aktive brukere. 500 brukere × 20 API-kall × 50 KB = 500 MB trafikk per dag → 5 GB båndbredde brukt på 10 dager.

### Steg 1: Fix nå (gratis plan)

- [ ] **Keepalive-ping** — sett opp GitHub Actions eller Uptime Robot til å pinge Supabase hver 5. dag → unngår automatisk pause
- [ ] **Ekstern backup** — eksporter databasen ukentlig til Google Drive (script i GitHub Actions)
- [ ] **CDN for statiske filer** — aktiver Supabase Storage CDN → CDN-trafikk teller ikke mot båndbreddegrensen

### Steg 2: Ved første betalende brukere → Supabase Pro ($25/mnd)

Oppgrader umiddelbart når vi har første betalende bruker. Ikke vent til vi treffer grensen.

| Ressurs | Supabase Pro |
|---------|-------------|
| Database | 8 GB |
| MAU | 100 000 |
| Lagring | 100 GB |
| Backup | 7 dager automatisk |
| Pris | $25/mnd (~kr 270) |

Supabase Pro holder komfortabelt til ~5 000 daglige aktive brukere.

### Steg 3: 5 000–50 000 brukere

- Legg til Supabase compute add-on (2-core ARM, 2 GB RAM, ~$50/mnd) om responstid øker
- Cloudflare Workers som CDN-lag foran appen (gratis plan holder lenge)
- Vurder read replica for databasen ved høy lesetrafikk
- På dette nivået er **Claude API den største utgiftsposten**, ikke infrastrukturen

### Steg 4: 50 000+ brukere

Evaluer ett av to alternativ:
- **Supabase Team** ($599/mnd): SOC2, 14-dagers backup, prioritert support, 14-dagers backups
- **Selvhostet Supabase** på Railway eller Fly.io: full kontroll, betaler kun server (~$40–80/mnd), men krever DevOps-kompetanse

### Alternativer vurdert (og forkastet)

| Alternativ | Vurdering |
|-----------|-----------|
| Firebase | ❌ Uforutsigbar pris ved vekst, sterk Google-binding, storage fjernet fra gratis plan |
| PlanetScale | ❌ Fjernet gratis plan i 2024, minste plan $39/mnd |
| Neon | 🟡 Godt for ren PostgreSQL, men mangler auth/storage/realtime — krever 3 ekstra tjenester |
| AWS RDS | ❌ Mye dyrere og langt mer komplekst å drifte |

**Konklusjon: Bli på Supabase. Oppgrader til Pro ved første inntekt.**

### Den egentlige skaleringsutfordringen: Claude API-kostnadene

| Brukere (daglig aktive) | Claude API-kostnad/mnd (estimat) |
|------------------------|----------------------------------|
| 100 | ~kr 500 |
| 1 000 | ~kr 5 000 |
| 5 000 | ~kr 25 000 |
| 10 000 | ~kr 50 000 |

Dette understreker at freemium-modellen (gratis = Haiku, premium = Opus) er kritisk. Gratis-brukere må ikke skalere kostnadene ukontrollert.

**Neste handling:** Sett opp keepalive-ping + ekstern backup. Gjøres før soft launch.

---

*Aton Teknologi AS — under Aton Group AS (100%)*
*Dokument opprettet: 4. juni 2026 | Sist oppdatert: 5. juni 2026*
