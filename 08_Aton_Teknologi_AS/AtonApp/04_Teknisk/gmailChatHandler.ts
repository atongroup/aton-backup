// Legg dette inn i Chat-komponenten din (App.tsx eller ChatScreen.tsx)
// der du håndterer SJEKK MAIL-knappen og meldings-input

import { fetchUnreadEmails, fetchEmailBody, formatEmailsForClaude } from './services/gmailService';

// --- Legg til i handleQuickAction eller tilsvarende funksjon ---

async function handleSjekkMail() {
  // 1. Vis "laster..." til brukeren
  addMessage({ role: 'assistant', content: 'Sjekker innboksen din, prins...' });
  
  // 2. Hent e-poster
  const emails = await fetchUnreadEmails(8);
  
  // 3. Formater for Claude
  const emailContext = formatEmailsForClaude(emails);
  
  // 4. Send til Claude med kontekst
  const systemPrompt = `Du er Aton, Leifs personlige AI-assistent. 
Du har nettopp hentet Leifs e-poster. Presenter dem på en oversiktlig måte.
Fremhev viktige e-poster (fra kjente kontakter, med frister, fra myndigheter).
Foreslå hva han bør svare på først. Vær direkte og praktisk.
Tiltale: "prins" eller "Leif".`;

  const userMessage = `Her er mine uleste e-poster:\n\n${emailContext}\n\nHva er viktigst?`;
  
  // 5. Send til Claude via eksisterende proxy
  const response = await sendToClaude(systemPrompt, userMessage);
  
  // 6. Vis svar — erstatt "laster"-meldingen
  updateLastMessage({ role: 'assistant', content: response });
  
  // 7. Lagre e-post-kontekst i samtaleminnet for oppfølging
  // (slik at bruker kan si "svar på den fra DNV" etterpå)
  setEmailContext(emails);
}

// --- Håndter oppfølging i vanlig chat ---
// Legg til i handleSend() — sjekk om meldingen gjelder e-post

async function handleEmailFollowUp(userText: string, emailContext: GmailMessage[]) {
  // Finn referert e-post (nummer eller avsender)
  const match = userText.match(/(\d+)|fra (.+)/i);
  if (!match || !emailContext.length) return false;
  
  const index = match[1] ? parseInt(match[1]) - 1 : 
    emailContext.findIndex(e => e.from.toLowerCase().includes(match[2]?.toLowerCase()));
  
  if (index < 0 || index >= emailContext.length) return false;
  
  // Hent full e-post
  const fullEmail = await fetchEmailBody(emailContext[index].id);
  if (!fullEmail) return false;
  
  // Send til Claude med full tekst
  const context = `E-post fra ${fullEmail.from}:\nEmne: ${fullEmail.subject}\n\n${fullEmail.body}`;
  return context;
}
