# Signal Schedule v5.15.5 Validation

## Required checks

- Open `/index.html` and confirm the working dashboard loads.
- Open `/pages/admin/dashboard-reference.html` and confirm the preserved visual reference loads.
- Open `/pages/admin/ui-catalog.html` and confirm it still uses the dashboard design system.
- Open `/pages/calendar/schedule.html` and confirm the calendar remains on the dashboard shell.
- Open migrated pages such as `/pages/people/employees.html`, `/pages/workspace/assignments.html`, `/pages/requests/approvals.html`, and `/pages/settings/settings.html`.
- Confirm converted pages no longer load `/app-shell.css` or `/app-shell.js`.
- Confirm sidebar, topbar, search, status strip, and footer are consistent across converted modules.
- Confirm module-specific preview scripts still render where applicable.

## Coolify

No server or Coolify configuration changes are required. Deploy as a full replacement.
