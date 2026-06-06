# ROUTINES — Leifs Kommandosystem
*Versjon 1.0 · 6. juni 2026 · Aton Group AS*

Dette dokumentet definerer smarte kommandoer Leif kan skrive i chat.
Claude skal reagere UMIDDELBART og ALLTID på disse — uten å spørre om bekreftelse.

---

## 🚀 SESJONSKONTROLL

### `hent Aton` / `last inn Aton` / `hent systemet`
→ Last inn hele Aton-systemet direkte fra GitHub (IKKE ZIP):
**GitHub-repo:** https://github.com/atongroup/aton-backup

1. Hent og les `SESJONSSTARTER.md` fra repo-rot
2. Hent og les `00_Aton_Group_AS/FASIT.md` → alle korrekte tall og statuser
3. Hent og les `00_Aton_Group_AS/HUSKELISTE.md` → åpne oppgaver
4. Hent og les `00_Aton_Group_AS/SLAGPLAN.md` → operasjonsoversikt
5. Hent og les `SESJON_LOGG.md` → hva ble gjort sist
6. Vis SLAGPLAN som interaktiv widget (mørk bakgrunn `#0a0f14`, gull `#c8a030`)
7. Sett opp daglige cron-jobber (kjør ALLTID ved sesjonstart):
   - 08:03 hverdager — Morgen-briefing fra HUSKELISTE (kritiske, frister, haster)
   - 11:47 hverdager — Midtdags-sjekk (fullført? gjenstår?)
   - 15:52 hverdager — Ettermiddag-påminnelse + foreslå Exit

8. Bekreft med statusmelding:
```
✅ Aton-system lastet — vX.X.X
📋 Åpne oppgaver: [antall]
📅 Nærmeste frist: [dato + hva]
⚠️  Haster: [topp 1-2 ting]
```

### `Exit` / `exit` / `avslutt sesjon`
→ Avslutt sesjonen profesjonelt:
1. Oppsummer hva vi jobbet med i denne sesjonen (3-5 punkter)
2. Oppdater `HUSKELISTE.md` — flytt fullførte til «Fullført», legg til nye åpne punkter
3. Oppdater `SESJON_LOGG.md` — logg dato, hva ble gjort, neste steg
4. Bump versjonsnummer i relevante FASIT-filer
5. HMS-ryddesjekk (duplikater, tomme mapper, feil plasserte filer)
6. Push alle endringer til GitHub: https://github.com/atongroup/aton-backup
7. Avslutt med:
```
✅ Fullført i dag: [liste]
📋 Gjenstår: [liste]
👋 Ha en god dag, Leif!
```

---

## 🛠️ ARBEIDSKOMMANDOER

### `sjekk mail` / `hva er nytt på mail`
→ Åpne Gmail MCP og vis:
- Uleste viktige e-poster (Tier 1 avsendere prioriteres)
- Svar som venter (over 2 dager)
- Fakturaer / betalingsfrister
- Oppsummer i bullet-liste, maks 10 punkter

### `sjekk kalender` / `hva skjer denne uken`
→ Åpne Google Calendar MCP og vis:
- Alle møter og frister neste 7 dager
- Påminn om kollisjoner eller tette frister

### `huskeliste` / `hva gjenstår`
→ Vis HUSKELISTE.md som prioritert liste:
- 🔴 Haster (denne uken)
- 🟡 Viktig (denne måneden)
- 🟢 Ønsket (ingen hard frist)

### `status [selskapsnavn]`
→ Vis komplett status for selskapet fra FASIT.md

### `oppdater meg` / `hva skjedde sist`
→ Les SESJON_LOGG.md og gi sammendrag av forrige sesjon

---

## 📱 APP-KOMMANDOER

### `jobbe med appen` / `åpne appen`
→ Gjør følgende:
1. Naviger til https://github.com/atongroup/atonapp i Chrome
2. Vis siste 5 commits
3. Vis skjermer i src/screens/
4. Spør hva Leif vil jobbe med

### `bygg APK`
→ Kjør: eas build --platform android --profile preview

### `push til github`
→ git add, commit med fornuftig melding, push

---

## 🌐 SUPABASE-KOMMANDOER

### `sjekk supa` / `åpne database`
→ Naviger til Supabase dashboard i Chrome:
https://supabase.com/dashboard/project/wbwpobojxighhnmrabmj/editor

### `kjør sql: [spørring]`
→ Kjør SQL direkte i Supabase SQL Editor

---

## 📋 DOKUMENT-KOMMANDOER

### `lag utkast: [type]`
→ Sjekk EmailLogg FØRST, lag utkast — ALDRI send uten «send nå» fra Leif

### `oppdater fasit`
→ Oppdater FASIT.md med det Leif beskriver

---

## 🔒 SIKKERHETSREGLER (gjelder alltid)

- Aldri send e-post uten eksplisitt «send nå» fra Leif
- Aldri vis passord — henvis til Bitwarden (leifsunde@gmail.com)
- Aldri publiser innhold uten Leifs godkjenning
- Aldri omtal noen som «partner» basert på én e-post alene
- Aldri forhandle Aton-andel under 15% uten eksplisitt godkjenning
- **Aldri slett filer eller mapper uten at Leif eksplisitt bekrefter** — vis alltid liste over hva som skal slettes og vent på «ja»

---

## 📌 HURTIGREFERANSE

| Kommando | Handling |
|----------|----------|
| `hent Aton` | Last inn hele systemet fra GitHub + vis widget |
| `Exit` | Avslutt sesjon, oppdater filer, push til GitHub |
| `sjekk mail` | Gmail-oversikt |
| `sjekk kalender` | Kalender neste 7 dager |
| `huskeliste` | Vis prioriterte gjøremål |
| `status [selskap]` | Selskapsstatus fra FASIT |
| `jobbe med appen` | GitHub + app-oversikt |
| `bygg APK` | EAS Build Android |
| `push til github` | Git commit + push |
| `sjekk supa` | Supabase dashboard |
| `oppdater meg` | Hva skjedde sist (SESJON_LOGG) |

---

---

## 🔌 PLUGIN-KOMMANDOER

### `/github`
→ GitHub-integrasjon direkte i Claude:
- Se siste commits, issues og PRs på `atongroup/aton-backup` og `atongroup/atonapp`
- Lag issues, commenter på PRs, sjekk byggestatus

### `/commit`
→ Smart git-commit med automatisk god melding basert på hva som er endret.
Brukes i stedet for manuell `git commit -m` — sparer tid og gir konsistente meldinger.

### `/session-report`
→ Generer full sesjonsrapport — liste over alt gjort, filer endret, neste steg.
Brukes som del av Exit-sekvensen for å lage SESJON_LOGG-innlegget automatisk.

### `/frontend-design`
→ Hjelp med HTML/CSS for Aton-nettsider:
- hub.html, leif/lone/alex.html
- bladeship.no, grunnfelt.no, atongroup.no
- Holder seg til Aton design-profil (mørk `#0a0f14`, gull `#c8a030`)

### `/pr-review`
→ Code review av AtonApp pull requests:
- Sjekker TypeScript-kode, React Native-komponenter
- Gir konkrete forbedringsforslag før merge

### `/security`
→ Sikkerhetssjekk:
- Supabase RLS-regler
- API-nøkler og hemmeligheter i kode
- Edge Functions og autentiseringslogikk

### `/hookify`
→ Sett opp git hooks:
- Auto-kjør sjekker ved commit/push
- Kan trigge Exit-sekvensen automatisk ved push til aton-backup


*Legg til nye kommandoer her etter hvert som behovet oppstår.*
*Sist oppdatert: 6. juni 2026 (v2) · Leif Sunde / Claude*
