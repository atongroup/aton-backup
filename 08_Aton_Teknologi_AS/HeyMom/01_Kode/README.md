# HeyMom — Kode

## Repo
`github.com/atongroup/atonapp` (privat)

## Lokal mappe
`C:\atonapp`

## Kjøre appen
```powershell
cd C:\atonapp
npx expo start --tunnel
```

## Hente siste App.tsx
```powershell
# Token lagret i Bitwarden → "HeyMom GitHub token"
(Invoke-WebRequest -Uri "https://raw.githubusercontent.com/atongroup/atonapp/refs/heads/main/App.tsx" -Headers @{Authorization="token <GITHUB_TOKEN>"} -UseBasicParsing).Content | Out-File App.tsx -Encoding utf8
```

## Struktur
```
atonapp/
└── App.tsx       — hele appen (én fil, alle skjermer)
```

## Tech stack
- React Native + Expo SDK 54
- TypeScript
- Supabase (auth + database + edge functions)
- Anthropic Claude via `claude-proxy` edge function
- expo-speech (TTS)

## Versjon
v0.7 — 4. juni 2026
