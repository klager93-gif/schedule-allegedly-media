# Dashboard Shell Rollout v5.16.3

Migrated the remaining legacy app-shell HTML pages into the dashboard reference shell so module pages share the same sidebar, topbar, search, status rail, footer, and dashboard visual language introduced by `dashboard-reference.html` and `ui-catalog.html`.

## Scope

- Converted 55 legacy pages from `/app-shell.css` + `/app-shell.js` to `/assets/dashboard.css`.
- Removed in-page legacy header/footer placeholders from converted pages.
- Preserved page-specific JavaScript and page-specific CSS files where modules already had working previews.
- Added a dashboard compatibility layer for older module card, hero, table, form, list, and button classes.
- Kept `pages/admin/dashboard-reference.html` as the visual reference and `pages/admin/ui-catalog.html` as the design-system source of truth.

## Converted Areas

- Admin/System pages
- Coverage pages
- Employee portal pages
- Identity/session pages
- Operations page
- People pages
- Reports page
- Requests/approvals pages
- Rules pages
- Settings pages
- Staffing pages
- Workspace pages

## Validation Targets

- `/index.html`
- `/pages/admin/dashboard-reference.html`
- `/pages/admin/ui-catalog.html`
- `/pages/calendar/schedule.html`
- `/pages/people/employees.html`
- `/pages/workspace/assignments.html`
- `/pages/requests/approvals.html`
- `/pages/settings/settings.html`
