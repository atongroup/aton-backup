# Aton App — Sekretær-arkitektur for dokumenthåndtering
*Versjon 1.0 — 5. juni 2026*

---

## Visjon

Aton-appen skal fungere som en personlig sekretær som husker alle dokumentene dine.
Du laster opp eller fotograferer et dokument, sier «arkiver privat», og Claude
gjør resten: tolker innholdet, laster det opp til din private mappe og registrerer
metadata slik at du kan finne det igjen med et enkelt spørsmål.

---

## Brukerflyt

### Arkivering
1. Bruker sier «arkiver privat» og laster opp fil (PDF, bilde, kamerafoto)
2. Claude leser dokumentet (OCR ved behov via vision-API)
3. Claude trekker ut metadata automatisk: tittel, type, person, dato, selskap
4. Filen lastes opp til `users/{user_id}/{kategori}/` i Supabase Storage
5. Metadata registreres i `leif_arkiv`-tabellen med lenke til filen
6. Bekreftelse til bruker: «Lagret — Leiekontrakt Elena Bentzen, 1. april 2023»

### Henting
1. Bruker spør: «finn leiekontraktene mine» eller «har jeg noe fra Elena?»
2. Claude søker i `leif_arkiv` på kategori, person, dato, selskap
3. Claude henter signerte nedlastingslenker fra Supabase Storage
4. Bruker får liste med klikkbare lenker direkte i appen

---

## Arkitektur — tre lag

```
┌─────────────────────────────────────────┐
│           Bruker (mobil / web)          │
│  Last opp fil │ Si/skriv │ Spør etter  │
└──────────────────────┬──────────────────┘
                       │
┌──────────────────────▼──────────────────┐
│         Claude — sekretær               │
│  Tolker dokument  →  Laster opp fil     │
│  Registrerer metadata  →  Søker/henter  │
└──────────────────────┬──────────────────┘
                       │
┌──────────────────────▼──────────────────┐
│           Backend — Supabase            │
│                                         │
│  Storage: users/{user_id}/              │
│    leiekontrakter/                      │
│    patenter/                            │
│    okonomi/                             │
│    annet/                               │
│                                         │
│  Tabell: leif_arkiv                     │
│    id, tittel, kategori, status         │
│    person, selskap, dato, utlop         │
│    storage_path, url, notat, kilde      │
│                                         │
│  RLS: hver bruker ser kun egne filer    │
└─────────────────────────────────────────┘
```

---

## Database — leif_arkiv (eksisterer)

```sql
CREATE TABLE leif_arkiv (
  id           uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  tittel       text NOT NULL,
  kategori     text NOT NULL DEFAULT 'Annet',
  status       text NOT NULL DEFAULT 'Aktiv',
  person       text,
  selskap      text DEFAULT 'Personlig',
  dato         date,
  utlop        date,
  url          text,
  notat        text,
  kilde        text DEFAULT 'Manuell',
  github_path  text,
  drive_url    text,
  storage_path text,        -- legges til i steg 2
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);
```

**Supabase:** `wbwpobojxighhnmrabmj.supabase.co`
**Publishable key:** lagret i aton_tools-tabellen

---

## Storage — struktur

```
user-documents/           ← bucket (private)
  {user_id}/
    leiekontrakter/
    patenter/
    gavebrev/
    nda/
    okonomi/
    annet/
```

RLS-policy: `storage.foldername()[1] = auth.uid()::text`
→ Hver bruker kan kun lese/skrive egen mappe.

---

## Claude-prompt — automatisk metadata-tolkning

```
Du er en sekretær. Brukeren laster opp et dokument.
Trekk ut følgende som JSON:
{
  "tittel": "kort beskrivende tittel",
  "kategori": "Leiekontrakt|Patent|Gavebrev|NDA|Tilskudd|Økonomi|Annet",
  "status": "Aktiv|Arkivert|Venter|Utløpt",
  "person": "navn på motpart / avsender",
  "selskap": "hvilket selskap dette gjelder",
  "dato": "YYYY-MM-DD (signeringsdato eller dokumentdato)",
  "utlop": "YYYY-MM-DD eller null",
  "notat": "viktige tall, betingelser eller oppfølgingspunkter"
}
Svar KUN med JSON, ingen annen tekst.
```

---

## Byggerekkefølge

| # | Steg | Avhengighet | Status |
|---|------|-------------|--------|
| 1 | Opprett Storage-bucket `user-documents` med RLS | — | ⏳ |
| 2 | Legg til `storage_path`-kolonne i `leif_arkiv` | Steg 1 | ⏳ |
| 3 | Bygg opplastingsfunksjon (base64 → Storage via Edge Function) | Steg 1–2 | ⏳ |
| 4 | Bygg Claude-prompt for automatisk metadata-tolkning | Steg 3 | ⏳ |
| 5 | Bygg søkefunksjon med signerte nedlastingslenker | Steg 1–4 | ⏳ |
| 6 | Integrer i Aton-appen (opplastingsskjerm + søkeskjerm) | Steg 1–5 | ⏳ |
| 7 | Rulle ut til alle Aton-brukere (RLS per bruker) | Steg 6 | ⏳ |

---

## Sikkerhet

- **Storage RLS:** Mappestruktur `users/{user_id}/` — kun eier har tilgang
- **Tabell RLS:** `leif_arkiv` — kun eier kan lese/skrive sine rader
- **Signerte URL-er:** nedlastingslenker utløper etter 60 minutter
- **Kryptering:** Supabase krypterer filer i ro (AES-256)
- **Ingen klartext-nøkler** i klientkode — kun publishable key eksponeres

---

## Skalering til Aton-appen

Samme arkitektur gjelder alle brukere:
- Leif → `users/leif-uuid/`
- Bruker B → `users/brukerB-uuid/`
- Bruker C → `users/brukerC-uuid/`

Fremtidig: delt mappe for selskap/familie via egne buckets med invitasjonsbasert RLS.

---

## Relaterte filer

- `08_Aton_Teknologi_AS/AtonApp/SLAGPLAN_ATON_APP.md` — overordnet slagplan
- `08_Aton_Teknologi_AS/AtonApp/README.md` — teknisk oversikt
- `04_Familie_Dynasti/Leif_Personlig/Eiendom/Utleie/` — eksisterende leiekontrakter

---

*Dokumentet oppdateres når hvert byggsteg fullføres.*
