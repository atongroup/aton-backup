# Facebook/Instagram Annonsepakke v2.0
*Aton Group AS · Klar til lansering 20. juni 2026*

---

## Oversikt

| Fil | Variant | Format | Kampanje |
|-----|---------|--------|----------|
| A1_Du_har_baart_ideen.png | A1 — «3 år» | 1080×1080px | A — Merkevare |
| A2_Hva_om_noen_tok_risikoen.png | A2 — «Aldri tatt steget» | 1080×1080px | A — Merkevare |
| A3_Vi_bygger_selskapet.png | A3 — «Vi bygger det» | 1080×1080px | A — Merkevare |
| B1_Karusell_kort1.png | B1 kort 1 — «Idé ✓» | 1080×1080px | B — Gründerrekruttering |
| B1_Karusell_kort2.png | B1 kort 2 — «Vi bygger» | 1080×1080px | B — Gründerrekruttering |
| B1_Karusell_kort3.png | B1 kort 3 — «3 måneder» | 1080×1080px | B — Gründerrekruttering |
| B2_Launchpad.png | B2 — Launchpad | 1080×1080px | B — Launchpad |
| aton_logo_300_1.png | Logo | 300×300px | Alle |
| aton_banner_1128x191.png | Banner | 1128×191px | Sideomslag |
| thumb_aton.png | Thumbnail | — | Profil |

Tekster: se **Annonsetekster_v1.md**
Målgruppe: se **Maalgruppe_Innstillinger.md**

---

## Sjekkliste — gjør i denne rekkefølgen

### Steg 1 — Før du åpner Meta Ads Manager
- [ ] Org.nr. mottatt (forventet ~20. juni)
- [ ] Installer **Meta Pixel** på atongroup.no, marketplace.html og venture_portal.html
  - Gå til business.facebook.com → Events Manager → Legg til datakilde → Web
  - Lim inn Pixel-koden i `<head>` på alle tre sider
  - Sett opp konverteringshendelse: «Lead» når søknadsskjema sendes
- [ ] Verifiser at atongroup.no/apply (venture_portal.html) er live og tar imot skjema
- [ ] Opprett eller bekreft at Aton Group AS har en Facebook-bedriftsside

### Steg 2 — Opprett kampanjer i Meta Ads Manager

**Kampanje A — Merkevare**
1. Mål: **Rekkevidde** (eller Trafikk)
2. Budsjett: NOK 400/mnd (NOK 13/dag)
3. Målgruppe: se Maalgruppe_Innstillinger.md → Kampanje A
4. Plassering: Automatic placements
5. Last opp A1 og A2 som to separate annonser i samme annonsesett
6. Legg inn tekst fra Annonsetekster_v1.md — variant A1 og A2
7. CTA-knapp: **Les mer**
8. Destinasjon: https://www.atongroup.no

**Kampanje B — Gründerrekruttering**
1. Mål: **Trafikk** (eller Leads)
2. Budsjett: NOK 500/mnd (NOK 17/dag)
3. Målgruppe: se Maalgruppe_Innstillinger.md → Kampanje B
4. Plassering: Facebook Feed + Instagram Feed
5. Last opp B1 karusell (3 kort i rekkefølge: kort1 → kort2 → kort3)
6. Legg inn tekst fra Annonsetekster_v1.md — variant B1
7. CTA-knapp: **Søk nå**
8. Destinasjon: https://www.atongroup.no/venture_portal.html

**Kampanje B2 — Launchpad**
1. Mål: **Trafikk**
2. Budsjett: NOK 250/mnd (NOK 8/dag)
3. Samme målgruppe som Kampanje B
4. Last opp B2_Launchpad.png
5. Legg inn tekst fra Annonsetekster_v1.md — variant B2
6. CTA-knapp: **Se mer**
7. Destinasjon: https://www.atongroup.no/marketplace.html

### Steg 3 — UTM-tagging (lim inn i destinasjons-URL)

| Kampanje | URL med UTM |
|----------|------------|
| A1 | https://www.atongroup.no?utm_source=facebook&utm_medium=paid&utm_campaign=merkevare&utm_content=A1 |
| A2 | https://www.atongroup.no?utm_source=facebook&utm_medium=paid&utm_campaign=merkevare&utm_content=A2 |
| A3 | https://www.atongroup.no?utm_source=facebook&utm_medium=paid&utm_campaign=merkevare&utm_content=A3 |
| B1 | https://www.atongroup.no/venture_portal.html?utm_source=facebook&utm_medium=paid&utm_campaign=grunder&utm_content=B1 |
| B2 | https://www.atongroup.no/marketplace.html?utm_source=facebook&utm_medium=paid&utm_campaign=launchpad&utm_content=B2 |

### Steg 4 — A/B-test uke 1–2
- Kjør A1 og A2 parallelt med NOK 200 hver
- Etter 7 dager: hvilken har lavest CPC (kostnad per klikk)?
- Vinneren får hele NOK 400 fra uke 3

---

## Nøkkeltall å følge

| KPI | Mål |
|-----|-----|
| CPM (kostnad per 1 000 visninger) | Under NOK 80 |
| CTR (klikkrate) | Over 1% |
| CPC (kostnad per klikk) | Under NOK 8 |
| Søknader via portal | 1–3 per måned |

Evaluer etter 14 dager — juster budsjett til vinnende annonse.

---

## Designprofil — annonsekortene

| Element | Verdi |
|---------|-------|
| Bakgrunn | #0a0c08 (nesten sort, varm undertone) |
| Gull aksent | #c8a030 |
| Tekst primær | #f0ead8 |
| Tekst sekundær | #8a7a5a |
| Font overskrift | Playfair Display 900 |
| Font brødtekst | Crimson Pro 300 |
| Sol-symbol | Konentriske sirkler — Aton merkevare |

---

*Sist oppdatert: 2. juni 2026 · v2.0*
*Neste versjon: etter første 14-dagers test — oppdater med vinnende variant*
