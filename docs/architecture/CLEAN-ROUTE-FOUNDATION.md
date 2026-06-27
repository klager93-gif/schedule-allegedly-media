# Clean Route Foundation — v5.15.0

Signal Schedule currently deploys as a static HTML application. Static HTML files are acceptable for the foundation era, but the long-term user-facing routing direction should be professional app-style routes.

## Current technical route

- `index.html` remains the static entry point.
- The navigation label is `Dashboard`.

## Future user-facing routes

- `/dashboard`
- `/calendar`
- `/requests`
- `/staffing`
- `/admin/settings`
- `/system/database-audit`

## Decision

Do not switch to PHP only to hide `.html`. Clean routes should come from the final app router, backend controllers, or server rewrite rules.
