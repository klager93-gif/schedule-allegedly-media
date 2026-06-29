/*
Signal Schedule
Area: Signal Schedule
File: assets/navigation.js
Version: v5.16.3
Purpose: Central grouped navigation registry for dashboard shell navigation.
*/
(function () {
  const routes = window.SIGNAL_SCHEDULE_ROUTES || {};
  const path = (key, fallback) => routes[key] || fallback;
  const item = (label, href, icon, permission) => Object.freeze({ label, href, icon, permission: permission || 'authenticated' });
  window.SIGNAL_SCHEDULE_NAVIGATION = Object.freeze({
    version: 'v5.16.3',
    labels: Object.freeze({
      [path('dashboard','/index.html')]: 'Dashboard',
      [path('calendar','/pages/calendar/schedule.html')]: 'Calendar',
      [path('employeePortal','/pages/employee/index.html')]: 'My Schedule',
      [path('openShifts','/pages/requests/open-shifts.html')]: 'Open Shifts / VOT',
      [path('assignments','/pages/workspace/assignments.html')]: 'Assignments',
      [path('staffingEngine','/pages/staffing/staffing-engine.html')]: 'Staffing',
      [path('builder','/pages/workspace/builder.html')]: 'Create Schedule',
      [path('dailyBoard','/pages/workspace/daily-board.html')]: 'Daily Board',
      [path('employees','/pages/people/employees.html')]: 'Employees',
      [path('leaveBanks','/pages/requests/leave-banks.html')]: 'Leave & Banks',
      [path('requests','/pages/requests/requests.html')]: 'Requests',
      [path('notifications','/pages/rules/notifications.html')]: 'Notifications',
      [path('reports','/pages/reports/reports.html')]: 'Reports',
      [path('systemHealth','/pages/admin/system-health.html')]: 'System',
      [path('settings','/pages/settings/settings.html')]: 'Admin',
      [path('dashboardReference','/pages/admin/dashboard-reference.html')]: 'Visual Target',
      [path('uiCatalog','/pages/admin/ui-catalog.html')]: 'UI Catalog'
    }),
    groups: Object.freeze([
      Object.freeze({ label: 'Main', items: Object.freeze([item('Dashboard', path('dashboard','/index.html'), '⌂')]) }),
      Object.freeze({ label: 'Scheduling', items: Object.freeze([item('Calendar', path('calendar','/pages/calendar/schedule.html'), '▣'), item('My Schedule', path('employeePortal','/pages/employee/index.html'), '◉'), item('Open Shifts / VOT', path('openShifts','/pages/requests/open-shifts.html'), '☷'), item('Assignments', path('assignments','/pages/workspace/assignments.html'), '▤'), item('Staffing', path('staffingEngine','/pages/staffing/staffing-engine.html'), '▥'), item('Create Schedule', path('builder','/pages/workspace/builder.html'), '▧'), item('Daily Board', path('dailyBoard','/pages/workspace/daily-board.html'), '▦')]) }),
      Object.freeze({ label: 'People', items: Object.freeze([item('Employees', path('employees','/pages/people/employees.html'), '♙'), item('Leave & Banks', path('leaveBanks','/pages/requests/leave-banks.html'), '▦'), item('Requests', path('requests','/pages/requests/requests.html'), '▱')]) }),
      Object.freeze({ label: 'Operations', items: Object.freeze([item('Notifications', path('notifications','/pages/rules/notifications.html'), '🔔'), item('Reports', path('reports','/pages/reports/reports.html'), '↗')]) }),
      Object.freeze({ label: 'Administration', items: Object.freeze([item('System', path('systemHealth','/pages/admin/system-health.html'), '⌁'), item('Admin', path('settings','/pages/settings/settings.html'), '⚙')]) }),
      Object.freeze({ label: 'Design System', items: Object.freeze([item('Visual Target', path('dashboardReference','/pages/admin/dashboard-reference.html'), '◇', 'developer'), item('UI Catalog', path('uiCatalog','/pages/admin/ui-catalog.html'), '▧', 'developer')]) })
    ])
  });
})();
