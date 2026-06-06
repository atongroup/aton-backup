# ATON APP — SLAGPLAN
### «Greed is good. Speed is better.»
**Versjon:** 1.0 | **Dato:** 4. juni 2026 | **Konfidensielt**

---

## THE THESIS

Det norske markedet for personlig AI-assistanse er **uoccupied**. 
ChatGPT er amerikansk. Claude er amerikansk. Ingen eier det norske sinnet.

Aton eier det.

Vi er ikke en chatbot. Vi er ikke en app. 
**Vi er den første digitale assistenten som faktisk kjenner deg — på norsk.**

Vinduet er åpent. Det lukker seg om 12–18 måneder når Microsoft, Google og OpenAI 
lokaliserer sine produkter for Norden. 

**Vi må eie markedet før de ankommer.**

---

## FASE 1 — «BEACH LANDING» (juni–august 2026)
*Mål: Fotfeste. 500 brukere. Null kompromisser.*

### Uke 1–2 (nå)
- [ ] APK-bygg fungerer → last opp til atongroup.no/app/
- [ ] Del APK-lenken med 20 personer du stoler på
- [ ] Google Play Console registrering ($25) → gjøres denne uken
- [ ] Bekreft RevenueCat e-post → dashboard klart
- [ ] Subscriptions-tabell i Supabase → kjør SQL

### Uke 3–4
- [ ] Google Play — intern testing (closed track, 20 testere)
- [ ] Samle feedback systematisk — Google Form eller Supabase-tabell
- [ ] Iterer raskt — maks 48t fra bug-rapport til fix
- [ ] LinkedIn-post: «Bygger Norges første personlige AI-assistent»

### Måned 2 (juli 2026 — Leif fri fra NSE)
- [ ] Google Play — åpen beta
- [ ] Onboarding poleres basert på feedback fra fase 1
- [ ] Morgenbrief-kvalitet skrues opp
- [ ] Mål: **200 aktive brukere**

### Måned 3 (august 2026)
- [ ] Google Play — full lansering (public)
- [ ] Apple Developer konto ($99) → App Store submission
- [ ] Første LinkedIn-kampanje: 3 poster/uke
- [ ] Mål: **500 aktive brukere**

**FASE 1 CHECKPOINT:** 500 brukere = grønt lys for Premium

---

## FASE 2 — «MONETIZE» (september–oktober 2026)
*Mål: Første krone. Bevis på betalingsvilje.*

### Aktivér Premium
- Sett `FREE_MSG_LIMIT = 10` (ned fra 999)
- RevenueCat kobles til Google Play Billing
- 99 kr/mnd aktiveres i appen
- Push-varsel til alle eksisterende brukere: «Takk for at du har vært med fra starten»

### Konverteringsstrategi
- Gratis-brukere får 14 dagers gratis Premium ved lansering
- «Tidlig tilgang»-pris: 69 kr/mnd i 3 måneder → deretter 99 kr
- Personlig e-post fra Leif til de første 100 brukerne

### Mål Fase 2
| Metrikk | Mål |
|---------|-----|
| Totale brukere | 1 000 |
| Premium-andel | 8% |
| MRR | ~6 000 kr |
| Churn | < 15%/mnd |

---

## FASE 3 — «SCALE» (november 2026 – mars 2027)
*Mål: Uunngåelig. Folk anbefaler Aton til hverandre.*

### Produkt
- Aton husker alt — samtaler, møter, beslutninger
- Kalenderintegrasjon (Google Calendar)
- E-postintegrasjon (Gmail-sammendrag)
- «Del Aton»-funksjon: gi en venn 30 dager gratis

### Marked
- 5 norske business-podkaster → sponsoravtale eller gjesteintervju
- Partnerskap med Aton Hub-nettverket (gründere)
- LinkedIn thought leadership: Leif poster om AI for norske gründere

### Struktur
- Stifte **Aton Teknologi AS** (når MRR > 20 000 kr)
- Søke SkatteFUNN for apputvikling
- Google Play-inntekter inn i Aton Teknologi AS
- Vurdere ekstern investering eller bootstrappe videre

### Mål Fase 3
| Metrikk | Mål |
|---------|-----|
| Totale brukere | 5 000 |
| Premium-andel | 12% |
| MRR | ~60 000 kr |
| ARR | ~720 000 kr |

---

## FASE 4 — «DOMINATE» (2027+)
*Mål: Aton = norsk AI. Punkt.*

### Produktvisjon
- Aton Business — team-versjon for SMB (kobler til Aton Starter Pack)
- Aton API — la andre bygge på Atons minne og brief-motor
- Aton for bedrifter — white-label til norske bedrifter
- Nordic expansion — Sverige, Danmark, Finland

### Exit-scenarioer (om ønskelig)
- Strategisk salg til norsk mediegruppe/telco
- IPO på Euronext Growth Oslo
- Bootstrappe til cashflow-positiv og beholde kontrollen

### Verdsettelse-potensial
Ved 10 000 betalende × 99 kr × 12 mnd = **~12M kr ARR**
SaaS-multippel 5–10x = **60–120M kr verdivurdering**

---

## KONKURRANSEBILDET — HANDLE NÅ

| Trussel | Sannsynlighet | Tidshorisont |
|---------|--------------|--------------|
| ChatGPT norsk lokalisering | Høy | 12–18 mnd |
| Google Gemini norsk | Høy | 6–12 mnd |
| Norsk startup kopierer konseptet | Middels | 6–18 mnd |
| Microsoft Copilot consumer-push | Høy | 12 mnd |

**Konklusjon:** Vi har maksimalt 12 måneder på å etablere en brukerbase 
som er lojal nok til å bli der selv når de store ankommer.

Lojalitet skapes av **minne og vane**. 
Aton er den eneste som husker hva du sa for 6 måneder siden.
Det er vår vollgrav.

---

## RESSURSER OG KAPITAL

### Hva dette koster å gjennomføre
| Post | Kostnad |
|------|---------|
| Google Play Console | $25 (engang) |
| Apple Developer | $99/år |
| API-kostnader (500 gratis brukere/Haiku) | ~$250/mnd |
| ElevenLabs | $5–22/mnd |
| Supabase | Gratis til 50K brukere |
| RevenueCat | Gratis til $10K MRR |
| **Total launch-kostnad** | **~$300–400/mnd** |

### Break-even
**20 betalende Premium-brukere** dekker alle driftskostnader.

---

## DAGLIG OPERASJON (Leif alene, rotasjon)

### På rotasjon (Stord)
- Svare på bruker-feedback på kveldene
- Godkjenne kritiske bugfikser
- Poste på LinkedIn 2x/uke

### I friperioden (3 uker av)
- Full sprint: nye features, feedback-iterasjon
- Brukermøter (video/telefon) med de 10 mest aktive brukerne
- Planlegge neste sprint

### Automatisert
- Morgenbrief kjører selv
- Supabase tar seg av data
- EAS Build for nye APK-versjoner
- RevenueCat håndterer abonnement

---

## NØKKELTALL Å FØLGE

| KPI | Ukentlig | Månedlig |
|-----|----------|---------|
| Nye brukere | ✓ | ✓ |
| DAU (daglig aktive) | ✓ | ✓ |
| Meldinger sendt | ✓ | ✓ |
| Churn | — | ✓ |
| MRR (fra fase 2) | — | ✓ |

**Analytics-verktøy:** Supabase user_meta + messages-tabell.
Enkel dashboard lages i Aton Hub når vi har 100+ brukere.

---

## SITAT Å LEVE ETTER

> «I don't throw darts at a board. I bet on sure things.»
> — Gordon Gekko

Aton er en sikker satsing fordi:
1. **Markedet eksisterer** — alle norske gründere trenger en AI-assistent
2. **Produktet fungerer** — appen er bygget og testet
3. **Kostnadene er lave** — $300/mnd for å drifte
4. **Vinduet er åpent** — ingen eier dette markedet ennå
5. **Leif kjenner markedet** — gründer, nettverk, troverdighet

**Det eneste spørsmålet er tempo.**

*Ship it.*

---

*Aton Teknologi AS (under Aton Group AS)*
*Konfidensielt — 4. juni 2026*
