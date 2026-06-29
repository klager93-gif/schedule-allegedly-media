# Signal Schedule v5.16.0 — Notification Center

- Added static Notification Center, shell notification bell, notification drawer/inbox preview, role preferences, and UI Catalog notification components.
- No Coolify/server configuration changes required.

# Validation — Signal Schedule v5.16.0

Release: Foundation Cleanup Audit Fix
Date: 2026-06-29

## Required Checks

- Confirm `/index.html` loads with `dashboard.css?v=5.16.0`.
- Confirm `/pages/admin/dashboard-reference.html` remains the visual reference.
- Confirm `/pages/admin/ui-catalog.html` remains aligned to the dashboard-reference design.
- Confirm `/pages/calendar/schedule.html` still uses the dashboard shell.
- Confirm `/pages/people/employees.html`, `/pages/reports/reports.html`, `/pages/staffing/staffing.html`, and `/pages/workspace/weekly-schedule.html` no longer contain migration-placeholder copy.
- Confirm no HTML page requests `/app-shell.css` or `/app-shell.js`.
- Confirm removed root files `app-shell.css` and `app-shell.js` are not needed by any route.
- Confirm footer/version markers show v5.16.0.

## Coolify

No Coolify, Docker, environment variable, or persistent storage changes are required.
