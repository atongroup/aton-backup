// Gmail-proxy for Aton App
// Deploy som ny Apps Script web app: Kjør som meg, tilgang til alle
// URL legges inn i appen som GMAIL_PROXY_URL

function doPost(e) {
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  try {
    var params = JSON.parse(e.postData.contents);
    var action = params.action || 'list';
    var secret = params.secret || '';
    
    // Enkel sikkerhet — secret sendes fra appen
    if (secret !== 'AtonMail2026!') {
      output.setContent(JSON.stringify({ error: 'Ugyldig secret' }));
      return output;
    }
    
    if (action === 'list') {
      // Hent siste uleste e-poster
      var count = params.count || 8;
      var threads = GmailApp.search('is:unread', 0, count);
      var emails = [];
      
      threads.forEach(function(thread) {
        var msg = thread.getMessages()[thread.getMessageCount() - 1];
        emails.push({
          id: msg.getId(),
          threadId: thread.getId(),
          from: msg.getFrom(),
          subject: msg.getSubject(),
          date: msg.getDate().toISOString(),
          snippet: msg.getPlainBody().substring(0, 300),
          isUnread: msg.isUnread(),
          hasAttachment: msg.getAttachments().length > 0
        });
      });
      
      output.setContent(JSON.stringify({ 
        success: true, 
        emails: emails,
        count: emails.length
      }));
      
    } else if (action === 'get') {
      // Hent full e-post
      var msgId = params.messageId;
      var msg = GmailApp.getMessageById(msgId);
      
      output.setContent(JSON.stringify({
        success: true,
        email: {
          id: msg.getId(),
          from: msg.getFrom(),
          to: msg.getTo(),
          subject: msg.getSubject(),
          date: msg.getDate().toISOString(),
          body: msg.getPlainBody().substring(0, 3000),
          isUnread: msg.isUnread()
        }
      }));
      
    } else if (action === 'markRead') {
      // Merk som lest
      var msgId = params.messageId;
      var msg = GmailApp.getMessageById(msgId);
      msg.markRead();
      output.setContent(JSON.stringify({ success: true }));
    }
    
  } catch(err) {
    output.setContent(JSON.stringify({ error: err.toString() }));
  }
  
  return output;
}

// Test-funksjon — kjør denne manuelt for å sjekke at det fungerer
function test() {
  var threads = GmailApp.search('is:unread', 0, 3);
  threads.forEach(function(t) {
    var msg = t.getMessages()[0];
    Logger.log(msg.getFrom() + ' — ' + msg.getSubject());
  });
}
