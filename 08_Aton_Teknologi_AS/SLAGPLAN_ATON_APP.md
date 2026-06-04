# Slagplan — Aton App | Aton Teknologi AS
**Versjon:** 1.0 | **Dato:** 4. juni 2026 | **Status:** 🚀 I aktiv utvikling

---

## Oversikt

Aton-appen er Aton Teknologi AS sitt forbrukerproduktet — en personlig AI-assistent for privatpersoner og gründere. Utviklet av Aton Teknologi AS, eid 100% av Aton Group AS.

```
Aton Group AS (100% eier)
└── Aton Teknologi AS
    ├── Produkt 1: Aton AI Starter Pack (SMB-konsultering)
    └── Produkt 2: Aton App (forbrukerapp — dette dokumentet)
```

---

## Produktbeskrivelse

| Egenskap | Verdi |
|----------|-------|
| Plattform | Android (APK) → Google Play → App Store |
| Tech-stack | React Native / Expo SDK 54, Supabase, Claude API, ElevenLabs |
| Repo | github.com/atongroup/atonapp |
| Nåværende versjon | v1.2.1 (under bygg) |
| Utgiver (fremtidig) | Aton Teknologi AS (org.nr. TBD) |

### Kjernefunksjoner
- 🌅 Personlig morgenbrief (AI-generert, daglig)
- 💬 Chat med AI — tekst, tale og bilde/kamera
- 🧠 Hukommelse — Aton lærer og husker brukeren
- ✅ Oppgavehåndtering med prioritet
- 🎯 Målsporing med progresjonsbar
- 🎙️ ElevenLabs stemme (norsk/engelsk)
- 📷 Bildeanalyse — dokumenter, kvitteringer, whiteboards

---

## Økonomimodell

### Inntektsstruktur

| Nivå | Pris | Modell |
|------|------|--------|
| **Gratis** | 0 kr | Haiku-modell, 5 meldinger/dag, ingen stemme |
| **Premium** | 99 kr/mnd | Opus-modell, ubegrenset, stemme, bilder, minne |
| **Aton Business** | 299 kr/mnd (fremtidig) | Team-funksjoner, API-tilgang, admin-panel |

### Kostnadsstruktur per bruker/mnd

| Brukertype | Claude API | ElevenLabs | Supabase | Total kostnad |
|------------|-----------|------------|----------|---------------|
| Gratis (Haiku) | ~kr 5 | kr 0 | kr 0 | **~kr 5** |
| Premium (Opus) | ~kr 60 | ~kr 10 | kr 0 | **~kr 70** |

**Margin Premium:** 99 kr − 70 kr = **29 kr (~29%)** — øker med skala via volum-rabatter.

### Break-even analyse

| Scenario | Antall Premium | MRR |
|----------|---------------|-----|
| Break-even drift | ~20 brukere | 1 980 kr |
| Lønnsom drift | ~100 brukere | 9 900 kr |
| Bærekraftig | ~500 brukere | 49 500 kr |
| Ambisjon år 2 | ~2 000 brukere | 198 000 kr/mnd |

### Teknisk prisoptimalisering
- Gratis → Claude Haiku 4.5 ($1/$5 per MTok) ✅
- Premium → Claude Opus 4-6 ($5/$25 per MTok) ✅
- Prompt caching: -90% på gjentatte system-prompter (implementeres Q3)
- Batch-prosessering for morgenbrief: -50% kostnad (implementeres Q3)

---

## Strategisk begrunnelse — Hvorfor gratis?

1. **Viral vekst** — ingen betalingsmur = brukere deler appen
2. **Markedsdata** — gratis brukere gir innsikt i faktisk bruk
3. **Norsk nisjekontroll** — ingen store aktører tilbyr norsk personalisering
4. **Feeder inn i SMB** — forbrukerbrukere blir fremtidige Aton Starter Pack-kunder
5. **Konkurransen** — ChatGPT/Claude/Gemini har alle gratis-nivåer; vi MÅ ha det

---

## Lanserings-roadmap

### Fase 0 — Nå (juni 2026)
- [x] App bygget (React Native + Expo)
- [x] Supabase database oppe
- [x] Claude API via proxy
- [x] ElevenLabs stemme
- [x] Kamera og bildeanalyse
- [x] Onboarding + velkomstskjerm
- [x] Egypt-tema design
- [ ] APK-bygg fungerende ← **pågår**
- [ ] Google Play konto → publiser APK
- [ ] RevenueCat integrert for abonnement

### Fase 1 — Soft launch (juli–august 2026)
- [ ] APK tilgjengelig på atongroup.no/app/
- [ ] Første 10–50 brukere (Leifs nettverk)
- [ ] Freemium-modell live
- [ ] Feedback og iterering
- [ ] Grunnleggende analytics (Supabase + user_meta)

### Fase 2 — Premium launch (september–oktober 2026)
- [ ] RevenueCat + Stripe for betaling
- [ ] Haiku vs Opus basert på plan
- [ ] Premium-skjerm i appen
- [ ] Google Play offentlig lansering
- [ ] Mål: 50 betalende brukere

### Fase 3 — Vekst (2027)
- [ ] App Store (iOS) — krever Apple Developer $99/år
- [ ] Aton Business-plan
- [ ] SkatteFUNN-søknad for apputvikling
- [ ] Ansette/partner CTO/utvikler
- [ ] Mål: 500+ betalende brukere

---

## Strukturelt oppsett — Aton Teknologi AS

### Selskapsstruktur (når stiftet)
```
Aton Group AS
└── Aton Teknologi AS (100%)
    ├── Stiftes: Etter Aton Group org.nr. (~august 2026)
    ├── Aksjekapital: NOK 30 000
    ├── Daglig leder: Leif E. Sunde
    ├── Eier IP: Aton-appen, kode, design, algoritmer
    └── Inntekter: Premium-abonnement, Business-plan
```

### IP og lisensering
- **Kildekode** eies av Aton Teknologi AS (overføres fra privat eierskap ved stiftelse)
- **Domener:** atonapp.no registreres ved stiftelse
- **Varemerkesøknad:** «Aton» som app-navn — sjekkes mot Patentstyret
- **Management fee:** NOK 3 000/mnd til Aton Group fra mnd 6

### Nødvendige tiltak FØR markedslanser
1. Stifte Aton Teknologi AS i Altinn
2. Åpne bankkonto for selskapet
3. Registrere som utgiver på Google Play Console ($25 engangsbeløp)
4. RevenueCat-konto kobles til Google Play
5. Personvernerklæring og vilkår publiseres på atongroup.no/app/personvern

---

## Teknisk gjøremålsliste

### Umiddelbart (appen)
- [ ] Fikse APK Gradle-byggfeil
- [ ] Implementere Haiku for gratis/Opus for premium
- [ ] RevenueCat SDK inn i App.tsx
- [ ] Betalingsskjerm (upgrade to Premium)
- [ ] Google Login fungerende i APK

### Infrastruktur
- [ ] user_meta tabell ✅ (opprettet 4. juni 2026)
- [ ] Supabase RLS på alle tabeller
- [ ] Analytics dashboard (hvem bruker hva)
- [ ] Push-varsler for morgenbrief ✅

### Landingsside
- [ ] atongroup.no/app/ med nedlastingsknapp ✅ (HTML laget 4. juni)
- [ ] Laste opp APK når ferdig
- [ ] Personvernerklæring

---

## Konkurrenter og posisjonering

| Konkurrent | Pris | Svakhet vs Aton |
|-----------|------|----------------|
| ChatGPT Plus | $20/mnd | Ikke norsk, ingen brief, ingen stemme på norsk |
| Claude Pro | $20/mnd | Kun chat, ingen app, ingen brief |
| Saner.AI | $15/mnd | Ikke norsk, komplisert |
| Microsoft Copilot | $18/mnd | Krever M365, enterprise-fokus |
| **Aton Premium** | **99 kr/mnd** | Norsk, personlig, brief, stemme, bilder |

**Aton er 3–5× billigere enn konkurrentene og den eneste norskspråklige personlige AI-assistenten.**

---

## KPIer å følge

| Metrikk | Mål Fase 1 | Mål Fase 2 | Mål 2027 |
|---------|-----------|-----------|---------|
| Totale brukere | 50 | 500 | 5 000 |
| Premium-andel | 5% | 10% | 15% |
| Premium MRR | 250 kr | 5 000 kr | 75 000 kr |
| Churn/mnd | <20% | <10% | <5% |
| API-kostnad/MRR | <80% | <60% | <40% |

---

## Siste status (4. juni 2026)

- ✅ Appen fungerer i Expo Go
- ✅ Kamera, stemme, chat, oppgaver, mål, profil — alt operativt
- ✅ Egypt-design implementert
- ✅ Velkomstskjerm + onboarding (5 spørsmål)
- ✅ Provider-logging (user_meta i Supabase)
- ✅ Landingsside HTML klar
- 🔄 APK-bygg pågår (Gradle-feil under utbedring)
- ⏳ RevenueCat — ikke startet
- ⏳ Premium/Haiku-split — ikke startet

---

*Aton Teknologi AS — under Aton Group AS (100%)*
*Dokument opprettet: 4. juni 2026 | Neste revisjon: 1. august 2026*
