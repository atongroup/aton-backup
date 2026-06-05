# ATON SYSTEM — SESJONSSTARTER v3.0

> **GitHub + Supabase-basert system.**
> Repo: github.com/atongroup/aton-backup (privat)
> Token hentes automatisk fra Supabase aton_tools

---

## OPPSTARTSRUTINE (følges alltid ved «hent Aton»)

1. **Hent dato/tid/sted** via weather_fetch (Stavanger) — vises i widget-header
2. **Hent token** fra Supabase aton_tools WHERE name='GitHub aton-backup'
3. **Parallelt:**
   - `git clone --depth=1` repo til `/tmp/aton`
   - Hent `aton_tools` + `claude_memory` fra Supabase (service key)
4. **Les** `/tmp/aton/SESJONSSTARTER.md` + `FASIT.md` + `HUSKELISTE.md`
5. **Generer sesjonstart-widget** (visualize:show_widget):
   - Header: dato / klokkeslett / sted / vær
   - Stats: verktøy, direkte/manuell, minner
   - Verktøyliste med filter MCP / API / Tjeneste
   - Aktive regler fra claude_memory
   - Snarveisknapper
6. **Spør** om Leif vil se SLAGPLAN som interaktiv widget

---

## HURTIGKOMMANDOER

| Kommando | Handling |
|----------|----------|
| `hent Aton` | Følg oppstartsrutinen over |
| `hent BladeShip` | Les `01_BladeShip_AS/00_Admin/` fra /tmp/aton |
| `hent Velumen` | Les `02_Portefolje/Velumen_AS/00_Dashboard/` fra /tmp/aton |
| `hent admin` | Generer live admin-panel widget mot Supabase |
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
| Supabase — lese | ✅ Direkte via Chrome (publishable key) |
| Supabase — skrive | ✅ Via SQL-editor i Chrome |
| SLAGPLAN-widget | ⛔ Spør alltid før visning |
| Canva / API-kall | ✅ Direkte |

---

## SIKKERHET

- GitHub-token ligger IKKE i Claude-minnet — hentes fra Supabase aton_tools
- claude_memory og aton_tools har RLS aktivert (kun service_role)
- Publishable key er trygg å bruke i nettleser for andre tabeller
- Apps Script secrets: kun tilgjengelig via service key

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

## REPO-STRUKTUR

```
aton-backup/
├── .github/workflows/
│   ├── supabase-backup.yml   # Nattlig Supabase-backup kl. 02:00
│   └── sesjon-push.yml       # Exit-workflow
├── 00_Aton_Group_AS/         # Aton Group — hub, nettside, FASIT
├── 01_BladeShip_AS/          # BladeShip — patenter, teknisk, tilskudd
├── 02_Portefolje/            # Velumen AS og andre porteføljeselskaper
├── 03_Launchpad/             # Grunnfelt og nye konsepter
├── 04_Familie_Dynasti/       # Familie, gavebrev, arv
├── 05_Selskap_Mal/           # Maler for nye selskaper
├── 06_Arkiv/                 # Avsluttede/utgåtte dokumenter
├── 08_Aton_Teknologi_AS/     # Aton App (tidl. HeyMom)
├── backups/supabase/         # Nattlige Supabase-backups (30 dager)
├── logs/                     # Sesjonslogger per dato
├── meetings/                 # Møtepakker (DNV, investorer, etc.)
├── SESJONSSTARTER.md         # Denne filen
├── SESJON_LOGG.md            # Peker på siste logg
└── README.md
```
