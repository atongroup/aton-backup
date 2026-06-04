# HeyMom — Design

## Stil
Mørk premium med gull-aksenter. Minimalistisk og rolig.

## Farger

| Token | Hex | Bruk |
|-------|-----|------|
| `BG` | `#0A0A0F` | Bakgrunn |
| `SURFACE` | `#12121A` | Kort, inputfelt |
| `BORDER` | `#1E1E2E` | Kantlinjer |
| `TEXT` | `#E8E0D0` | Primær tekst |
| `TEXT_DIM` | `#6A6A8A` | Sekundær tekst, plassholdere |
| `GOLD` | `#C8A96E` | Primær aksent — knapper, aktiv tab, avatar |
| `GOLD_DIM` | `#8A7040` | Dempet gull — ufullførte avkrysningsbokser |

## Logo
- Bokstav «A» (Aton-referanse) i gull på mørk bakgrunn
- Brukes i: innloggingsskjerm (stor), header (liten), tab-avatar

## Typografi
- Systemfonter (Expo default)
- Titler: `fontWeight: '700'`, `letterSpacing: 0.5–2`
- Brødtekst: `fontSize: 15`, `lineHeight: 22`
- Etiketter: `fontSize: 10–12`, `letterSpacing: 0.5–1`, uppercase

## Komponenter
- Meldingsbobler: bruker = gull bakgrunn, assistent = SURFACE med kantlinje
- Knapper: `borderRadius: 14–22`, høyde `42–48px`
- Kort: `borderRadius: 14–20`, `padding: 16–24`, SURFACE bakgrunn
- Tab-bar: SURFACE bakgrunn, gull for aktiv tab + prikk-indikator
