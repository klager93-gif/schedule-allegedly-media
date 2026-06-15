/*
Signal Labs
Area: Signal Schedule
File: assets/navigation.js
Version: v5.12.0
Purpose: Central navigation registry for connected Schedule flyout navigation.
*/
(function () {
  const routes = window.SIGNAL_SCHEDULE_ROUTES || {};
  const path = (key, fallback) => routes[key] || fallback;
  window.SIGNAL_SCHEDULE_NAVIGATION = Object.freeze({
    labels: Object.freeze({
      [path('home','index.html')]: 'Overview',
      [path('login','pages/identity/login.html')]: 'Login',
      [path('currentUser','pages/identity/current-user.html')]: 'Current User',
      [path('agencySetup','pages/identity/agency-setup.html')]: 'Agency Setup',
      [path('workspace','pages/workspace/workspace.html')]: 'Scheduling Workspace',
      [path('builder','pages/workspace/builder.html')]: 'Schedule Builder',
      [path('calendar','pages/calendar/schedule.html')]: 'Calendar',
      [path('weeklyBoard','pages/workspace/weekly-board.html')]: 'Weekly View',
      [path('dailyBoard','pages/workspace/daily-board.html')]: 'Daily Board',
      [path('employees','pages/people/employees.html')]: 'Employees',
      [path('profile','pages/people/profile.html')]: 'Profile',
      [path('timeline','pages/people/timeline.html')]: 'Timeline',
      [path('supervisors','pages/people/supervisors.html')]: 'Supervisors',
      [path('seniority','pages/people/seniority.html')]: 'Seniority & Rotation',
      [path('qualifications','pages/people/qualifications.html')]: 'Qualifications',
      [path('training','pages/people/training.html')]: 'Training & Certs',
      [path('eligibility','pages/people/eligibility.html')]: 'Eligibility',
      [path('availability','pages/people/availability.html')]: 'Availability & Preferences',
      [path('assignments','pages/workspace/assignments.html')]: 'Assignments',
      [path('assignmentGenerator','pages/workspace/assignment-generator.html')]: 'Assignment Generator',
      [path('draftPlanning','pages/workspace/draft-planning.html')]: 'Draft Planning',
      [path('planning','pages/workspace/planning.html')]: 'Planning Forecast',
      [path('publishing','pages/workspace/publishing.html')]: 'Publishing',
      [path('history','pages/workspace/history.html')]: 'Schedule History',
      [path('dataTools','pages/admin/data-tools.html')]: 'Data Tools',
      [path('conflictDetection','pages/workspace/conflict-detection.html')]: 'Conflict Detection',
      [path('coverage','pages/coverage/coverage.html')]: 'Coverage Board',
      [path('coverageSpots','pages/coverage/coverage-spots.html')]: 'Coverage Spots',
      [path('staffing','pages/staffing/staffing.html')]: 'Minimum Staffing',
      [path('staffingEngine','pages/staffing/staffing-engine.html')]: 'Staffing Engine',
      [path('requests','pages/requests/requests.html')]: 'Request Engine',
      [path('leave','pages/requests/leave.html')]: 'Leave Requests',
      [path('leaveBanks','pages/requests/leave-banks.html')]: 'Leave Banks',
      [path('openShifts','pages/requests/open-shifts.html')]: 'Open Shifts',
      [path('otVolunteerBoard','pages/requests/ot-volunteer-board.html')]: 'OT Volunteer Board',
      [path('shiftTrades','pages/requests/shift-trades.html')]: 'Shift Trades',
      [path('trades','pages/requests/trades.html')]: 'Trades Compatibility',
      [path('approvals','pages/requests/approvals.html')]: 'Approvals',
      [path('mandation','pages/rules/mandation.html')]: 'Mandation',
      [path('permissions','pages/rules/permissions.html')]: 'Permissions',
      [path('notifications','pages/rules/notifications.html')]: 'Notifications',
      [path('shortcodes','pages/rules/shortcodes.html')]: 'Shortcodes',
      [path('benefits','pages/rules/benefits.html')]: 'Benefit Ledger',
      [path('visibility','pages/settings/visibility.html')]: 'Visibility & Privacy',
      [path('viewEngine','pages/settings/view-engine.html')]: 'View Engine',
      [path('reports','pages/reports/reports.html')]: 'Reports',
      [path('settings','pages/settings/settings.html')]: 'Settings',
      [path('employeePortal','pages/employee/index.html')]: 'Employee Portal',
      [path('employeeCalendar','pages/employee/calendar.html')]: 'Employee Calendar',
      [path('employeeRequests','pages/employee/requests.html')]: 'Employee Requests',
      [path('employeeProfile','pages/employee/profile.html')]: 'Employee Profile',
      [path('systemHealth','pages/admin/system-health.html')]: 'System Health',
      [path('dataExport','pages/admin/data-export.html')]: 'Data Export',
      [path('backendReadiness','pages/admin/backend-readiness.html')]: 'Backend Readiness',
      [path('databaseAudit','pages/admin/database-audit.html')]: 'Database Audit',
    }),
    groups: Object.freeze([
      { label: 'Identity', href: path('login','pages/identity/login.html'), icon: '🔐', children: [path('login','pages/identity/login.html'), path('currentUser','pages/identity/current-user.html'), path('agencySetup','pages/identity/agency-setup.html'), path('permissions','pages/rules/permissions.html')] },
      { label: 'My Schedule', href: path('employeePortal','pages/employee/index.html'), icon: '◉', children: [path('employeePortal','pages/employee/index.html'), path('employeeCalendar','pages/employee/calendar.html'), path('employeeRequests','pages/employee/requests.html'), path('employeeProfile','pages/employee/profile.html')] },
      { label: 'Scheduling', href: path('builder','pages/workspace/builder.html'), icon: '▣', children: [path('builder','pages/workspace/builder.html'), path('workspace','pages/workspace/workspace.html'), path('history','pages/workspace/history.html'), path('publishing','pages/workspace/publishing.html'), path('weeklyBoard','pages/workspace/weekly-board.html'), path('dailyBoard','pages/workspace/daily-board.html'), path('calendar','pages/calendar/schedule.html'), path('viewEngine','pages/settings/view-engine.html'), path('planning','pages/workspace/planning.html'), path('draftPlanning','pages/workspace/draft-planning.html')] },
      { label: 'Staffing', href: path('staffingEngine','pages/staffing/staffing-engine.html'), icon: '▥', children: [path('staffingEngine','pages/staffing/staffing-engine.html'), path('coverage','pages/coverage/coverage.html'), path('coverageSpots','pages/coverage/coverage-spots.html'), path('staffing','pages/staffing/staffing.html'), path('assignments','pages/workspace/assignments.html'), path('assignmentGenerator','pages/workspace/assignment-generator.html'), path('conflictDetection','pages/workspace/conflict-detection.html')] },
      { label: 'Personnel', href: path('employees','pages/people/employees.html'), icon: '👥', children: [path('employees','pages/people/employees.html'), path('profile','pages/people/profile.html'), path('timeline','pages/people/timeline.html'), path('supervisors','pages/people/supervisors.html'), path('seniority','pages/people/seniority.html'), path('qualifications','pages/people/qualifications.html'), path('training','pages/people/training.html'), path('eligibility','pages/people/eligibility.html'), path('availability','pages/people/availability.html')] },
      { label: 'Requests', href: path('requests','pages/requests/requests.html'), icon: '✎', children: [path('requests','pages/requests/requests.html'), path('approvals','pages/requests/approvals.html'), path('leave','pages/requests/leave.html'), path('leaveBanks','pages/requests/leave-banks.html'), path('shiftTrades','pages/requests/shift-trades.html')] },
      { label: 'Overtime', href: path('openShifts','pages/requests/open-shifts.html'), icon: '⏱', children: [path('openShifts','pages/requests/open-shifts.html'), path('otVolunteerBoard','pages/requests/ot-volunteer-board.html'), path('mandation','pages/rules/mandation.html')] },
      { label: 'Administration', href: path('settings','pages/settings/settings.html'), icon: '⚙', children: [path('settings','pages/settings/settings.html'), path('permissions','pages/rules/permissions.html'), path('visibility','pages/settings/visibility.html'), path('viewEngine','pages/settings/view-engine.html'), path('notifications','pages/rules/notifications.html'), path('shortcodes','pages/rules/shortcodes.html'), path('benefits','pages/rules/benefits.html')] },
      { label: 'Reports', href: path('reports','pages/reports/reports.html'), icon: '◴' },
      { label: 'System', href: path('systemHealth','pages/admin/system-health.html'), icon: '⌁', children: [path('systemHealth','pages/admin/system-health.html'), path('dataTools','pages/admin/data-tools.html'), path('dataExport','pages/admin/data-export.html'), path('backendReadiness','pages/admin/backend-readiness.html'), path('databaseAudit','pages/admin/database-audit.html')] }
    ])
  });
})();
