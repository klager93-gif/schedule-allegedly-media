# Signal Schedule v6.2.0 Routing Hotfix

## Reason

Coolify/Nginx static hosting did not honor `_redirects`, causing clean URLs such as `/dashboard/` and `/calendar/` to 404 after the v6.1.0 root cleanup.

## Fix

Restored lightweight physical clean URL alias folders with `index.html` files for production routes while keeping the canonical source pages under `pages/`.

Examples:

- `/dashboard/` serves the dashboard alias page.
- `/schedule/` serves the Schedule Builder alias page.
- `/calendar/` serves the Calendar alias page.
- `/employees/` serves the Employee Workspace alias page.

## Roadmap

In the backend/server phase, replace these physical alias folders with proper server-side rewrite routing in Coolify/Nginx or the application router.

## Server Action

No server changes are required for this hotfix.
