/**
 * verdier.js — Aton Group AS
 * Versjon: 2.6.1 — 2. juni 2026
 *
 * Alle selskaper har TRE verdier:
 *   her_naa   = Edruelig nåverdi — kun det som er faktisk bevist og dokumentert
 *   post_trigger = Verdi etter neste store hendelse (EIC, LOI, TRL-løft)
 *   forhandling  = Gekko-åpningsposisjon (35% over mål)
 */
const ATON_VERDIER = {
  meta: {
    versjon: "2.6.2",
    dato: "2026-06-02",
    metoder: ["Berkus","Scorecard","TRL-justert","Risk Factor Summation","First Chicago"],
    benchmark_nok: 40,
    kilde: "Equidam Q1 2025 — norsk deeptech pre-seed"
  },
  selskaper: [
    {
      id: "aton_group",
      navn: "Aton Group AS",
      type: "holding",
      eierandel: 100,
      stadium: "Under stiftelse · 2026",
      // TRE VERDIER
      her_naa: {
        verdi: 29,
        grunnlag: "BladeShip 100% (NOK 18M) + Velumen 30% (NOK 6.6M) + launchpad-konsepter (NOK 3M) + Aton brand/WS (NOK 1M). Holdingselskap kan ikke være verdt mindre enn summen av det det eier.",
        bevist: ["BladeShip AS 100% eierskap — NOK 18M her&nå","Velumen AS 30% andel — NOK 6.6M","Launchpad-pakker klar (Grunnfelt, Sprayvisir, TrashShip)","Google Workspace aktiv","Nettside atongroup.no live","Stiftelsesdokumenter klare"]
      },
      post_trigger: {
        verdi: 100,
        trigger: "BladeShip EIC-tilsagn (NOK 85M) + Velumen lansering + launchpad-founder",
        aar: "2026 Q3–Q4"
      },
      forhandling: {
        aapning: 140,
        maal: 100,
        bunn: 70
      },
      // Metodeverdier (veid snitt)
      veid_snitt: 55,
      exit_potensial: { lav: 500, mid: 1500, hoy: 4000 },
      sist_oppdatert: "2026-06-02"
    },
    {
      id: "bladeship",
      navn: "BladeShip AS",
      type: "as_etablert",
      eierandel: 100,
      stadium: "Pre-seed · TRL 2–3 · 2026",
      // TRE VERDIER
      her_naa: {
        verdi: 18,
        grunnlag: "To patenter innlevert, EIC søknad inne (ikke tilsagn), nettside, dokumentasjon, founder med offshore-erfaring. Ingen inntekter, ingen kontrakter.",
        bevist: ["Patent NO2026-0735 innlevert","Patent NO2026-0736 innlevert","EIC søknad ID 101354477 inne","Nettside bladeship.no live","Equinor Ventures søknad sendt"]
      },
      post_trigger: {
        verdi: 85,
        trigger: "EIC Accelerator tilsagn EUR 17.5M",
        aar: "2026 Q3–Q4"
      },
      forhandling: {
        aapning: 90,
        maal: 65,
        bunn: 45
      },
      veid_snitt: 52,
      exit_potensial: { lav: 1000, mid: 2500, hoy: 4000 },
      sist_oppdatert: "2026-06-02"
    },
    {
      id: "velumen",
      navn: "Velumen AS",
      type: "portefolje",
      eierandel: 30,
      stadium: "Pre-launch · Aktiv",
      her_naa: {
        verdi: 4,
        grunnlag: "30% Aton-andel. Selskapet er etablert men pre-revenue. Ingen produkt lansert ennå.",
        bevist: ["Selskap etablert","Aton Group 30% aksjonær","Viking Løvneseth operativ"]
      },
      post_trigger: {
        verdi: 6.6,
        trigger: "Produktlansering og første salg",
        aar: "2027"
      },
      forhandling: {
        aapning: 9,
        maal: 6.6,
        bunn: 4
      },
      veid_snitt: 22,
      aton_andel_nok: 6.6,
      sist_oppdatert: "2026-06-02"
    },
    {
      id: "trashship",
      navn: "TrashShip",
      type: "launchpad",
      eierandel: 100,
      stadium: "Konsept · TRL 1–2",
      her_naa: {
        verdi: 5,
        grunnlag: "Konseptdokumentasjon, fire patentideer, BladeShip-plattform som IP-grunnlag. Ingen egne patenter innlevert ennå.",
        bevist: ["Konseptdokument v1","Teknisk spesifikasjon","Markedsanalyse","BladeShip IP som plattform"]
      },
      post_trigger: {
        verdi: 22,
        trigger: "Første patent innlevert + AS stiftet",
        aar: "2027"
      },
      forhandling: {
        aapning: 32,
        maal: 22,
        bunn: 15
      },
      veid_snitt: 30,
      sist_oppdatert: "2026-06-02"
    },
    {
      id: "grunnfelt",
      navn: "Grunnfelt",
      type: "launchpad",
      eierandel: 70,
      stadium: "Søker founder · 2026",
      her_naa: {
        verdi: 3,
        grunnlag: "Ferdig konseptpakke: kontrakter, maler, markedsanalyse, nettside. Ingen founder, ingen inntekter.",
        bevist: ["Grunneieravtale-mal klar","Stedsagentavtale klar","Markedsanalyse ferdig","Nettside live"]
      },
      post_trigger: {
        verdi: 17,
        trigger: "Founder funnet + første grunneieravtale signert",
        aar: "2026–2027"
      },
      forhandling: {
        aapning: 35,
        maal: 24,
        bunn: 15
      },
      veid_snitt: 24,
      sist_oppdatert: "2026-06-02"
    },
    {
      id: "sprayvisir",
      navn: "Sprayvisir",
      type: "launchpad",
      eierandel: 70,
      stadium: "Søker founder · 2026",
      her_naa: {
        verdi: 2,
        grunnlag: "Konseptpakke klar. Ingen founder, ingen inntekter, ingen produkt.",
        bevist: ["Markedsanalyse ferdig","Investordokumenter klare","Nettside live"]
      },
      post_trigger: {
        verdi: 13,
        trigger: "Founder funnet + første prototype",
        aar: "2026–2027"
      },
      forhandling: {
        aapning: 25,
        maal: 18,
        bunn: 10
      },
      veid_snitt: 18,
      sist_oppdatert: "2026-06-02"
    }
  ],
  get total_her_naa() {
    return this.selskaper.reduce((s,c)=>s+(c.her_naa?.verdi||0),0);
  },
  get total_veid_snitt() {
    return this.selskaper.reduce((s,c)=>s+(c.veid_snitt||0),0);
  },
  hent(id){ return this.selskaper.find(s=>s.id===id); }
};
if(typeof window!=='undefined') window.ATON_VERDIER=ATON_VERDIER;
if(typeof module!=='undefined') module.exports=ATON_VERDIER;
