// services/gmailService.ts
// Legg denne filen i: atonapp/services/gmailService.ts

const GMAIL_PROXY_URL = 'https://script.google.com/macros/s/AKfycbwH1Z_sZEDiYZvmK0jhYYfLOFWugC4_AhPceQbg7cTph3P7IHB88c9Ewte4FOvs5VYC/exec'; // Apps Script URL etter deploy
const GMAIL_SECRET = 'AtonMail2026!';

export interface GmailMessage {
  id: string;
  threadId: string;
  from: string;
  subject: string;
  date: string;
  snippet: string;
  isUnread: boolean;
  hasAttachment: boolean;
  body?: string;
}

export interface GmailResponse {
  success: boolean;
  emails?: GmailMessage[];
  email?: GmailMessage;
  count?: number;
  error?: string;
}

// Hent siste uleste e-poster
export async function fetchUnreadEmails(count = 8): Promise<GmailMessage[]> {
  try {
    const res = await fetch(GMAIL_PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'list',
        secret: GMAIL_SECRET,
        count,
      }),
    });
    const data: GmailResponse = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.emails || [];
  } catch (err) {
    console.error('Gmail fetch feilet:', err);
    return [];
  }
}

// Hent full e-post
export async function fetchEmailBody(messageId: string): Promise<GmailMessage | null> {
  try {
    const res = await fetch(GMAIL_PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'get',
        secret: GMAIL_SECRET,
        messageId,
      }),
    });
    const data: GmailResponse = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.email || null;
  } catch (err) {
    console.error('Gmail get feilet:', err);
    return null;
  }
}

// Formater e-poster for Claude
export function formatEmailsForClaude(emails: GmailMessage[]): string {
  if (emails.length === 0) return 'Ingen uleste e-poster funnet.';
  
  const lines = emails.map((e, i) => {
    const date = new Date(e.date).toLocaleDateString('nb-NO', {
      day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
    });
    return `${i + 1}. **${e.subject}**\n   Fra: ${e.from}\n   ${date}${e.hasAttachment ? ' 📎' : ''}\n   ${e.snippet}`;
  });
  
  return `Du har ${emails.length} uleste e-poster:\n\n${lines.join('\n\n')}`;
}
