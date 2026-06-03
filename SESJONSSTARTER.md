# ATON SYSTEM — SESJONSSTARTER

> **GitHub-basert system. Ingen ZIP nødvendig.**
> Repo: github.com/atongroup/aton-backup (privat)

---

## OPPSTARTSRUTINE (følges alltid ved «hent Aton»)

1. `git clone --depth=1` repo til `/tmp/aton`
2. Les `SESJONSSTARTER.md` + `00_Aton_Group_AS/FASIT.md` + `00_Aton_Group_AS/HUSKELISTE.md`
3. Vis kortfattet tekstoppsummering: kritiske frister, åpne oppgaver, siste e-poster
4. **SPØR** om Leif vil se SLAGPLAN som interaktiv widget — aldri vis automatisk
5. Sjekk Gmail (siste 3 dager) og nevn viktige meldinger

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

## OPERATIVE REGLER (sammendrag)

- **E-post:** Sjekk alltid tidligere tråd før utkast. Vis utkast, vent på «send»
- **Dokumenter:** Advokatsjekk før ferdigstilling — parter, datoer, beløp, forpliktelser
- **Filer:** GitHub = master. Nettside = ZIP → Leif laster opp selv
- **Partner:** Aldri skriv «partner/avtale/samarbeider» uten skriftlig bekreftelse
- **Gavebrev:** Lone (Scrive ID 09222115557579576827) + Alexandra (09222115557579576821) — signert 30.mai.2026

---

## EXIT-RUTINE

1. Oppdater `HUSKELISTE.md` med endringer fra sesjonen
2. Skriv datostemplet logg til `logs/YYYY-MM-DD.md`
3. Oppdater `SESJON_LOGG.md` med peker til ny logg
4. `git add -A && git commit -m "Sesjon YYYY-MM-DD" && git push`
5. Bekreft push-URL til Leif

---

*Sist oppdatert: 4. juni 2026 | Versjon: live-github*
