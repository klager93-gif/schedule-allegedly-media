# Changelog

## v5.11.0 — Agency Setup Wizard & Sanitized Identity Demo

- Cleaned up the login foundation layout so identity cards have balanced proportions and clearer hierarchy.
- Added Agency Setup Wizard foundation for first-login agency onboarding.
- Sanitized demo data by replacing real personal and agency references with fictional sample data.
- Added fictional City of Fairview preview agency and Jordan Miller administrator session.
- Updated route/navigation registries for Agency Setup.

# v5.11.0 — Agency Setup Wizard & Sanitized Identity Demo

- Added login foundation page.
- Added current-user/session preview page.
- Added identity routes and navigation group.
- Added role-aware app-shell login/current-user links.
- Added City of Fairview preview administrator session data.
- Added identity/session docs tied to existing users, roles, user_roles, role_permissions, and employees tables.
- No live authentication or database changes.

# Changelog

## v5.11.0 — Agency Setup Wizard & Sanitized Identity Demo

- Added approval foundation data and decision model preview.
- Added database naming contract for core identity versus schedule module tables.
- Added SQL audit snapshot based on the live 118-table Postgres inventory.
- Removed accidental in-app copy widgets and copy-button UI from foundation pages.
- Updated route/navigation registry with Database Audit under System.
- Refreshed release metadata, cache busting, manifests, and validation.


## v5.11.0 — Leave Banks & Data Layer Cleanup

- Added leave bank foundation UI improvements for balances, pending impacts, transactions, and adjustment-entry readiness.
- Added data layer cleanup so optional preview JSON failures render neutral foundation states instead of alarming errors.
- Added leave bank sample data, SQL draft, and documentation.
- Updated validation coverage for data references and JSON fallback handling.

- Fixed `/employee/` drift by moving employee portal HTML routes into `/pages/employee/`.
- Added admin System Health page.
- Added Data Export & Demo Controls foundation page.
- Added Backend Readiness foundation page.
- Added workspace dashboard foundation for Admin, Scheduler, Supervisor, and Employee views.
- Added request, leave bank, open shift, approval, and settings foundation UI notes.
- Added demo preset, settings, export, and workspace preview data files.
- Updated route and navigation registries for all new pages.
- Refreshed footer/header/homepage metadata, manifests, and checksums.

# Changelog

## v5.6.0 — Page Architecture & Route Registry Migration

- Moved feature HTML routes from repo root into categorized `/pages/` directories.
- Kept `index.html` at repo root for static deployment.
- Updated `assets/routes.js` to point to new page locations.
- Updated `app-shell.js` to resolve navigation from the standalone domain root.
- Updated HTML asset/script paths to avoid nested relative-link drift.
- Added page architecture documentation.
- Regenerated manifests and validation artifacts.

## v5.6.0 — Page Architecture & Route Registry Migration
Date: 2026-06-15

- Added release, route, navigation, configuration, feature, role, and status registries under `/assets/`.
- Updated `app-shell.js` to consume the navigation registry instead of owning the full navigation map inline.
- Updated footer metadata fallback to remain aligned with the central release metadata source.
- Added registry scripts to Schedule HTML routes without moving existing route files.
- Regenerated manifests, checksums, and validation report.

## v5.6.0 — Page Architecture & Route Registry Migration

- Added a central client-side release metadata source at `assets/release-metadata.js`.
- Updated app shell and footer version handling to reduce footer/header drift.
- Refreshed homepage, app shell, component defaults, cache-busting values, and visible release metadata to v5.6.0.
- Added metadata validation documentation and strengthened release standards.
- Regenerated file manifests and SHA256 checksums.
- No database changes.
- No risky HTML route moves.


## v5.2.0 — Standalone Repository Organization

- Organized root-level technical documents into categorized `docs/` folders.
- Kept deployable HTML routes at the repository root to avoid navigation/path drift.
- Kept core public project files in root: README, changelogs, roadmap, standards, manifests, and build metadata.
- Refreshed visible cache-busting/version metadata for the standalone release.
- Regenerated file manifests and SHA256 checksums after organization.
- No feature changes.
## v5.1.0 — Request & Approval Engine

- Added central `requests.html` Request & Approval Engine hub.
- Added request queues for time off, trades, VOT, training, profile changes, and open-shift interest.
- Added migration `046_request_approval_engine_schema.sql`.
- Added request case, decision, event, comment, and schedule-impact foundations.
- Added copy helpers for request IDs, API endpoints, and migration filenames.

# v5.1.0 — Employee Experience & Data Tools

- Added Data Tools page for templates, imports, exports, and profile-management readiness.
- Added migration 045 for schedule templates, import jobs, export jobs, employee profile extras, and notification preferences.
- Added read-only Employee Experience & Data Tools preview API/contract.
- Updated employee dashboard language around My Schedule, My Requests, My Availability, My Profile, Notifications, and My Overtime.
- Added Data Tools navigation under Settings and Me/Employees.
- Reinforced Admin = Employee + More as a role-inheritance rule.

SQL migration required: `schedule/api/coolify/sql/045_employee_experience_data_tools_schema.sql`.

# v4.7.0 — Schedule History & Snapshot Engine

- Renamed the user-facing legacy saved-schedule list concept to Schedule History.
- Replaced `legacy saved-schedule page` with `history.html` and updated navigation/dashboard links.
- Added the product principle: One Agency / One Living Schedule / Many Snapshots.
- Updated snapshot wording for restore, publish, copy, and inspector actions.
- Added Schedule History & Snapshot Engine documentation.
- No SQL migration required; existing migration 044 storage remains in use.

# Signal Schedule Changelog

## v4.7.0 — Employee Portal Navigation Hotfix

- Fixed employee portal subfolder navigation so admin links resolve back to `/schedule/` instead of `/schedule/employee/`.
- Added Schedule History to the Scheduling/Calendar navigation group.
- Fixed employee portal active navigation detection for nested employee pages.
- Cleaned up View As group labels so raw internal values like `shiftGroup` no longer display to users.
- Added hotfix validation for nested Schedule navigation targets.

No SQL migration required.

## v4.7.0 — Publish Schedule Foundation + Copy Helpers
- Added protected publish route: `POST /api/saved-schedules/:id/publish`.
- Added Schedule History UI Publish action with protected `ADMIN_API_KEY` prompt.
- Added published status handling using `status = published` and `published_at = now()`.
- Added copy buttons for schedule IDs, agency IDs, API endpoints, publish endpoints, and validation JSON.
- Added `docs/foundation/PUBLISHING-FOUNDATION.md`.
- No database migration required; v4.7.0 uses migration 044 from v4.4.0.

## v4.4.0 — Saved Schedule CRUD Foundation
- Added protected Postgres-backed snapshot CRUD foundation with `/api/saved-schedules` routes.
- Added migration 044 for `schedule_saved_schedules`.
- Added snapshot write contract.

## v5.1.0 — Staffing Engine

- Added Staffing Engine hub.
- Cleaned confusing navigation labels.
- Added coverage/vacancy, candidate, OT/callback/mandation, fairness, explainability, and integrity-check foundations.
- Added migration 047.
