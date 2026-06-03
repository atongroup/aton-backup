# QC-SJEKKLISTE — Kjøres FØR hver ny versjon leveres

**Obligatorisk. Ingen ny ZIP uten at alle punkter er sjekket.**
Sist oppdatert: 1. juni 2026 · v2.3.6

---

## 1. FASIT-verifisering

Før noe publiseres — sjekk at alle tall og statuser er hentet fra FASIT.md, ikke fra hukommelsen.

- [ ] Alle tekniske tall stemmer med FASIT (fartøylengde, kran, kapasitet, gate fee, GFG-pris, EBITDA)
- [ ] Markedsdata stemmer med FASIT (BCC Research 26. mai 2026)
- [ ] EIC-beløp og ID stemmer (€17,5M · ID 101354477)
- [ ] Patent-numre stemmer (20260735 + 20260736 · innlevert 28. mai 2026)
- [ ] CO₂-tall stemmer med FASIT (75–125k t/fartøy/år · 2,5 t CO₂e/tonn)

---

## 2. Partnerstatus-regler (kritisk)

**Tre gyldige nivåer — ingen andre:**

| Status | Når brukes | Eksempel |
|--------|-----------|---------|
| `Bekreftet (skriftlig)` | Skriftlig ja mottatt — brev, e-post med bekreftelse, signert LOI | ECCA/EuCIA |
| `Dialog pågår` | Svar mottatt, men ingen forpliktelse ennå | Anders Valland |
| `Kontaktet` | Brev/e-post sendt — ingen respons | SINTEF, Vard, Ørsted |

**Sjekkliste for hvert partnerkort på nettsiden:**
- [ ] Er denne partneren i FASIT?
- [ ] Stemmer status på siden med FASIT?
- [ ] Brukes ordene «partner», «samarbeider», «avtale» uten skriftlig bekreftelse? → **FJERN**
- [ ] Antyder teksten at noe er fullført som ikke er det? → **KORRIGER**

**Partnere som ikke må fremstå som mer enn «Kontaktet»:**
Corvus, Vestas, Stena Recycling, Wärtsilä, Ørsted, Vattenfall, Hanwha Ocean, Hyundai,
Nvidia, Tesla, Aker Horizons, Nysnø, NFD, Maritime CleanTech, Norsepower, Gjenkraft,
Fellesforbundet, Univ. of Maine, SINTEF, Vard, Ulstein, Green Yard, PALFINGER, Kongsberg, DNV

**Equinor: ikke kontaktet per EmailLogg — vis kun som «Target partner»**

---

## 3. Tilskuddspipeline-regler

- [ ] Ingen program vist som «forberedes» uten KK-godkjenning
- [ ] UK ZEVI 2 er fjernet — **aldri legg tilbake** (kun UK-registrerte kan lede)
- [ ] UNEP R9 er fjernet — **aldri legg tilbake** (kun stater)
- [ ] EU CID er fjernet — **aldri legg tilbake** (feil sektor, for tidlig)
- [ ] Maritim Zero 2050 vises kun som «Avventer avklaring» inntil Anders Valland bekrefter
- [ ] Enova «Banebrytende maritim» er fjernet — **aldri legg tilbake**
- [ ] Enova «Forprosjekt» (NOK 500k) er OK å vise
- [ ] Grønn Plattform vises som «2027 — skisse mars 2027»

---

## 4. Koblingsregler (fra FASIT)

| Fra | Til | Tillatt |
|-----|-----|---------|
| atongroup.no | bladeship.no | ✅ |
| atongroup.no | trashship.no | ✅ |
| bladeship.no | atongroup.no | ✅ |
| bladeship.no | trashship.no | ❌ **ALDRI** |
| trashship.no | bladeship.no | ❌ **ALDRI** |
| trashship.no | atongroup.no | ✅ |

- [ ] Ingen krysslenker i strid med tabellen over

---

## 5. Innholds-sannhetskrav

**bladeship.no:**
- [ ] Ingen påstander om bekreftede partneravtaler uten dekning i FASIT
- [ ] DNV/Lloyd's: kun «planlagt sertifisering» — ikke «fullført»
- [ ] Tilskuddsbeløp og statuser stemmer med FASIT-pipeline
- [ ] Ingen tall som «22 programmer» eller «NOK 113M» — bruk oppdaterte tall

**atongroup.no:**
- [ ] Velumen AS: status «under stiftelse juni 2026» — ikke «aktiv» før stiftet
- [ ] velumen.no-lenke: vis kun når siden er live
- [ ] BladeShip: 100% eiet ✅
- [ ] TrashShip: «In Development · 2027» ✅

**trashship.no:**
- [ ] Ingen tekniske detaljer (GRP, prosesslinje, patent) — kun «coming soon»
- [ ] Ingen investeringsforespørsler — kun tidlig dialog

---

## 6. Teknisk HTML-sjekk

- [ ] `<td>` åpne = `</td>` lukkede (ingen ubalanse)
- [ ] `<tr>` åpne = `</tr>` lukkede
- [ ] Ingen `background:var(--ink)` på mørke seksjoner (--ink = lys farge)
- [ ] Ingen `color:var(--teal-pale)` som tekstfarge (--teal-pale = nesten svart)
- [ ] Ingen `color:var(--foam)` på mørk bakgrunn (--foam = nesten svart)
- [ ] Chapter VIII (economics): bakgrunn hardkodet `#0a0f14`, tekst lesbar

---

## 7. Versjonshåndtering

- [ ] Alle tre HTML-filer oppdatert
- [ ] FASIT.md oppdatert med dato og ny versjon
- [ ] HUSKELISTE.md oppdatert med fullførte oppgaver
- [ ] ZIP-mappe bumped til ny versjon (1.5.X)
- [ ] Ingen duplikate filer i ZIP

---

*Denne filen er masterrutinen. Oppdater den når nye regler etableres.*
