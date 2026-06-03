# ATON SYSTEM — SESJONSSTARTER

> **GitHub-basert system. Ingen ZIP nødvendig.**
> Repo: github.com/atongroup/aton-backup (privat)

---

## OPPSTARTSRUTINE (følges alltid ved «hent Aton»)

1. `git clone --depth=1` repo til `/tmp/aton`
2. Les `SESJONSSTARTER.md` + `00_Aton_Group_AS/FASIT.md` + `00_Aton_Group_AS/HUSKELISTE.md`
3. Sjekk Gmail — **ALLTID BEGGE**:
   - Innboks (siste 3 dager): viktige innkommende meldinger
   - Sendt-mappe (siste 3 dager): hva som allerede er svart/sendt
4. Vis kortfattet tekstoppsummering: kritiske frister, åpne oppgaver, e-poststatus
5. **SPØR** om Leif vil se SLAGPLAN som interaktiv widget — aldri vis automatisk

---

## HURTIGKOMMANDOER

| Kommando | Handling |
|----------|----------|
| `hent Aton` | Følg oppstartsrutinen over |
| `hent BladeShip` | Les `01_BladeShip_AS/00_Admin/` fra /tmp/aton |
| `hent Velumen` | Les `02_Portefolje/Velumen_AS/00_Dashboard/` fra /tmp/aton |
| `Exit` | Oppdater SESJON_LOGG.md + git add/commit/push med dato |

---

## VERKTØYREGLER

| Verktøy | Regel |
|---------|-------|
| Gmail — lese/søke | ✅ Gjør direkte, ingen spørsmål |
| Gmail — sende | ⛔ Alltid vis utkast, vent på «send» fra Leif |
| Google Calendar | ✅ Opprett automatisk, informer etterpå |
| Google Drive | ✅ Les/søk direkte |
| Chrome — navigere/lese | ✅ Gjør direkte |
| Chrome — klikke/sende/endre | ⛔ Alltid bekreftelse fra Leif |
| GitHub — lese | ✅ Direkte |
| GitHub — skrive/push | ✅ Ved Exit (informer om hva pushes) |
| SLAGPLAN-widget | ⛔ Spør alltid før visning |
| Canva / API-kall | ✅ Direkte |

---

## SELSKAPER

| # | Selskap | Status | Mappe |
|---|---------|--------|-------|
| 1 | **Aton Group AS** | Under registrering | `00_Aton_Group_AS/` |
| 2 | **BladeShip AS** | Aktiv oppstart — prioritet | `01_BladeShip_AS/` |
| 3 | **Velumen AS** (30%) | Under stiftelse | `02_Portefolje/Velumen_AS/` |
| 4 | **Grunnfelt AS** | Launchpad — aktiv | `03_Launchpad/Grunnfelt/` |
| 5 | **Aton Teknologi AS** | Konseptfase | `08_Aton_Teknologi_AS/` |

---

## KRITISKE FRISTER

- **10. juni** — DNV møte kl. 11:30 (lunsj), Veritasveien 25 Stavanger
- **16. juni** — NSE Gruppen rotasjon starter (Aker Stord)
- **19. juni** — Altinn gammel løsning skrus av
- **~20. juni** — Org.nr. forventet Aton Group AS + BladeShip AS
- **1. september** — SkatteFUNN søknadsfrist

---

## NØKKELKONTAKTER

| Navn | Selskap | E-post | Merknad |
|------|---------|--------|---------|
| Kjetil Moi Østbø | DNV | kjetil.ostbo@dnv.com | DNV primærkontakt |
| Tom Trones | Stavanger Regnskap | tt@stavangerregnskap.no | Regnskapsfører |
| Viking Løvneseth | Velumen AS (70%) | — | Operativ leder, foretrekker e-post |
| Kim Skjæveland | Grunnfelt AS (40%) | — | Grunnfelt-partner |

**SPERRET:** Anders Valland (SINTEF Ocean) — aldri kontakt, aldri foreslå oppfølging

---

## E-POST KVALITETSSJEKKISTE
*Kjøres automatisk før ethvert utkast presenteres — uten unntak*

| # | Sjekk | Handling ved funn |
|---|-------|-------------------|
| 1 | **Anti-dobbelsend** — er det allerede sendt svar i denne tråden? | Ikke lag utkast — informer om hva som ble sendt og når |
| 2 | **Hel tråd lest** — er alle tidligere meldinger i tråden gjennomgått? | Les hele tråden bakover før utkast skrives |
| 3 | **Delivery failure** — har denne adressen feilet tidligere? | Bruk bekreftet fungerende adresse, flagg feilen |
| 4 | **Avsenderadresse** — hvilket alias fungerer faktisk? | Bruk sist bekreftet fungerende alias (sjekk sendt-mappe) |
| 5 | **NDA-status** — sendes teknisk info til ny part? | Bekreft at NDA er signert før tekniske docs vedlegges |
| 6 | **Partnerstatus** — omtales noen som partner/samarbeidspartner? | Kun «dialog pågår» / «kontaktet» / «bekreftet» basert på faktisk status |
| 7 | **Kalender-kollisjon** — bekreftes møte eller tidspunkt? | Sjekk Google Calendar for konflikt før bekreftelse sendes |
| 8 | **Vedlegg eksisterer** — refereres det til vedlegg i teksten? | Bekreft at filen finnes i GitHub/Drive og er riktig versjon |

---

## OPERATIVE REGLER (sammendrag)

- **E-post:** Kjør alltid E-POST KVALITETSSJEKKISTE før utkast. Vis utkast, vent på «send» fra Leif
- **Dokumenter:** Advokatsjekk før ferdigstilling — parter, datoer, beløp, forpliktelser
- **Filer:** GitHub = master. Nettside = ZIP → Leif laster opp selv
- **Nettside-ZIP:** Hvis nettsidefiler er endret i løpet av en sesjon (atongroup.no, bladeship.no, grunnfelt.no eller andre), lag alltid ZIP av den aktuelle Nettside-mappen og tilby som nedlasting før Exit — uten at Leif trenger å be om det
- **Partner:** Aldri skriv «partner/avtale/samarbeider» uten skriftlig bekreftelse
- **NDA:** Aldri foreslå å sende tekniske BladeShip-dokumenter uten bekreftet signert NDA fra mottaker
- **Gavebrev:** Lone (Scrive ID 09222115557579576827) + Alexandra (09222115557579576821) — signert 30.mai.2026

---

## EXIT-RUTINE

1. Oppdater `HUSKELISTE.md` med endringer fra sesjonen
2. Skriv datostemplet logg til `logs/YYYY-MM-DD.md`
3. Oppdater `SESJON_LOGG.md` med peker til ny logg
4. `git add -A && git commit -m "Sesjon YYYY-MM-DD" && git push`
5. Bekreft push-URL til Leif

---

*Sist oppdatert: 3. juni 2026 v2 | Versjon: live-github*
