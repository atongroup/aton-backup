# AtonApp — Konsept & Strategi
**Versjon:** 1.0.0  
**Dato:** 4. juni 2026  
**Eier:** Aton Teknologi AS / Leif E. Sunde  
**Status:** Konseptfase

---

## Visjon

> *«Den eneste AI-assistenten som faktisk kjenner deg — og aldri glemmer.»*

AtonApp er en personlig AI-sekretær bygget rundt Claude, der all hukommelse og alle data lagres i brukerens egen sky — ikke hos oss. Appen bygger automatisk opp et strukturert «livsoperativsystem» rundt brukeren fra første innlogging, og blir smartere for hver dag som går.

---

## Problemet vi løser

Alle AI-apper i dag har én fatal svakhet: **de glemmer deg**. Hver samtale starter fra null. Du forklarer hvem du er, hva du jobber med og hva du trenger — igjen og igjen.

De få appene som har persistent minne lagrer dataene dine hos seg selv. Du eier ingenting. Du kan ikke eksportere, redigere eller slette. Og i Europa er dette et GDPR-problem som venter på å eksplodere.

**AtonApp løser begge problemene samtidig.**

---

## Løsningen

En personlig AI-sekretær som:

1. **Husker alt** — via Anthropic Managed Agents Memory Stores (public beta april 2026) og brukerens egen Google Drive eller iCloud
2. **Kjenner deg dypt** — REGLER (hvem du er), HUSKELISTE (hva du har lovet), SLAGPLAN (hva du vil oppnå)
3. **Handler for deg** — Gmail, Calendar, Drive, iCloud direkte fra appen
4. **Tilhører deg** — alle data i din sky, full eksport, full kontroll
5. **Blir smartere over tid** — jo mer du bruker den, jo bedre kjenner den deg

---

## Markedet

| Parameter | Tall | Kilde |
|-----------|------|-------|
| AI personal assistant-markedet 2026 | Vokser fra USD 3,8B (2025) | Alfred/Business Research Co. |
| Enterprise-apper med AI-agenter innen 2026 | 40% (opp fra 5% i 2025) | Jenova.ai |
| Gjennomsnittspris toppkonkurrenter | USD 49–349/mnd | Arahi.ai |
| Freemium-konverteringsrate AI-apper | 3–8% | RevenueCat State of Subs 2026 |

**Konklusjonen:** Markedet er enormt, voksende og fortsatt umodent. De beste produktene koster for mye og eier brukerens data. Det er et åpent vindu.

---

## Konkurransebilde

| Produkt | Styrke | Svakhet | AtonApp-fordel |
|---------|--------|---------|----------------|
| Personal AI (Arahi) | Persistent minne, 1500+ integrasjoner | $49–349/mnd, data hos dem | Rimeligere, data hos deg |
| Lindy | Lærer kommunikasjonsstilen din | Kompleks setup, ingen app-eierskap | Enklere onboarding, data-eierskap |
| Notion AI | Integrert i Notion-workspace | Kun produktivitet, ingen livsOS | Dekker hele livet, ikke bare jobb |
| ChatGPT / Claude | Kjent, kraftig | Glemmer deg mellom sesjoner | Permanent minne, strukturert |
| Mem.ai | Automatisk organisering av notater | Ingen agenthandlinger | Kan faktisk gjøre ting for deg |

**Unik posisjon:** AtonApp er den eneste som kombinerer (1) permanent strukturert minne, (2) data-eierskap i egen sky og (3) proaktiv handling — i én app til overkommelig pris.

---

## Produktkonsept

### Kjernekonseptet: Livsoperativsystemet

Når brukeren logger inn første gang, bygger AtonApp automatisk følgende struktur i deres Google Drive eller iCloud:

```
AtonApp/
├── PROFIL.md          — Hvem du er. Bakgrunn, verdier, mål.
├── REGLER.md          — Hvordan du vil at Claude skal oppføre seg mot deg
├── HUSKELISTE.md      — Åpne oppgaver, løfter, frister
├── SLAGPLAN.md        — Dine mål og din strategi
├── KONTAKTER/         — Viktige personer og relasjoner
├── PROSJEKTER/        — Aktive prosjekter med kontekst
└── ARKIV/             — Fullførte oppgaver og historikk
```

Claude leser alltid PROFIL + REGLER + HUSKELISTE før den svarer. Alle viktige svar og beslutninger kan lagres tilbake i strukturen med ett trykk.

### Onboarding — 5 minutter til en assistent som kjenner deg

1. Logg inn med Apple eller Google
2. Svar på 8 spørsmål om deg selv (jobb, mål, kommunikasjonsstil, hvem er viktig for deg)
3. AtonApp oppretter strukturen i din sky
4. Første samtale med Claude — den kjenner deg allerede

### Daglig bruk

- **Morgenbrief** — Claude oppsummerer dagens kalender, åpne oppgaver og relevant kontekst
- **Chat** — still spørsmål, få hjelp med e-post, beslutninger, planlegging
- **Lagre** — ett trykk lagrer innsikt eller oppgave i riktig mappe
- **Handlinger** — Claude kan sende e-post, opprette kalenderoppføring, lagre dokument

---

## Teknisk Arkitektur

```
┌─────────────────────────────────────────────────────┐
│                     BRUKER                          │
│              iOS / Android / Web                    │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────┐
│               ATON APP FRONTEND                     │
│         React Native (Expo) + TypeScript            │
│   Sign in with Apple  |  Sign in with Google        │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────┐
│              BACKEND (Supabase)                     │
│   Auth  |  User registry  |  Subscription state    │
│   Proxy til Anthropic API  |  RevenueCat webhook    │
└──────┬───────────────────────────┬──────────────────┘
       │                           │
┌──────▼──────────┐    ┌───────────▼────────────────┐
│  ANTHROPIC API  │    │     BRUKERENS SKY          │
│ Managed Agents  │    │  Google Drive / iCloud     │
│ Memory Stores   │    │  PROFIL / REGLER /         │
│ Claude Sonnet   │    │  HUSKELISTE / SLAGPLAN     │
└─────────────────┘    └────────────────────────────┘
                                   │
                   ┌───────────────▼──────────────────┐
                   │        GOOGLE SERVICES           │
                   │  Gmail  |  Calendar  |  Drive    │
                   │     (MCP via Anthropic)          │
                   └──────────────────────────────────┘
```

### Teknisk stack

| Lag | Teknologi | Begrunnelse |
|-----|-----------|-------------|
| Frontend | React Native (Expo) | iOS + Android + web fra én kodebase |
| Auth | Sign in with Apple + Google Sign-In | Obligatorisk for App Store |
| AI-kjerne | Anthropic Managed Agents + Memory Stores | Persistent minne uten egen infrastruktur |
| Primærlagring | Google Drive API + iCloud CloudKit | Data hos brukeren, ikke oss |
| Fallback-lagring | Supabase (PostgreSQL + Storage) | For brukere uten Google/Apple sky |
| Abonnement | RevenueCat | Håndterer App Store + Google Play billing |
| Backend | Supabase Edge Functions | Serverless, skalerer automatisk |
| Google-integrasjon | MCP (Anthropic native) | Gmail, Calendar, Drive direkte |

### Minnearkitektur — to lag

**Lag 1 — Anthropic Memory Store** (rask, sesjonsbasert)  
Brukerens PROFIL + REGLER lastes inn i Memory Store ved sesjonstart. Claude leser dette automatisk. Oppdateres løpende basert på samtaler.

**Lag 2 — Brukerens sky** (permanent, portabel)  
Alt lagres i Google Drive eller iCloud i lesbart Markdown-format. Brukeren eier og kan lese/redigere alt. Full eksport til enhver tid. GDPR-compliant by design.

---

## Forretningsmodell

### Priser

| Plan | Pris | Innhold |
|------|------|---------|
| **Gratis** | NOK 0 | 20 meldinger/dag, 1 GB sky, grunnleggende integrasjoner |
| **Pro** | NOK 129/mnd | Ubegrenset meldinger, 10 GB, alle integrasjoner, morgenbrief |
| **Pro Yearly** | NOK 990/år (NOK 82/mnd) | Alt i Pro, 25% rabatt |
| **Team** | NOK 299/mnd per bruker | Delte REGLER, felles HUSKELISTE, admin-panel |
| **Enterprise** | Fra NOK 4 900/mnd | White-label, custom prompt, SSO, SLA |

**Merk:** Abonnement utenfor App Store der mulig for å unngå Apples 30%-kutt. I-app kjøp tilbys parallelt for brukere som foretrekker det.

### Inntektsprojeksjon (konservativ)

| År | Betalende brukere | Snitt ARPU/mnd | MRR | ARR |
|----|-------------------|----------------|-----|-----|
| 2026 (intern) | 10–20 (Aton-nettverket) | NOK 129 | NOK 2 580 | NOK 31k |
| 2027 (lansering) | 500 | NOK 110 | NOK 55k | NOK 660k |
| 2028 (vekst) | 3 000 | NOK 115 | NOK 345k | NOK 4,1M |
| 2029 (skalering) | 10 000 | NOK 120 | NOK 1,2M | NOK 14,4M |

**White-label enterprise** er den store upside: én bedriftskontrakt på NOK 50–200k/år overgår tusenvis av Pro-brukere.

---

## Roadmap

### Fase 0 — Intern prototype (juni–august 2026)
- [ ] Grunnleggende React Native-app med Google Sign-In
- [ ] Kobling til Anthropic Managed Agents + Memory Stores
- [ ] Google Drive-integrasjon (les/skriv PROFIL/REGLER/HUSKELISTE)
- [ ] Chat-grensesnitt med persistent kontekst
- [ ] Testbrukere: Leif, Lone, Alexandra, Viking (Velumen)

### Fase 1 — MVP (september–desember 2026)
- [ ] Apple Sign-In
- [ ] iCloud CloudKit-støtte
- [ ] Morgenbrief-funksjon
- [ ] Gmail + Calendar-integrasjon via MCP
- [ ] Onboarding-flyt (8-spørsmåls-wizard)
- [ ] RevenueCat abonnement
- [ ] TestFlight (iOS) og beta-program

### Fase 2 — Lansering (Q1 2027)
- [ ] App Store + Google Play-lansering
- [ ] Proaktiv varsling (Claude pinger deg, ikke omvendt)
- [ ] Team-plan med delte dokumenter
- [ ] Norsk + engelsk UI

### Fase 3 — Skalering (2027–2028)
- [ ] White-label enterprise-pakke
- [ ] API for tredjepartsintegrasjoner
- [ ] Stemme-input (tale til sekretær)
- [ ] Skandinavia → Europa → global

---

## Differensiering — hvorfor AtonApp vinner

### 1. Data-eierskap er et konkurransefortrinn
I en verden der alle er bekymret for AI og personvern, er «din data i din sky» et budskap som resonerer — særlig i Norden og Europa. GDPR-compliant by design er ikke bare et juridisk krav, det er et markedsargument.

### 2. Livsoperativsystemet er unikt
REGLER / HUSKELISTE / SLAGPLAN er ikke bare notater — det er et rammeverk for å leve mer bevisst og produktivt. Ingen konkurrenter har dette konseptet. Det kan patenteres eller beskyttes som forretningshemmelighet.

### 3. Bevist internt
Aton-systemet er i aktiv bruk og bevist konseptet. Det er ikke en idé — det er et fungerende produkt i prototypestadiet. Investorer elsker det.

### 4. Timing er perfekt
Anthropic Memory Stores er bare måneder gammelt. Vi bygger på bleeding edge-infrastruktur som konkurrentene ikke ennå har tilgang til gjennom samme rammeverk.

---

## Team og ressurser

| Behov | Status | Neste steg |
|-------|--------|------------|
| Produktstrategi | ✅ Leif Sunde | — |
| Frontend-utvikler (React Native) | ⏳ Søkes | Launchpad eller freelance |
| Backend-utvikler (Supabase/Node) | ⏳ Søkes | Launchpad eller freelance |
| UX/design | ⏳ Søkes | Kan starte med Figma + AI |
| Anthropic API-kompetanse | ✅ Bevist i Aton Hub | — |

**Utviklingskostnad MVP (estimat):**  
2 utviklere × 3 måneder × NOK 120k/mnd = NOK 720 000  
Alternativt: outsource til Eastern Europe/India for NOK 200–300k total.

---

## Risiko og mitigeringer

| Risiko | Sannsynlighet | Konsekvens | Mitigering |
|--------|---------------|------------|------------|
| Anthropic endrer Memory Stores API | Lav | Høy | Abstraksjonslag i koden |
| Apple avviser appen | Middels | Høy | Grundig review-prep, advokat |
| Konkurrent lanserer lignende produkt | Middels | Middels | Bygg raskere, patent REGLER-konseptet |
| GDPR-klage | Lav | Høy | Data-eierskap er allerede løsningen |
| Lav konvertering fra gratis til betalt | Middels | Middels | A/B-test paywall, gratis tier begrenset nok |

---

## Investorpitch — tre setninger

AtonApp er den eneste AI-sekretærappen der all din data forblir i din egen sky, bygget på Anthropics nyeste Managed Agents-infrastruktur med persistent minne. Vi opererer i et AI personal assistant-marked som vokser fra USD 3,8 milliarder i 2025, med et bevist konsept allerede i bruk internt i Aton Group. Med white-label enterprise-lisensering som primær vekststrategi og en nordisk data-eierskap-posisjonering som er unik globalt, er vi tidlig inn i et marked ingen ennå eier.

---

## Neste steg

1. **Godkjenn konsept** — Leif sign-off på retning
2. **Rekrutter utvikler** — Launchpad-kandidat eller freelance React Native
3. **Bygg prototype** — 4–6 uker, intern testgruppe
4. **Iterer** — Leif, Lone, Alexandra, Viking som testbrukere
5. **Søk SkatteFUNN** — FoU-kostnader kvalifiserer
6. **Vurder EIC** — hvis prototype er sterk nok innen Q4 2026

---

*Sist oppdatert: 4. juni 2026 · v1.0.0*  
*Aton Teknologi AS · Leif E. Sunde · leif@atongroup.no*
