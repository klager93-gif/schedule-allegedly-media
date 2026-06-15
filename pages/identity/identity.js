/*
Signal Labs
Area: Signal Schedule
File: pages/identity/identity.js
Version: v5.10.0
Purpose: Preview-only current user/session foundation behavior.
*/
(function(){
  const fallbackUser={displayName:'Kristopher Ohligschlager',email:'admin@minooka.example',agencyName:'City of Minooka',roles:['Administrator','Scheduler'],status:'Setup Pending',loginMode:'Preview Session'};
  async function loadUser(){
    if(window.SignalScheduleData?.loadJsonOrFallback){return window.SignalScheduleData.loadJsonOrFallback('/data/current-user-preview.json',fallbackUser);}
    return fallbackUser;
  }
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  loadUser().then(user=>{
    document.querySelectorAll('[data-current-user-card]').forEach(mount=>{
      mount.innerHTML=`<div class="identity-session-card"><h3>${esc(user.displayName)}</h3><p>${esc(user.email)}</p><div class="identity-pill-row">${(user.roles||[]).map(r=>`<span class="identity-pill">${esc(r)}</span>`).join('')}</div><p><strong>Agency:</strong> ${esc(user.agencyName)}</p><p><strong>Status:</strong> ${esc(user.status)}</p></div>`;
    });
    const name=document.querySelector('[data-login-preview-name]'); if(name) name.textContent=user.displayName;
  }).catch(()=>{});
  const form=document.querySelector('[data-login-foundation-form]');
  if(form){form.addEventListener('submit',e=>{e.preventDefault(); const out=document.querySelector('[data-login-result]'); if(out) out.innerHTML='<div class="identity-warning"><strong>Preview only.</strong> Login UI is staged, but no credentials are verified in the static frontend build.</div>';});}
})();
