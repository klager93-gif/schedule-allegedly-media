/*
Signal Schedule
Area: Signal Schedule
File: schedule/pages/rules/notifications.js
Version: v6.0.1
Purpose: Render Notification Center preview, drawer, queue, rules, and role preferences
*/
import { getNotificationPreview } from '../../services/NotificationService.js';
const $ = (selector) => document.querySelector(selector);
const safe = (value) => String(value ?? '');
const statLabel = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase());
const priorityClass = (value) => String(value).toLowerCase() === 'high' ? 'warning' : '';
const toneClass = (tone) => `notification-tone-${safe(tone).toLowerCase()}`;
function renderQueueItem(item, compact = false) {
  return `<article class="notification-queue-item ${compact ? 'is-compact' : ''}">
    <div>
      <h3><a href="${safe(item.href || '#')}">${safe(item.title)}</a></h3>
      <p>${safe(item.recipient)}</p>
      <div class="notification-meta"><span>${safe(item.id)}</span><span>${safe(item.relatedModule)}</span><span>${safe(item.priority)}</span></div>
    </div>
    <div>
      <p><strong>Channel:</strong> ${safe(item.channel)}</p>
      <p><strong>Status:</strong> ${safe(item.status)}</p>
      ${compact ? '' : `<p><strong>Created:</strong> ${safe(item.created)}</p>`}
    </div>
  </article>`;
}
function render(data) {
  $('[data-notification-stats]').innerHTML = Object.entries(data.summary).map(([key, value]) => `<div class="notification-stat"><strong>${safe(value)}</strong><span>${statLabel(key)}</span></div>`).join('');
  const drawer = $('[data-notification-drawer]');
  if (drawer) drawer.innerHTML = data.queue.slice(0, 4).map(item => renderQueueItem(item, true)).join('');
  const types = $('[data-notification-types]');
  if (types) types.innerHTML = data.types.map(type => `<article class="notification-card ${toneClass(type.tone)}"><div class="notification-type-icon">${safe(type.icon)}</div><h3>${safe(type.name)}</h3><p>${safe(type.description)}</p></article>`).join('');
  $('[data-notification-channels]').innerHTML = data.channels.map(channel => `<article class="notification-card"><h3>${safe(channel.name)}</h3><p>${safe(channel.audience)}</p><span class="notification-badge">${safe(channel.status)}</span><ul>${channel.examples.map(example => `<li>${safe(example)}</li>`).join('')}</ul></article>`).join('');
  $('[data-notification-rules]').innerHTML = data.rules.map(rule => `<article class="notification-rule"><div><h3>${safe(rule.trigger)}</h3><p><strong>Recipient:</strong> ${safe(rule.recipient)}</p><p><strong>Source:</strong> ${safe(rule.source)}</p></div><div><span class="notification-badge ${priorityClass(rule.priority)}">${safe(rule.priority)}</span><p><strong>Quiet hours:</strong> ${safe(rule.quietHours)}</p></div></article>`).join('');
  $('[data-notification-queue]').innerHTML = data.queue.map(item => renderQueueItem(item)).join('');
  $('[data-notification-preferences]').innerHTML = data.preferences.map(pref => `<article class="notification-card"><h3>${safe(pref.role)}</h3><p>${safe(pref.defaults)}</p><span class="notification-badge ${pref.canOverride ? 'good' : ''}">${pref.canOverride ? 'Can override' : 'Admin controlled'}</span></article>`).join('');
  $('[data-notification-notes]').innerHTML = data.policyNotes.map(note => `<li>${safe(note)}</li>`).join('');
}
getNotificationPreview().then(render).catch(error => { console.error(error); const mount = $('[data-notification-channels]'); if (mount) mount.innerHTML = '<p>Unable to load notification preview data.</p>'; });
