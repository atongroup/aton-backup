# DNS-sikkerhet for atongroup.no og bladeship.no
## Gjøres i one.com → Domener → DNS-innstillinger

### SPF — hindrer e-post-forfalskning
Navn:    @
Type:    TXT
Verdi:   v=spf1 include:_spf.google.com ~all

### DMARC — rapporterer forfalskede e-poster
Navn:    _dmarc
Type:    TXT
Verdi:   v=DMARC1; p=quarantine; rua=mailto:leif@atongroup.no

### DKIM — sett opp i Google Workspace Admin
1. Gå til admin.google.com
2. Apps → Google Workspace → Gmail → Autentisering av e-post
3. Klikk "Generer ny post" for atongroup.no
4. Kopier TXT-verdien og legg inn i one.com DNS

### CAA — hindrer uautoriserte SSL-sertifikater
Navn:    @
Type:    CAA
Verdi:   0 issue "letsencrypt.org"
Verdi:   0 issue "comodoca.com"
