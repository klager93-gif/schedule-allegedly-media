/*
Signal Schedule
Area: Signal Schedule
File: schedule/pages/requests/leave-banks.js
Version: v5.16.2
Purpose: Render Leave Banks Foundation preview
*/
import { getLeaveBanksDashboard } from '../../services/LeaveBanksService.js';

const hours = (value) => `${Number(value || 0).toFixed(0)}h`;
const pct = (bank) => {
  const earned = Number(bank.earned || 0);
  if (!earned) return 0;
  return Math.max(0, Math.min(100, (Number(bank.remaining || 0) / earned) * 100));
};
const statusClass = (bank) => Number(bank.remaining || 0) <= 0 ? 'empty' : pct(bank) <= 15 ? 'low' : '';
const statusChip = (bank) => Number(bank.remaining || 0) <= 0 ? '<span class="leave-bank-chip leave-bank-chip--danger">Zero</span>' : pct(bank) <= 15 ? '<span class="leave-bank-chip leave-bank-chip--warn">Low</span>' : '<span class="leave-bank-chip">OK</span>';

function renderSummary(data) {
  const node = document.querySelector('[data-leave-bank-summary]');
  if (!node) return;
  const items = [
    ['Employees', data.summary?.employeesWithBalances || 0],
    ['Bank Types', data.summary?.bankTypes || 0],
    ['Pending Leave', hours(data.summary?.pendingLeaveHours || 0)],
    ['Remaining', hours(data.totals?.remaining || 0)]
  ];
  node.innerHTML = items.map(([label, value]) => `<article class="leave-bank-summary-card"><span>${label}</span><strong>${value}</strong></article>`).join('');
}

function renderTypes(items) {
  const node = document.querySelector('[data-leave-bank-types]');
  if (!node) return;
  node.innerHTML = (items || []).map((item) => `<article class="leave-bank-type"><div class="leave-bank-row"><strong>${item.name}</strong><span class="leave-bank-code">${item.code}</span></div><small>${item.accrual} · ${item.unit}</small><small>${(item.requestTypes || []).join(' · ')}</small></article>`).join('');
}

function renderEmployees(items) {
  const node = document.querySelector('[data-leave-bank-employees]');
  if (!node) return;
  node.innerHTML = (items || []).map((employee) => `<article class="leave-bank-employee"><div class="leave-bank-row"><div><strong>${employee.employee}</strong><p>${employee.role}</p></div><span class="leave-bank-chip">${(employee.banks || []).length} banks</span></div><div class="leave-bank-bank-grid">${(employee.banks || []).map((bank) => `<div class="leave-bank-bank"><div class="leave-bank-row"><strong>${bank.key}</strong>${statusChip(bank)}</div><div class="leave-bank-meter"><span class="${statusClass(bank)}" style="width:${pct(bank)}%"></span></div><small>${hours(bank.remaining)} remaining · ${hours(bank.pending)} pending</small></div>`).join('')}</div></article>`).join('');
}

function renderImpacts(items) {
  const node = document.querySelector('[data-leave-bank-impacts]');
  if (!node) return;
  node.innerHTML = (items || []).map((item) => `<article class="leave-bank-impact"><div class="leave-bank-row"><strong>${item.employee}</strong><span class="leave-bank-code">${item.code}</span></div><p>${item.date} · ${hours(item.hours)} · ${item.status}</p><small>${item.bank}: ${hours(item.before)} → ${hours(item.after)} · ${item.requestId}</small></article>`).join('');
}

function renderAdjustments(items) {
  const node = document.querySelector('[data-leave-bank-adjustments]');
  if (!node) return;
  node.innerHTML = (items || []).map((item) => `<article class="leave-bank-adjustment"><div class="leave-bank-row"><strong>${item.employee}</strong><span class="leave-bank-chip">${item.change > 0 ? '+' : ''}${hours(item.change)}</span></div><p>${item.bank} · ${item.reason}</p><small>${new Date(item.createdAt).toLocaleString()} · ${item.enteredBy}</small></article>`).join('');
}

function renderTransactions(items) {
  const node = document.querySelector('[data-leave-bank-transactions]');
  if (!node) return;
  node.innerHTML = (items || []).map((item) => `<article class="leave-bank-adjustment"><div class="leave-bank-row"><strong>${item.employee}</strong><span class="leave-bank-chip">${item.type} · ${hours(item.hours)}</span></div><p>${item.bank} · ${item.source}</p><small>${new Date(item.postedAt).toLocaleString()} · ${item.postedBy}</small></article>`).join('') || '<p class="schedule-muted">No transaction preview data available yet.</p>';
}

function renderAdjustmentDraft(item) {
  const node = document.querySelector('[data-leave-bank-adjustment-draft]');
  if (!node) return;
  const fields = (item?.requiredFields || []).map((field) => `<span class="leave-bank-chip">${field}</span>`).join('');
  node.innerHTML = `<p>${item?.adminNotes || 'Adjustment form foundation is ready for admin-entered corrections.'}</p><div class="leave-bank-row">${fields}</div>`;
}

function renderRules(items) {
  const node = document.querySelector('[data-leave-bank-rules]');
  if (!node) return;
  node.innerHTML = (items || []).map((item) => `<article class="leave-bank-rule">${item}</article>`).join('');
}

async function init() {
  try {
    const data = await getLeaveBanksDashboard();
    renderSummary(data);
    renderTypes(data.bankTypes);
    renderImpacts(data.pendingImpacts);
    renderEmployees(data.employeeBalances);
    renderAdjustments(data.adjustments);
    renderTransactions(data.transactions);
    renderAdjustmentDraft(data.adjustmentDraft);
    renderRules(data.rules);
  } catch (error) {
    console.warn('[Signal Schedule] Leave bank preview fallback:', error.message);
    const shell = document.querySelector('.leave-bank-shell');
    window.SignalScheduleData?.renderDataNotice?.(shell, {
      title: 'Leave bank foundation ready',
      message: 'Preview data was not available, but the leave bank layout and controls are ready.',
      detail: error.message
    });
  }
}

init();
