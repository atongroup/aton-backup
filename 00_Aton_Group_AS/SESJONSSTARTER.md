# SESJONSSTARTER v2.6.1
*Les alltid denne FØRST når ZIP lastes opp*

---

## ⚡ STEG 0 — Orienter deg (30 sekunder)

1. Les `FASIT.md` → alle korrekte tall og statuser
2. Les `HUSKELISTE.md` → hva haster
3. Les `SLAGPLAN.md` → operasjonsoversikt
4. Vis `SLAGPLAN.md` som interaktiv widget → **ALLER FØRSTE HANDLING**

---

## 🤖 STEG 1 — Tilgjengelige verktøy (bruk proaktivt, uten å spørre)

| Verktøy | Hva | Bruk til |
|---------|-----|----------|
| **Gmail MCP** | Søk/merk e-poster | Sjekk om svar mottatt, logg korrespondanse |
| **Google Calendar MCP** | Opprett/oppdater hendelser | Legg inn ALLE frister automatisk |
| **Google Drive MCP** | Opprett/søk filer | Backup, dokumentlagring |
| **Canva MCP** | Generer/rediger design | Presentasjoner, visittkort, nettsidegrafikk |
| **Chrome MCP** | Nettleserautomatisering | Apps Script, LinkedIn, one.com, platform.claude.com |
| **Brreg API** | Firma/org.nr-søk | Verifiser grunneiere, utbyggere, partnere |
| **Geonorge Eiendom** | gnr/bnr fra koordinat | Grunnfelt prospektering |
| **Geonorge Adresse** | Adressesøk | Stedfesting av eiendommer |
| **Kartverket WMS** | Norsk topokart (Leaflet) | Kart i pipeline.html |
| **SSB API** | Statistikk bolig/befolkning | Markedsdata Grunnfelt |
| **Claude Proxy Aton** | AI i hub.html | Leif/Lone/Alexandra |
| **Claude Proxy Grunnfelt** | AI i pipeline.html | Kim Skjæveland |

**Kalenderregel:** Legg automatisk inn ALT med frist i Google Calendar uten å bli bedt om det.
Fargekoder: 11=kritisk/frist · 6=viktig/uke · 9=Aton/business · 10=privat

---

## 📋 STEG 2 — Bekreft til Leif

```
✅ Aktiv versjon: v2.6.1
📋 Åpne oppgaver: [antall] (se HUSKELISTE)
📅 Nærmeste frist: [dato + hva]
📧 Siste e-post sjekket: [Gmail-søk utført]
⚠️  Påminnelser: [viktige ting fra HUSKELISTE]
```

---

## 📏 STEG 3 — Regler som alltid gjelder

**Dokumenter:**
- PDF = eksternt · DOCX = internt/redigerbart · PPTX = presentasjoner
- Konverter alltid til PDF før ekstern utsendelse
- Bump versjon ved hver levering

**Fakta og status:**
- Sjekk FASIT før du skriver tall, datoer eller statuser
- Partnerstatus: kun «Kontaktet» / «Dialog pågår» / «Bekreftet (skriftlig)»
- Aldri skriv «partner», «samarbeider» eller «avtale» uten skriftlig bekreftelse
- Oppdater FASIT umiddelbart ved endringer

**Nettsider:**
- Verifiser mot FASIT før publisering
- Nye porteføljeselskaper hostes under `atongroup.no/[navn]/` til eget domene er klart
- Koblingsregler: se FASIT → Nettsider koblingsregler

**Klienter:**
- Rekkefølge: NDA → VB-avtale → del materiale
- IP-klausul § 4 VB-avtalen: alt Aton produserer er Atons til avtale er signert
- Konvensjonalbot: NOK 50 000 per brudd

**SPERRET kontakt:**
- Anders Valland (SINTEF Ocean) — aldri kontakt igjen

---

## 📧 STEG 4 — E-postregler

| Tier | Mottakere | Regel |
|------|-----------|-------|
| **Tier 1** | Investorer, nøkkelpartnere, forskere | Leif leser og godkjenner manuelt |
| **Tier 2** | Leverandører, verft, org. | Leif godkjenner mal. Kan batch-sendes. |
| **Tier 3** | Webskjema, generisk kontakt | Send direkte etter «send»-bekreftelse |

- Sjekk EmailLogg FØR du skriver — gjenta aldri sendt informasjon
- Vent minimum 5 virkedager mellom e-poster til samme person
- Avsender: BladeShip → leif@bladeship.no · Aton → leif@atongroup.no

**Passord:** Alle i Bitwarden (leifsunde@gmail.com). Aldri i klartekst.

---

## 🧹 STEG 5 — Sesjonskvalitet (kjør ved levering)

- [ ] Oppdater HUSKELISTE — flytt fullførte til historikk
- [ ] Oppdater SLAGPLAN — juster frister og statuser
- [ ] Bump versjon i alle fire filer
- [ ] Sjekk for duplikatfiler og tomme mapper
- [ ] Lag ny ZIP og tilby backup (lokal/Drive/begge)

---
*v2.6.1 · 3. juni 2026 (GitHub backup aktiv)*

## 🚀 SESJONKOMMANDOER

| Kommando | Handling | Desktop | Mobil |
|----------|----------|---------|-------|
| **`hent Aton`** | Hent ZIP fra GitHub → pakk ut → vis SLAGPLAN | ✅ Automatisk | ✅ Automatisk |
| **`Exit`** | Pakk ZIP → push til GitHub → bekreft URL | ✅ Automatisk | ✅ Automatisk |

**GitHub backup-repo:** github.com/atongroup/aton-backup (privat)
**Token:** Lagret i minneregler #27

## ⚡ SMART SESJONSTART

Når Leif starter en ny samtale UTEN å si «hent Aton» — still dette spørsmålet:

> «Hei Leif! Vil du at jeg henter siste Aton-backup fra GitHub og viser SLAGPLAN? (tar ~30 sek)
> Eller vil du bare prate / jobbe uten å laste inn ZIP?»

- Hvis **ja / hent** → kjør «hent Aton»-flyten
- Hvis **nei / bare prate** → svar normalt uten å laste inn noe

**Unntak — IKKE still spørsmålet hvis:**
- Leif sier «hent Aton» (allerede gjort)
- Leif laster opp en ZIP manuelt
- Leif spør om noe helt uavhengig av Aton (vær, nyheter, generelt)
