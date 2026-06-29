/*
Signal Schedule
Area: Signal Schedule
File: pages/admin/data-tools.js
Version: v6.0.1
Purpose: Render employee experience data tools preview with graceful foundation data fallback.
*/
const esc = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));

const fallbackData = {
  summary: 'Data tools are ready for templates, imports, exports, and profile-field management. Preview data will appear when available.',
  roles: ['Admin inherits employee self-service tools', 'Supervisor review/control options remain staged'],
  templates: ['Employee profile template', 'Availability import template', 'Leave bank starting balance template'],
  imports: ['Employee roster', 'Leave balances', 'Availability preferences'],
  exports: ['Employee profile CSV', 'Leave bank CSV', 'Request audit CSV'],
  profileFields: ['Preferred name', 'Contact info', 'Emergency contact', 'Availability notes', 'Qualifications']
};

function list(items) {
  return `<ul>${(items || []).map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
}

function fill(selector, html) {
  const node = document.querySelector(selector);
  if (node) node.innerHTML = html;
}

function render(data){
  const shell=document.querySelector('.data-tools-shell');
  if(!shell)return;
  fill('[data-role-inheritance]', list(data.roles || data.roleInheritance));
  fill('[data-template-list]', list(data.templates));
  fill('[data-import-list]', list(data.imports));
  fill('[data-export-list]', list(data.exports));
  fill('[data-profile-fields]', list(data.profileFields || data.fields));
  shell.insertAdjacentHTML('beforeend', `<section class="schedule-card"><h2>Data Layer Ready</h2><p>${esc(data.summary || fallbackData.summary)}</p><p class="schedule-muted">v6.0.1 uses graceful fallback data so missing preview JSON no longer displays alarming fetch errors.</p></section>`);
}

async function init(){
  const loader = window.SignalScheduleData;
  const data = loader?.loadJsonOrFallback
    ? await loader.loadJsonOrFallback('/data/employee-experience-data-tools-preview.json', fallbackData)
    : fallbackData;
  render(data || fallbackData);
}

init();
