# Signal Schedule v5.15.5 — Global Dashboard Shell Rollout

Released: 2026-06-29

## Release Focus

Migrated the remaining legacy module pages into the dashboard-reference shell so the application now shares one production-facing visual system across dashboard, calendar, people, requests, workspace, staffing, reports, settings, and system pages.

## What Changed

- Converted 55 legacy app-shell pages to the dashboard shell.
- Removed converted page dependencies on `/app-shell.css` and `/app-shell.js`.
- Removed legacy in-page header/footer placeholders from converted pages.
- Preserved page-specific CSS and JavaScript modules where previews already existed.
- Added dashboard compatibility styles for older module cards, heroes, buttons, forms, tables, rows, and lists.
- Added `docs/foundation/DASHBOARD-SHELL-ROLLOUT-v5.15.5.md`.
- Updated release/cache markers to v5.15.5.
- No server or Coolify configuration changes required.

## Validation

- Validate `/index.html`, `/pages/admin/dashboard-reference.html`, `/pages/admin/ui-catalog.html`, `/pages/calendar/schedule.html`, `/pages/people/employees.html`, `/pages/workspace/assignments.html`, `/pages/requests/approvals.html`, and `/pages/settings/settings.html`.
- Confirm converted pages no longer load `app-shell.css` or `app-shell.js`.
- Confirm the dashboard sidebar, topbar, search, module status strip, and footer appear consistently on converted pages.
