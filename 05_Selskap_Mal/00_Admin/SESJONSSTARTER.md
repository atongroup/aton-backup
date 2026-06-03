> ⚠️ **KONFIDENSIELT — Aton AdVentures AS — Ikke distribuer eksternt**

---

# SESJONSSTARTER — Kjør dette ALLTID først

Når ZIP-filen lastes opp: **les disse filene og vis dashbordet FØR du gjør noe annet.**

---

## Steg 1 — Les filene (i denne rekkefølgen)

1. `FASIT.md` → alle korrekte tall og statuser
2. `HUSKELISTE.md` → hva er åpent, hva haster
3. `08_Kommunikasjon/Epost_Utgaaende/EmailLogg.md` → siste kommunikasjon
4. `SLAGPLAN.md` → komplett operasjonsoversikt og oppdaterte data
5. Ved ny gründerforespørsel: les `ONBOARDING.md`, `SØKEKRITERIER.md` og `QC_SJEKKLISTE.md`

## Steg 2 — Vis SLAGPLAN som interaktiv widget (ALLTID — første handling)

Bygg og vis dashbordet basert på SLAGPLAN.md og FASIT.md som en interaktiv widget med:
- KPI-kort (fase, aksjekapital, åpne oppgaver, tilskudd søkt)
- Selskaps- og konseptinfo fra FASIT
- Oppgavefaner: Kritisk / Viktig / Backlog fra HUSKELISTE
- Fremdriftslinjer per milepæl
- Kalender med nærmeste frister
- Nøkkelkontakter med status fra EmailLogg/FASIT

**Malen for widgeten ligger i `00_Admin/Dashboard/SLAGPLAN_WIDGET.html`**
Hent DATA-seksjonen derfra og oppdater med gjeldende verdier fra FASIT og HUSKELISTE.

## Steg 3 — Bekreft med statuslinje

Etter widget-visning, skriv én linje:

```
✅ v[X.X.X] · [Antall] kritiske oppgaver · Nærmeste frist: [dato + hva] · Siste e-post: [til hvem, dato]
```

---

## Regler som alltid gjelder (se REGLER.md for full liste)

- **Bump versjon** ved hver levering (1.0.5 → 1.0.6)
- **Sjekk FASIT** før du skriver tall, datoer eller statuser — aldri fra hukommelsen
- **Oppdater HUSKELISTE** på slutten av sesjonen
- **Aldri send e-post** uten eksplisitt «send nå» — skriv utkast, presenter, vent
- **EmailLogg** oppdateres etter all utgående kommunikasjon
- **QC_SJEKKLISTE.md** kjøres før nettside, søknad eller partnerbrev leveres
- **Filformat:** PDF for eksterne dokumenter · DOCX for interne/redigerbare
- **NDA-regel:** Idé-NDA signeres ALLTID som steg 1 — se ONBOARDING.md
- **VB-avtale-regel:** VB-avtale signeres ALLTID som steg 2 — aldri del Aton-arbeider før dette
- **Hosting:** Bygg alltid nettside under `atongroup.no/[navn]/` frem til eget domene er klart

## Mapperydding (kjør ved hver levering)

- [ ] Duplikatfiler? → behold én
- [ ] Gamle versjoner? → slett
- [ ] Filer på feil sted? → flytt
- [ ] Tomme mapper? → fjern

---

*Mal versjon: v1.0.5 · Aton AdVentures AS*
