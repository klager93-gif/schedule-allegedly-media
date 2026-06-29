# v6.0.0 — Production Ready Foundation

- Added production-readiness foundation for login, agency setup, users, roles, imports, exports, and persistence planning.
- Added `data/production-ready-preview.json`.
- Added `/agency/`, `/users/`, and `/roles/` production administration aliases.
- Added `docs/architecture/PRODUCTION-READY-v6.0.0.md`.
- Updated version/cache markers to v6.0.0.
- Server note: this remains static; real auth/database requires future Coolify/backend/database work.


# Signal Schedule v6.0.0 — Production Workflow Consolidation

- Added `/publishing/` and `/audit/` clean workflow aliases.
- Added production audit trail preview and `data/production-workflow-preview.json`.
- Removed Rule Engine and Scheduling Engine from normal user navigation; retained them under Developer Tools routes.
- Updated workflow navigation so Publishing and Audit Trail appear under Operations.
- Updated release/cache markers to v6.0.0.
- No Coolify/server configuration changes required.

# Signal Schedule v6.0.0 — Operational Scheduling Part 2

Built from v5.17.2. Adds mandation, shift trades, open shifts/VOT integration, leave-impact checks, approval routing previews, clean aliases for `/trades/` and `/mandation/`, and operational cards inside Schedule Builder.

## v6.0.0 — Routing & Clean URL Foundation

- Added clean URL alias folders for primary workflows.
- Updated navigation and route registry to prefer clean aliases.
- Added `_redirects` for static-host redirects where supported.
- Moved engine preview pages under Developer Tools aliases.
- Added clean URL architecture documentation.



## v6.0.0 — Operational Scheduling: Part 1

- Rebuilt Schedule Builder as the central operational scheduling workspace.
- Added assignment board, employee filtering, coverage, validation, and recommendation panels.
- Added schedule-builder operational preview data.
- Updated navigation label from Create Schedule to Schedule Builder.
- Updated version/cache markers to v6.0.0.

# Signal Schedule v6.0.0 — Scheduling Engine

Release date: 2026-06-29

## Summary
Adds the Scheduling Engine workspace as the first v5.17 operational engine milestone. This release introduces assignment recommendations, coverage checks, conflict-detection integration preview, open shift recommendation structure, and schedule validation reporting.

## Validate
- /pages/scheduling/scheduling-engine.html
- /pages/rules/rule-engine.html
- /pages/workspace/assignments.html
- /pages/admin/ui-catalog.html#scheduling-engine

---

# Signal Schedule v6.0.0 — Rule Engine Foundation

- Added static Rule Engine Foundation workspace.
- Added validation result components for blocking conflicts, warnings, and passing rules.
- Added rule engine preview JSON data.
- Added Rule Engine navigation entry and UI Catalog rule components.
- Updated version/cache markers to v6.0.0.


## v6.0.0 — Operations Workspace
- Added Operations Workspace surface for assignment, leave, approvals, open shifts, coverage impact, and dashboard intelligence previews.
- Added reusable operations cards, metric tiles, chips, lanes, and warning states to the dashboard design system.
- Updated Assignment, Leave Banks, Approvals, Dashboard, and UI Catalog surfaces with v6.0.0 operations components.


## v6.0.0 — Navigation & Employee Workspace

- Reorganized sidebar navigation into grouped sections.
- Updated every dashboard-shell page to inherit the grouped navigation.
- Added permission-ready grouped navigation registry.
- Added Employee Workspace directory cards, filters, profile preview, quick actions, and timeline patterns.
- Added employee workspace components to the UI Catalog.
- Fixed malformed compact user avatar markup in the top action bar.

# Signal Schedule v6.0.0 — Notification Center

- Added static Notification Center, shell notification bell, notification drawer/inbox preview, role preferences, and UI Catalog notification components.
- No Coolify/server configuration changes required.

## v6.0.0 — Foundation Cleanup Audit Fix

- Removed unused root legacy shell files: `app-shell.css` and `app-shell.js`.
- Replaced remaining legacy migration copy with product-ready module descriptions.
- Replaced placeholder wording on key reserved workspaces where practical.
- Preserved the dashboard design system, dashboard reference, and UI Catalog as the production UI source of truth.
- Updated release/cache markers to v6.0.0 and regenerated manifests/checksums.
- No server or Coolify configuration changes required.

## v5.15.4 — Dashboard UI Catalog Rebuild

- Rebuilt `/pages/admin/ui-catalog.html` inside the same dashboard-reference shell used by `pages/admin/dashboard-reference.html`.
- Removed the old UI Catalog dependency on `/app-shell.css` and `/pages/admin/foundation-admin.css`.
- Added dashboard-native component examples for metrics, command bars, buttons, cards, alerts, empty states, forms, tables, badges, modal preview, and usage rules.
- Added catalog-specific production styles to `/assets/dashboard.css`.
- Updated release/cache markers to v5.15.4.
- No server or Coolify configuration changes required.


## v5.15.4 — Dashboard Reference Component Rollout

- Extracted the dashboard reference button/action styling into reusable production classes.
- Updated the working dashboard to use reference-style action buttons and build-path copy.
- Converted `/pages/calendar/schedule.html` away from the old app-shell navigation into the new dashboard shell.
- Preserved `/pages/admin/dashboard-reference.html` as the visual target and `/pages/admin/ui-catalog.html` as the implementation guide.
- Updated release/cache markers to v5.15.4 and rebuilt manifests/checksums.

## v5.15.4 — Working Dashboard Split

- Moved the previous `index.html` visual dashboard target to `pages/admin/dashboard-reference.html`.
- Rebuilt `index.html` as the working application dashboard entry point.
- Added dashboard reference route to central route/navigation registries.
- Preserved UI Catalog and reference links for ongoing design-system rollout.
- Updated release/cache markers to v5.15.4.

## v5.15.4 — Design System Rollout

- Applied UI Catalog standards across existing Schedule pages through the shared app shell.
- Added automatic normalization for buttons, forms, tables, badges, surfaces, and command bars.
- Preserved `/index.html` as the independent public-facing visual target/placeholder.
- Expanded the UI Catalog with rollout coverage notes.
- Updated release/cache markers to v5.15.4.
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
