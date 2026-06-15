# v5.12.0 — Visibility & View Engine

- Staged login and current-user pages.
- Added identity navigation and route registry entries.
- Documented identity table expectations against the live database naming contract.

# Admin Changelog

## v5.12.0 — Visibility & View Engine

- Added approval foundation data and decision model preview.
- Added database naming contract for core identity versus schedule module tables.
- Added SQL audit snapshot based on the live 118-table Postgres inventory.
- Removed accidental in-app copy widgets and copy-button UI from foundation pages.
- Updated route/navigation registry with Database Audit under System.
- Refreshed release metadata, cache busting, manifests, and validation.


## v5.12.0 — Leave Banks & Data Layer Cleanup

- Added leave bank transaction and adjustment foundation structures.
- Added `assets/data-loader.js` fallback helpers.
- Added `/sql/058_leave_banks_foundation.sql` as a preview-only schema draft.
- Added data layer audit documentation.

- Fixed `/employee/` drift by moving employee portal HTML routes into `/pages/employee/`.
- Added admin System Health page.
- Added Data Export & Demo Controls foundation page.
- Added Backend Readiness foundation page.
- Added workspace dashboard foundation for Admin, Scheduler, Supervisor, and Employee views.
- Added request, leave bank, open shift, approval, and settings foundation UI notes.
- Added demo preset, settings, export, and workspace preview data files.
- Updated route and navigation registries for all new pages.
- Refreshed footer/header/homepage metadata, manifests, and checksums.

# Admin Changelog

## v5.6.0 — Page Architecture & Route Registry Migration

- Organized feature pages into categorized `/pages/` folders.
- Updated route/navigation registries and app shell route resolution.
- Validated local links, JS imports, metadata, and macOS metadata exclusions.

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

# Signal Schedule Admin Changelog

## v4.7.0 — Employee Portal Navigation Hotfix

- Fixed employee portal subfolder navigation so admin links resolve back to `/schedule/` instead of `/schedule/employee/`.
- Added Schedule History to the Scheduling/Calendar navigation group.
- Fixed employee portal active navigation detection for nested employee pages.
- Cleaned up View As group labels so raw internal values like `shiftGroup` no longer display to users.
- Added hotfix validation for nested Schedule navigation targets.

No SQL migration required.

## v4.7.0
- New admin-facing Schedule History page: `schedule/history.html`.
- Builder can save a protected draft schedule to Postgres when `SCHEDULE_WRITES_ENABLED=true`, `DATA_MODE=postgres`, `DATABASE_URL` is set, and the correct `ADMIN_API_KEY` is entered.
- Snapshot rows can be inspected and handed back to the builder for preview loading.
- Delete/rename/publish controls are intentionally deferred until a proper admin auth/session flow exists.
- No new SQL migration is required after 044.

## v5.1.0 — Staffing Engine

- Added `staffing-engine.html`.
- Added `/api/staffing-engine` preview route and read contract.
- Added `047_staffing_engine_schema.sql`.
- Reorganized navigation into task-based groups and removed confusing Me/Employees labels.
