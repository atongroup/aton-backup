# Google Play — Lansering av Hey Mom

## Mappestruktur

```
GooglePlay/
├── README.md               ← denne filen
├── tekst/
│   ├── BUTIKKOPPFOERING.md ← alle tekster (tittel, beskrivelse, nøkkelord)
│   └── METADATA.md         ← kategori, rating, kontaktinfo, personvern
└── grafikk/
    ├── ikon/               ← app-ikon 512×512px PNG
    ├── feature_graphic/    ← banner 1024×500px
    └── skjermbilder/       ← min. 2, anbefalt 5–8 stk (1080×1920px)
```

---

## Obligatoriske elementer

| Element | Spec | Status |
|---|---|---|
| App-ikon | 512×512px, PNG 32-bit m/alpha, maks 1024 kB | ⬜ Mangler |
| Feature Graphic | 1024×500px, JPEG eller PNG uten alpha | ⬜ Mangler |
| Skjermbilder | Min. 2 stk, 1080×1920px (9:16), JPEG/PNG | ⬜ Mangler |
| Kort beskrivelse | Maks 80 tegn | ✅ Utkast klart |
| Lang beskrivelse | Maks 4000 tegn | ✅ Utkast klart |
| APK / AAB | Signert Android App Bundle | ⬜ EAS bygger |

---

## Anbefalte elementer

| Element | Spec | Status |
|---|---|---|
| 5–8 skjermbilder med overlay-tekst | 1080×1920px | ⬜ Lages i Canva |
| Forhåndsvisningsvideo | YouTube-lenke, 30–120 sek | ⬜ Planlegges |
| Nøkkelord / ASO | Relevante søkeord | ⬜ Planlegges |

---

## Neste steg

1. [ ] Eksporter app-ikon 512×512px fra Canva → legg i `grafikk/ikon/`
2. [ ] Lag Feature Graphic i Canva → legg i `grafikk/feature_graphic/`
3. [ ] Ta 5–6 skjermbilder av appen med overlay-tekst → `grafikk/skjermbilder/`
4. [ ] Gjennomgå og godkjenn tekst i `tekst/BUTIKKOPPFOERING.md`
5. [ ] Fikse EAS build → få AAB-fil
6. [ ] Publiser i Google Play Console

---

*Sist oppdatert: 5. juni 2026*
