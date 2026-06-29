# Validation — Signal Schedule v5.15.6

Release: Foundation Cleanup Audit Fix
Date: 2026-06-29

## Required Checks

- Confirm `/index.html` loads with `dashboard.css?v=5.15.6`.
- Confirm `/pages/admin/dashboard-reference.html` remains the visual reference.
- Confirm `/pages/admin/ui-catalog.html` remains aligned to the dashboard-reference design.
- Confirm `/pages/calendar/schedule.html` still uses the dashboard shell.
- Confirm `/pages/people/employees.html`, `/pages/reports/reports.html`, `/pages/staffing/staffing.html`, and `/pages/workspace/weekly-schedule.html` no longer contain migration-placeholder copy.
- Confirm no HTML page requests `/app-shell.css` or `/app-shell.js`.
- Confirm removed root files `app-shell.css` and `app-shell.js` are not needed by any route.
- Confirm footer/version markers show v5.15.6.

## Coolify

No Coolify, Docker, environment variable, or persistent storage changes are required.
