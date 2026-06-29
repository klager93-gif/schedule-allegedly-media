# Signal Schedule v5.16.0 — Foundation Cleanup Audit Fix

Released: 2026-06-29

## Release Focus

Cleaned up the dashboard-shell rollout after the v5.15.5 migration. This release removes unused legacy shell files, replaces migration placeholder language with production module copy, and refreshes release metadata/manifests before v5.16 feature work begins.

## What Changed

- Removed unused root legacy shell files: `app-shell.css` and `app-shell.js`.
- Replaced remaining "migrated from legacy app shell" page copy with module-specific product descriptions.
- Replaced admin placeholder wording on Employees, Reports, Minimum Staffing, and Weekly Schedule pages where applicable.
- Preserved the dashboard-reference design system and UI Catalog as the source of truth.
- Updated release/cache markers to v5.16.0.
- Regenerated file manifest and checksums.
- No server or Coolify configuration changes required.

## Validation

- Validate `/index.html`, `/pages/admin/dashboard-reference.html`, `/pages/admin/ui-catalog.html`, `/pages/calendar/schedule.html`, `/pages/people/employees.html`, `/pages/reports/reports.html`, `/pages/staffing/staffing.html`, and `/pages/workspace/weekly-schedule.html`.
- Confirm no HTML pages load `app-shell.css` or `app-shell.js`.
- Confirm removed legacy shell files do not create missing asset errors.
- Confirm module headers no longer say the page was migrated from the legacy app shell.
