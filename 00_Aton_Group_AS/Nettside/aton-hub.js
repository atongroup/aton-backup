/* aton-hub.js — felles base for leif/lone/alex.html */

const PROXY_URL='https://script.google.com/macros/s/AKfycbyot6j9kWSTvzhkGlr_8HnQ2HhcAQptw2a8Adza_X4ZacmvvqDq0edKD0-AprWqFuR4/exec';
const SB_URL='https://wbwpobojxighhnmrabmj.supabase.co';
const SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indid3BvYm9qeGlnaGhubXJhYm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNzA1NzcsImV4cCI6MjA2Mzg0NjU3N30.GNwLRF5CUxl0ql_hgQexEPMFgDJEEOxqJA-4LJdW2BI';

const ALLOWED={
  leif:['leifsunde@gmail.com','leif@atongroup.no','leif@bladeship.no'],
  lone:['lone@atongroup.no'],
  alex:['alexandra@atongroup.no'],
};

function checkAuth(role){
  const email=sessionStorage.getItem('aton_email');
  if(!email||!ALLOWED[role].includes(email)){
    window.location.href='hub.html';
    return false;
  }
  return email;
}

function greet(){
  const h=new Date().getHours();
  return h<5?'God natt':h<12?'God morgen':h<17?'God ettermiddag':'God kveld';
}

function logout(){
  sessionStorage.clear();
  window.location.href='hub.html';
}

// ── CLAUDE ──
let clHist=[],clMode='general',clOpen=false;

const MODES=[
  {k:'general',l:'🌐 Generell'},
  {k:'bladeship',l:'⚓ BladeShip'},
  {k:'investor',l:'📈 Investor'},
  {k:'email',l:'✉️ E-post'},
  {k:'strategy',l:'🎯 Strategi'},
];

const SYS={
  general:n=>`Du er en presis og varm personlig assistent for ${n} i Aton Group AS. Svar på norsk. Vær konkret og direkte.`,
  bladeship:n=>`Du er ekspert på BladeShip AS — verdens første havgående resirkuleringsanlegg for vindmølleblader. EIC €17,5M (ID 101354477), patenter 20260735+20260736. Assist ${n}. Norsk.`,
  investor:n=>`Du er investor relations-rådgiver for Aton Group AS og BladeShip AS. Hjelp ${n} med pitch, term sheets og presentasjoner. Norsk.`,
  email:n=>`Du er profesjonell forretningsskribent for Aton Group. Skriv klare e-postutkast for ${n}. Norsk.`,
  strategy:n=>`Du er strategisk rådgiver for Aton Group AS. Gi ${n} konkrete anbefalinger og neste steg. Norsk.`,
};

function buildModes(name){
  const el=document.getElementById('clModes');
  if(!el)return;
  el.innerHTML=MODES.map(m=>`<button class="cl-pill${m.k===clMode?' act':''}" onclick="setMode('${m.k}','${name}')">${m.l}</button>`).join('');
}

function setMode(k,name){
  clMode=k;clHist=[];
  document.getElementById('clMsgs').innerHTML='';
  buildModes(name);
  addMsg('a','Byttet til '+{general:'Generell',bladeship:'BladeShip',investor:'Investor',email:'E-post',strategy:'Strategi'}[k]+'-modus. Hva kan jeg hjelpe med?');
}

function toggleCl(){
  clOpen=!clOpen;
  document.getElementById('clPanel').classList.toggle('open',clOpen);
  const btn=document.querySelector('.hdr-claude');
  if(btn)btn.style.cssText=clOpen?'background:var(--ink);color:#fff;':'';
  if(clOpen)setTimeout(()=>document.getElementById('clIn')?.focus(),350);
}

function addMsg(role,txt){
  const el=document.getElementById('clMsgs');
  const d=document.createElement('div');
  d.className='cl-msg '+role;
  d.innerHTML=role==='a'?mdToHtml(txt):esc(txt);
  el.appendChild(d);el.scrollTop=el.scrollHeight;
}

function mdToHtml(t){
  t=t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  t=t.replace(/```([\s\S]*?)```/g,'<pre><code>$1</code></pre>');
  t=t.replace(/`([^`]+)`/g,'<code>$1</code>');
  t=t.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  t=t.split('\n\n').map(p=>p.trim()?'<p>'+p.replace(/\n/g,'<br>')+'</p>':'').join('');
  return t||'<p></p>';
}
function esc(t){return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

async function sendCl(name){
  const inp=document.getElementById('clIn');
  const txt=inp.value.trim();if(!txt)return;
  inp.value='';inp.style.height='auto';
  addMsg('u',txt);
  const btn=document.getElementById('clSend');
  if(btn)btn.disabled=true;
  const t=document.createElement('div');t.className='cl-typing';
  t.innerHTML='<span></span><span></span><span></span>';
  document.getElementById('clMsgs').appendChild(t);
  document.getElementById('clMsgs').scrollTop=99999;
  clHist.push({role:'user',content:txt});
  try{
    const res=await fetch(PROXY_URL,{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({secret:'AtonGroup2026!GmailSender#Leif',system:SYS[clMode](name),messages:clHist.slice(-12),model:'claude-sonnet-4-20250514',max_tokens:1500})});
    const data=await res.json();
    t.remove();
    const reply=data.content?.[0]?.text||data.error||'Ingen respons.';
    clHist.push({role:'assistant',content:reply});
    addMsg('a',reply);
  }catch(e){t.remove();addMsg('a','Beklager, noe gikk galt. Prøv igjen.');}
  if(btn)btn.disabled=false;
  document.getElementById('clIn')?.focus();
}

// ── NAVIGASJON ──
function showPage(id,items){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  const pg=document.getElementById('pg-'+id);
  if(pg)pg.classList.add('on');
  document.querySelectorAll('.nav-btn,.mob-b').forEach(b=>{
    b.classList.toggle('active',b.dataset.id===id);
    b.classList.toggle('on',b.dataset.id===id);
  });
  const lbl=items.find(n=>n.i===id);
  const el=document.getElementById('hdrTitle');
  if(el)el.textContent=lbl?lbl.l:'';
  document.getElementById('main')?.scrollTo(0,0);
}

// ── ATON APP BRUKERE ──
async function loadAppUsers(){
  const list=document.getElementById('appUserList');
  const stat=document.getElementById('appStatUsers');
  if(!list)return;
  list.innerHTML='<div style="color:var(--ink4);font-size:.8rem;text-align:center;padding:12px">Laster...</div>';
  try{
    const r=await fetch(`${SB_URL}/auth/v1/admin/users`,{
      headers:{'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY}
    });
    if(!r.ok)throw new Error('no access');
    const d=await r.json();
    const users=d.users||d||[];
    const now=new Date(),week=new Date(now-7*864e5);
    if(stat)stat.textContent=users.length;
    const el2=document.getElementById('appStatNew');
    if(el2)el2.textContent=users.filter(u=>new Date(u.created_at)>week).length;
    list.innerHTML=users.length?users.map(u=>`
      <div class="user-row">
        <div class="user-info">
          <div class="user-dot" style="background:${new Date(u.created_at)>week?'var(--green)':'var(--bg4)'}"></div>
          <div class="user-email">${u.email||u.id?.substring(0,12)+'…'}</div>
        </div>
        <div class="user-date">${new Date(u.created_at).toLocaleDateString('nb-NO')}</div>
      </div>`).join('')
    :'<div style="color:var(--ink4);font-size:.8rem;text-align:center;padding:12px">Ingen brukere funnet</div>';
  }catch(e){
    list.innerHTML='<div style="color:var(--ink4);font-size:.8rem;text-align:center;padding:12px">Krever admin-tilgang (service_role)</div>';
  }
}
