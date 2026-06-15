/*
Signal Labs
Area: Signal Schedule
File: pages/admin/data-tools.js
Version: v5.7.0
Purpose: Render employee experience data tools preview with root-safe JSON loading.
*/
const esc = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
function render(data){
  const shell=document.querySelector('.data-tools-shell');
  if(!shell)return;
  shell.insertAdjacentHTML('beforeend',`<section class="schedule-card"><h2>Data preview loaded</h2><p>${esc(data.summary || 'Data tools preview data is available.')}</p></section>`);
}
function showError(error){
  const shell=document.querySelector('.data-tools-shell');
  if(shell)shell.insertAdjacentHTML('beforeend',`<section class="schedule-card"><h2>Data failed to load</h2><p>${esc(error.message)}</p><p class="schedule-muted">v5.7 uses root-safe /data/ paths so moved pages no longer parse HTML 404 pages as JSON.</p></section>`);
}
(window.SignalScheduleData?.loadJson ? window.SignalScheduleData.loadJson('/data/employee-experience-data-tools-preview.json') : fetch('/data/employee-experience-data-tools-preview.json').then(r=>r.json())).then(render).catch(showError);
