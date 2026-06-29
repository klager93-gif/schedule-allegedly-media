/*
Signal Schedule
Area: Signal Schedule
File: pages/identity/identity.js
Version: v6.0.1
Purpose: Preview-only current user/session and agency setup foundation behavior.
*/
(function(){
  const fallbackUser={displayName:'Jordan Miller',email:'admin@fairview.example',agencyName:'City of Fairview',roles:['Administrator','Scheduler'],status:'Setup Pending',loginMode:'Preview Session',setupTarget:'Agency Setup Wizard'};
  async function loadJson(path,fallback){
    if(window.SignalScheduleData?.loadJsonOrFallback){return window.SignalScheduleData.loadJsonOrFallback(path,fallback);}
    try{const r=await fetch(path); if(!r.ok) return fallback; return await r.json();}catch(e){return fallback;}
  }
  async function loadUser(){ return loadJson('/data/current-user-preview.json', fallbackUser); }
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function initials(name){return String(name||'Demo User').split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase();}
  loadUser().then(user=>{
    document.querySelectorAll('[data-current-user-card]').forEach(mount=>{
      mount.innerHTML=`<div class="identity-session-card"><div class="identity-user-row"><div class="identity-avatar">${esc(initials(user.displayName))}</div><div><h3>${esc(user.displayName)}</h3><p>${esc(user.email)}</p><div class="identity-pill-row">${(user.roles||[]).map(r=>`<span class="identity-pill">${esc(r)}</span>`).join('')}</div></div></div><div class="identity-detail-list"><div class="identity-detail"><span>Agency</span><strong>${esc(user.agencyName)}</strong></div><div class="identity-detail"><span>Status</span><strong>${esc(user.status)}</strong></div><div class="identity-detail"><span>First login goal</span><strong>${esc(user.setupTarget||'Agency Setup Wizard')}</strong></div></div></div>`;
    });
    const name=document.querySelector('[data-login-preview-name]'); if(name) name.textContent=user.displayName;
  }).catch(()=>{});
  const form=document.querySelector('[data-login-foundation-form]');
  if(form){form.addEventListener('submit',e=>{e.preventDefault(); const out=document.querySelector('[data-login-result]'); if(out) out.innerHTML='<div class="identity-warning"><strong>Preview only.</strong> Login UI is staged. Credentials are not verified in this static foundation build.</div>';});}
})();
