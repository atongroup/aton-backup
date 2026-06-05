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
| **Aton Premium** | **Claude Opus** | **99 kr/mnd** | Norsk, personlig, brief, stemme, bilder, minneprofil |

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
| **Gratis** | 0 kr | Haiku-modell, 5 meldinger/dag, ingen stemme |
| **Premium** | 99 kr/mnd | Opus-modell, ubegrenset, stemme, bilder, minne |
| **Aton Business** | 299 kr/mnd (fremtidig) | Team-funksjoner, API-tilgang, admin-panel |

### Kostnadsstruktur per bruker/mnd
| Brukertype | Claude API | ElevenLabs | Supabase | Total |
|------------|-----------|------------|----------|-------|
| Gratis (Haiku) | ~kr 5 | kr 0 | kr 0 | **~kr 5** |
| Premium (Opus) | ~kr 60 | ~kr 10 | kr 0 | **~kr 70** |

**Margin Premium:** 99 kr − 70 kr = **29 kr (~29%)**

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

*Aton Teknologi AS — under Aton Group AS (100%)*
*Dokument opprettet: 4. juni 2026 | Sist oppdatert: 5. juni 2026*
