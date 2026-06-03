# verdier.js — Sentralt verdidatasett

## Slik oppdaterer du verdiene

1. Åpne `verdier.js` i en teksteditor
2. Finn selskapet du vil oppdatere under `selskaper: [...]`
3. Endre `veid_snitt`, `berkus`, `scorecard` etc.
4. Oppdater `sist_oppdatert` til dagens dato
5. Last opp ny `verdier.js` til one.com
6. Alle sider (hub, portefølje, index) viser automatisk nye verdier

## Slik brukes data-attributter i HTML

```html
<!-- Viser BladeShip veid_snitt automatisk -->
<span data-vv="selskaper.1.veid_snitt">NOK 52M</span>

<!-- Total portefølje -->
<span id="vv-total">NOK 146M</span>

<!-- Sist oppdatert -->
<span id="vv-dato">2026-06-02</span>
```

## Versjonering

Når ny verdivurdering er klar:
1. Oppdater verdier.js (versjonsnummer + dato)
2. Legg ny PDF i riktig Verdivurdering/-mappe
3. Last opp begge til one.com

Sist oppdatert: 2026-06-02 | Aton Group ZIP v2.6.0
