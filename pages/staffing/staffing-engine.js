/*
Signal Labs
Area: Signal Schedule
File: schedule/pages/staffing/staffing-engine.js
Version: v5.13.0
Purpose: Render Staffing Engine foundation preview.
*/
const $ = (selector) => document.querySelector(selector);
const safe = (value) => String(value ?? '');
const labelize = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());
async function loadPreview(){try{const res=await fetch('/data/staffing-engine-preview.json',{cache:'no-store'});if(!res.ok)throw new Error(`HTTP ${res.status}`);return await res.json();}catch(error){console.warn('Falling back to API route for staffing engine preview.',error);const res=await fetch('/api/staffing-engine',{cache:'no-store'});if(!res.ok)throw new Error(`Unable to load staffing engine preview: HTTP ${res.status}`);const payload=await res.json();return payload.data;}}
function render(data){$('[data-staffing-stats]').innerHTML=Object.entries(data.summary||{}).map(([key,value])=>`<div class="staffing-stat"><strong>${safe(value)}</strong><span>${safe(labelize(key))}</span></div>`).join('');$('[data-coverage-snapshot]').innerHTML=(data.coverage||[]).map((item)=>`<article class="staffing-tile"><h3>${safe(item.name)}</h3><p>${safe(item.description)}</p><span class="staffing-badge ${item.status==='short'?'warn':'good'}">${safe(item.status)}</span></article>`).join('');$('[data-candidate-list]').innerHTML=(data.candidates||[]).map((candidate)=>`<article class="staffing-item"><div><h3>${safe(candidate.employee)}</h3><p>${safe(candidate.recommendation)}</p><span class="staffing-badge">${safe(candidate.id)}</span></div><div><p><strong>Qualified:</strong> ${safe(candidate.qualified)}</p><p><strong>Available:</strong> ${safe(candidate.available)}</p><p><strong>Fairness:</strong> ${safe(candidate.fairness)}</p></div><div><p><strong>Why?</strong> ${safe(candidate.why)}</p></div></article>`).join('');$('[data-operational-queues]').innerHTML=(data.queues||[]).map((queue)=>`<article class="staffing-tile"><h3>${safe(queue.name)}</h3><p>${safe(queue.description)}</p><span class="staffing-badge">${safe(queue.count)} items</span></article>`).join('');$('[data-integrity-checks]').innerHTML=(data.integrityChecks||[]).map((item)=>`<li>${safe(item)}</li>`).join('');}
});
loadPreview().then(render).catch((error)=>{console.error(error);const list=$('[data-candidate-list]');if(list)list.innerHTML='<p>Unable to load Staffing Engine preview data.</p>';});
