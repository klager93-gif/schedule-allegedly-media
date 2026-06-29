/*
Signal Schedule
Area: Signal Schedule
File: assets/navigation.js
Version: v6.1.1
Purpose: Production grouped navigation registry for workflow-centered Signal Schedule navigation.
*/
(function () {
  const routes = window.SIGNAL_SCHEDULE_ROUTES || {};
  const path = (key, fallback) => routes[key] || fallback;
  const item = (label, href, icon, permission) => Object.freeze({ label, href, icon, permission: permission || 'authenticated' });
  window.SIGNAL_SCHEDULE_NAVIGATION = Object.freeze({
    version: 'v6.1.1',
    labels: Object.freeze({
      [path('dashboard','/dashboard/')]: 'Dashboard',
      [path('calendar','/calendar/')]: 'Calendar',
      [path('employeePortal','/my-schedule/')]: 'My Schedule',
      [path('builder','/schedule/')]: 'Schedule Builder',
      [path('openShifts','/open-shifts/')]: 'Open Shifts / VOT',
      [path('shiftTrades','/trades/')]: 'Shift Trades',
      [path('mandation','/mandation/')]: 'Mandation',
      [path('assignments','/assignments/')]: 'Assignments',
      [path('staffingEngine','/staffing/')]: 'Staffing',
      [path('dailyBoard','/daily-board/')]: 'Daily Board',
      [path('employees','/employees/')]: 'Employees',
      [path('leaveBanks','/leave/')]: 'Leave Management',
      [path('requests','/requests/')]: 'Approvals & Requests',
      [path('notifications','/notifications/')]: 'Notifications',
      [path('publishing','/publishing/')]: 'Publishing',
      [path('auditTrail','/audit/')]: 'Audit Trail',
      [path('reports','/reports/')]: 'Reports',
      [path('systemHealth','/system/')]: 'System Administration',
      [path('agencySetup','/agency/')]: 'Agency Setup',
      [path('users','/users/')]: 'Users',
      [path('permissions','/roles/')]: 'Roles & Permissions',
      [path('settings','/admin/')]: 'Admin',
      [path('dashboardReference','/developer/dashboard-reference/')]: 'Visual Target',
      [path('uiCatalog','/developer/ui-catalog/')]: 'UI Catalog'
    }),
    groups: Object.freeze([
      Object.freeze({ label: 'Main', items: Object.freeze([item('Dashboard', path('dashboard','/dashboard/'), '⌂')]) }),
      Object.freeze({ label: 'Scheduling', items: Object.freeze([
        item('Calendar', path('calendar','/calendar/'), '▣'),
        item('My Schedule', path('employeePortal','/my-schedule/'), '◉'),
        item('Schedule Builder', path('builder','/schedule/'), '▧'),
        item('Open Shifts / VOT', path('openShifts','/open-shifts/'), '☷'),
        item('Shift Trades', path('shiftTrades','/trades/'), '⇄'),
        item('Mandation', path('mandation','/mandation/'), '⚑'),
        item('Assignments', path('assignments','/assignments/'), '▤'),
        item('Staffing', path('staffingEngine','/staffing/'), '▥'),
        item('Daily Board', path('dailyBoard','/daily-board/'), '▦')
      ]) }),
      Object.freeze({ label: 'People', items: Object.freeze([
        item('Employees', path('employees','/employees/'), '♙'),
        item('Leave Management', path('leaveBanks','/leave/'), '▦'),
        item('Approvals & Requests', path('requests','/requests/'), '▱')
      ]) }),
      Object.freeze({ label: 'Operations', items: Object.freeze([
        item('Notifications', path('notifications','/notifications/'), '🔔'),
        item('Publishing', path('publishing','/publishing/'), '⇧'),
        item('Audit Trail', path('auditTrail','/audit/'), '◷'),
        item('Reports', path('reports','/reports/'), '↗')
      ]) }),
      Object.freeze({ label: 'Administration', items: Object.freeze([
        item('System Administration', path('systemHealth','/system/'), '⌁'),
        item('Agency Setup', path('agencySetup','/agency/'), '◎'),
        item('Users', path('users','/users/'), '♙'),
        item('Roles & Permissions', path('permissions','/roles/'), '◈'),
        item('Admin', path('settings','/admin/'), '⚙')
      ]) }),
      Object.freeze({ label: 'Developer Tools', items: Object.freeze([
        item('Visual Target', path('dashboardReference','/developer/dashboard-reference/'), '◇', 'developer'),
        item('UI Catalog', path('uiCatalog','/developer/ui-catalog/'), '▧', 'developer')
      ]) })
    ])
  });
})();
