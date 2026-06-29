/*
Signal Schedule
Area: Signal Schedule
File: assets/navigation.js
Version: v5.17.2
Purpose: Central grouped navigation registry for dashboard shell navigation.
*/
(function () {
  const routes = window.SIGNAL_SCHEDULE_ROUTES || {};
  const path = (key, fallback) => routes[key] || fallback;
  const item = (label, href, icon, permission) => Object.freeze({ label, href, icon, permission: permission || 'authenticated' });
  window.SIGNAL_SCHEDULE_NAVIGATION = Object.freeze({
    version: 'v5.17.2',
    labels: Object.freeze({
      [path('dashboard','/dashboard/')]: 'Dashboard',
      [path('calendar','/calendar/')]: 'Calendar',
      [path('employeePortal','/my-schedule/')]: 'My Schedule',
      [path('openShifts','/open-shifts/')]: 'Open Shifts / VOT',
      [path('assignments','/assignments/')]: 'Assignments',
      [path('staffingEngine','/staffing/')]: 'Staffing',
      [path('builder','/schedule/')]: 'Schedule Builder',
      [path('dailyBoard','/daily-board/')]: 'Daily Board',
      [path('employees','/employees/')]: 'Employees',
      [path('leaveBanks','/leave/')]: 'Leave & Banks',
      [path('requests','/requests/')]: 'Requests',
      [path('notifications','/notifications/')]: 'Notifications',
      [path('ruleEngine','/developer/rule-engine/')]: 'Rule Engine',
      [path('schedulingEngine','/developer/scheduling-engine/')]: 'Scheduling Engine',
      [path('reports','/reports/')]: 'Reports',
      [path('systemHealth','/system/')]: 'System',
      [path('settings','/admin/')]: 'Admin',
      [path('dashboardReference','/developer/dashboard-reference/')]: 'Visual Target',
      [path('uiCatalog','/developer/ui-catalog/')]: 'UI Catalog'
    }),
    groups: Object.freeze([
      Object.freeze({ label: 'Main', items: Object.freeze([item('Dashboard', path('dashboard','/dashboard/'), '⌂')]) }),
      Object.freeze({ label: 'Scheduling', items: Object.freeze([item('Calendar', path('calendar','/calendar/'), '▣'), item('My Schedule', path('employeePortal','/my-schedule/'), '◉'), item('Open Shifts / VOT', path('openShifts','/open-shifts/'), '☷'), item('Assignments', path('assignments','/assignments/'), '▤'), item('Staffing', path('staffingEngine','/staffing/'), '▥'), item('Schedule Builder', path('builder','/schedule/'), '▧'), item('Daily Board', path('dailyBoard','/daily-board/'), '▦')]) }),
      Object.freeze({ label: 'People', items: Object.freeze([item('Employees', path('employees','/employees/'), '♙'), item('Leave & Banks', path('leaveBanks','/leave/'), '▦'), item('Requests', path('requests','/requests/'), '▱')]) }),
      Object.freeze({ label: 'Operations', items: Object.freeze([item('Notifications', path('notifications','/notifications/'), '🔔'), item('Reports', path('reports','/reports/'), '↗')]) }),
      Object.freeze({ label: 'Administration', items: Object.freeze([item('System', path('systemHealth','/system/'), '⌁'), item('Admin', path('settings','/admin/'), '⚙')]) }),
      Object.freeze({ label: 'Developer Tools', items: Object.freeze([item('Visual Target', path('dashboardReference','/developer/dashboard-reference/'), '◇', 'developer'), item('UI Catalog', path('uiCatalog','/developer/ui-catalog/'), '▧', 'developer'), item('Rule Engine', path('ruleEngine','/developer/rule-engine/'), '⚖', 'developer'), item('Scheduling Engine', path('schedulingEngine','/developer/scheduling-engine/'), '⚙', 'developer')]) })
    ])
  });
})();
