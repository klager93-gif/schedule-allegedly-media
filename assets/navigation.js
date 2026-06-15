/*
Signal Labs
Area: Signal Schedule
File: assets/navigation.js
Version: v5.4.0
Purpose: Central navigation registry for connected Schedule flyout navigation.
*/
(function () {
  const routes = window.SIGNAL_SCHEDULE_ROUTES || {};
  const path = (key, fallback) => routes[key] || fallback;
  window.SIGNAL_SCHEDULE_NAVIGATION = Object.freeze({
    labels: Object.freeze({
      [path('home','index.html')]: 'Overview',
      [path('workspace','workspace.html')]: 'Scheduling Workspace',
      [path('builder','builder.html')]: 'Schedule Builder',
      [path('calendar','schedule.html')]: 'Calendar',
      [path('weeklyBoard','weekly-board.html')]: 'Weekly View',
      [path('dailyBoard','daily-board.html')]: 'Daily Board',
      [path('employees','employees.html')]: 'Employees',
      [path('profile','profile.html')]: 'Profile',
      [path('timeline','timeline.html')]: 'Timeline',
      [path('supervisors','supervisors.html')]: 'Supervisors',
      [path('seniority','seniority.html')]: 'Seniority & Rotation',
      [path('qualifications','qualifications.html')]: 'Qualifications',
      [path('training','training.html')]: 'Training & Certs',
      [path('eligibility','eligibility.html')]: 'Eligibility',
      [path('availability','availability.html')]: 'Availability & Preferences',
      [path('assignments','assignments.html')]: 'Assignments',
      [path('assignmentGenerator','assignment-generator.html')]: 'Assignment Generator',
      [path('draftPlanning','draft-planning.html')]: 'Draft Planning',
      [path('planning','planning.html')]: 'Planning Forecast',
      [path('publishing','publishing.html')]: 'Publishing',
      [path('history','history.html')]: 'Schedule History',
      [path('dataTools','data-tools.html')]: 'Data Tools',
      [path('conflictDetection','conflict-detection.html')]: 'Conflict Detection',
      [path('coverage','coverage.html')]: 'Coverage Board',
      [path('coverageSpots','coverage-spots.html')]: 'Coverage Spots',
      [path('staffing','staffing.html')]: 'Minimum Staffing',
      [path('staffingEngine','staffing-engine.html')]: 'Staffing Engine',
      [path('requests','requests.html')]: 'Request Engine',
      [path('leave','leave.html')]: 'Leave Requests',
      [path('leaveBanks','leave-banks.html')]: 'Leave Banks',
      [path('openShifts','open-shifts.html')]: 'Open Shifts',
      [path('otVolunteerBoard','ot-volunteer-board.html')]: 'OT Volunteer Board',
      [path('shiftTrades','shift-trades.html')]: 'Shift Trades',
      [path('trades','trades.html')]: 'Trades Compatibility',
      [path('approvals','approvals.html')]: 'Approvals',
      [path('mandation','mandation.html')]: 'Mandation',
      [path('permissions','permissions.html')]: 'Permissions',
      [path('notifications','notifications.html')]: 'Notifications',
      [path('shortcodes','shortcodes.html')]: 'Shortcodes',
      [path('benefits','benefits.html')]: 'Benefit Ledger',
      [path('visibility','visibility.html')]: 'Visibility & Privacy',
      [path('reports','reports.html')]: 'Reports',
      [path('settings','settings.html')]: 'Settings',
      [path('employeePortal','employee/index.html')]: 'Employee Portal',
      [path('employeeCalendar','employee/calendar.html')]: 'Employee Calendar',
      [path('employeeRequests','employee/requests.html')]: 'Employee Requests',
      [path('employeeProfile','employee/profile.html')]: 'Employee Profile'
    }),
    groups: Object.freeze([
      { label: 'Me', href: path('employeePortal','employee/index.html'), icon: '◉', children: [path('employeePortal','employee/index.html'), path('employeeCalendar','employee/calendar.html'), path('employeeRequests','employee/requests.html'), path('employeeProfile','employee/profile.html'), path('notifications','notifications.html')] },
      { label: 'Scheduling', href: path('builder','builder.html'), icon: '▣', children: [path('builder','builder.html'), path('workspace','workspace.html'), path('history','history.html'), path('publishing','publishing.html'), path('weeklyBoard','weekly-board.html'), path('dailyBoard','daily-board.html'), path('calendar','schedule.html'), path('planning','planning.html'), path('draftPlanning','draft-planning.html')] },
      { label: 'Staffing', href: path('staffingEngine','staffing-engine.html'), icon: '▥', children: [path('staffingEngine','staffing-engine.html'), path('coverage','coverage.html'), path('coverageSpots','coverage-spots.html'), path('staffing','staffing.html'), path('assignments','assignments.html'), path('assignmentGenerator','assignment-generator.html'), path('conflictDetection','conflict-detection.html')] },
      { label: 'Personnel', href: path('employees','employees.html'), icon: '👥', children: [path('employees','employees.html'), path('profile','profile.html'), path('timeline','timeline.html'), path('supervisors','supervisors.html'), path('seniority','seniority.html'), path('qualifications','qualifications.html'), path('training','training.html'), path('eligibility','eligibility.html'), path('availability','availability.html')] },
      { label: 'Requests', href: path('requests','requests.html'), icon: '✎', children: [path('requests','requests.html'), path('approvals','approvals.html'), path('leave','leave.html'), path('leaveBanks','leave-banks.html'), path('shiftTrades','shift-trades.html')] },
      { label: 'Overtime', href: path('openShifts','open-shifts.html'), icon: '⏱', children: [path('openShifts','open-shifts.html'), path('otVolunteerBoard','ot-volunteer-board.html'), path('mandation','mandation.html')] },
      { label: 'Administration', href: path('settings','settings.html'), icon: '⚙', children: [path('settings','settings.html'), path('dataTools','data-tools.html'), path('permissions','permissions.html'), path('visibility','visibility.html'), path('notifications','notifications.html'), path('shortcodes','shortcodes.html'), path('benefits','benefits.html')] },
      { label: 'Reports', href: path('reports','reports.html'), icon: '◴' },
      { label: 'System', href: path('settings','settings.html'), icon: '⌁', children: [path('settings','settings.html'), path('dataTools','data-tools.html'), path('reports','reports.html')] }
    ])
  });
})();
