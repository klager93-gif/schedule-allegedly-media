## v5.15.2 — Working Dashboard Split

- Moved the previous `index.html` visual dashboard target to `pages/admin/dashboard-reference.html`.
- Rebuilt `index.html` as the working application dashboard entry point.
- Added dashboard reference route to central route/navigation registries.
- Preserved UI Catalog and reference links for ongoing design-system rollout.
- Updated release/cache markers to v5.15.2.

## v5.15.2 — Design System Rollout

- Applied UI Catalog standards across existing Schedule pages through the shared app shell.
- Added automatic normalization for buttons, forms, tables, badges, surfaces, and command bars.
- Preserved `/index.html` as the independent public-facing visual target/placeholder.
- Expanded the UI Catalog with rollout coverage notes.
- Updated release/cache markers to v5.15.2.
- Removed packaging junk from the full replacement ZIP.
- No server or Coolify configuration changes required.

## v5.15.0 — UI & Foundation Standardization

- Added internal UI Component Catalog for Schedule-only component standards.
- Added reusable foundation CSS primitives for action bars, filters, cards, tables, forms, badges, alerts, empty states, and modal previews.
- Registered UI Catalog in route/navigation foundations.
- Updated release/cache markers to v5.15.0.
- No server or Coolify configuration changes required.

# v5.15.0 — UI & Foundation Standardization

- Improved dashboard responsive scaling for desktop and ultrawide displays.
- Restored My Schedule to the dashboard sidebar.
- Fixed the logo/tagline underline styling issue.
- Added top navigation dropdowns for Schedules, Requests, Employees, Reports, and System with placeholder links for future routing.
- Added search foundation for employees, requests, and schedules.
- Replaced admin dashboard My Upcoming Shifts with admin-focused widgets: Staffing Health, Pending Approvals, and Publishing Status.
- Tightened dashboard layout spacing and width behavior.
- Refreshed metadata, manifests, checksums, and validation report.
- No database changes.


## Admin notes

Top dropdown placeholder links are intentionally marked as `#` until the full route/menu model is finalized. Admin dashboard widgets are preview-only and do not yet query live services.
