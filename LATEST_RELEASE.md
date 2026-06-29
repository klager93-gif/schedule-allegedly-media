# Signal Schedule v5.15.4 — Dashboard UI Catalog Rebuild

Released: 2026-06-29

## Release Focus

Rebuilt `pages/admin/ui-catalog.html` so the UI Catalog now uses the same dashboard-reference shell, styling system, topbar, sidebar, panels, cards, buttons, badges, forms, tables, modal preview, and spacing language as `pages/admin/dashboard-reference.html`.

## What Changed

- Replaced the old app-shell/foundation-admin UI Catalog with a dashboard-shell catalog.
- Changed the catalog stylesheet dependency to `/assets/dashboard.css?v=5.15.4`.
- Added catalog-specific dashboard component styles to `assets/dashboard.css`.
- Added examples for metrics, command bars, buttons, cards, alerts, empty states, forms, tables, badges, modal preview, and usage rules.
- Preserved `pages/admin/dashboard-reference.html` as the visual target.
- Updated version/cache markers to v5.15.4.
- No server or Coolify configuration changes required.

## Validation

- UI Catalog no longer loads `app-shell.css` or `foundation-admin.css`.
- Internal absolute links and assets were checked for missing files.
- No remaining v5.15.3 text markers found.
