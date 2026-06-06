# Gmail-integrasjon — Aton App
*Dato: 6. juni 2026*

## Oversikt
SJEKK MAIL-knappen kobles til Gmail via Apps Script proxy.
Ingen OAuth i appen — proxyen kjører som deg (Leif) og leser din Gmail.

---

## STEG 1 — Deploy Apps Script proxy (5 min)

1. Gå til: https://script.google.com
2. Klikk "Nytt prosjekt"
3. Gi prosjektet navn: **Aton Gmail Proxy**
4. Lim inn innholdet fra `gmail_proxy.gs`
5. Klikk **Kjør → test()** for å bekrefte Gmail-tilgang (godkjenn tillatelser)
6. Klikk **Deploy → Ny distribusjon**
   - Type: **Nettapp**
   - Kjør som: **Meg (leifsunde@gmail.com)**
   - Tilgang: **Alle**
7. Kopier URL-en du får — ser slik ut:
   `https://script.google.com/macros/s/AKfycb.../exec`
8. Lim inn URL-en i `gmail_proxy.gs` øverst i `gmail_service.ts`:
   `const GMAIL_PROXY_URL = 'DIN_URL_HER';`

---

## STEG 2 — Legg til service i appen (2 min)

1. Kopier `gmail_service.ts` til `atonapp/services/gmailService.ts`
2. Åpne `App.tsx` (eller der SJEKK MAIL-knappen er definert)
3. Legg til import øverst:
   ```typescript
   import { fetchUnreadEmails, formatEmailsForClaude } from './services/gmailService';
   ```
4. Finn handleQuickAction eller der 'SJEKK MAIL' håndteres
5. Erstatt/legg til logikken fra `gmail_chat_handler.ts`

---

## STEG 3 — Bygg og test (5 min)

```powershell
# I PowerShell, atonapp-mappen
npx expo start
# Scan QR-kode med Expo Go på telefonen
# Trykk SJEKK MAIL — skal nå vise uleste e-poster
```

---

## Sikkerhet
- Secret `AtonMail2026!` sendes med hver forespørsel
- Proxyen kjører som leifsunde@gmail.com — leser KUN din Gmail
- Ingen tokens lagres i appen
- Oppgrader til OAuth når appen skal ha flere brukere

---

## Feilsøking
- **"Ugyldig secret"** → sjekk at secret stemmer i begge filer
- **Ingen e-poster** → kjør test() i Apps Script og sjekk Logger
- **CORS-feil** → proxyen må ha "Tilgang: Alle" i deploy-innstillinger
