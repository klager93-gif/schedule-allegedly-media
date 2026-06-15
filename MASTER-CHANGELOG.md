# v5.14.0 — Dashboard & Clean Route Foundation

- Added Dashboard as the user-facing landing page label for `index.html`.
- Added Dashboard nav group.
- Rebuilt root dashboard with mission-control cards, schedule overview, layer preview, quick actions, and agency branding placeholder.
- Added fictional Fairview Public Safety placeholder agency logo and branding registry.
- Added clean route foundation documentation for future app-style URLs.
- Refreshed metadata, manifests, checksums, and validation.

# v5.14.0 — Visibility & View Engine

Added login/current-user foundation, identity route registry entries, preview session data, and identity/session architecture docs.

# Master-Changelog

## v5.14.0 — Visibility & View Engine

- Added approval foundation data and decision model preview.
- Added database naming contract for core identity versus schedule module tables.
- Added SQL audit snapshot based on the live 118-table Postgres inventory.
- Removed accidental in-app copy widgets and copy-button UI from foundation pages.
- Updated route/navigation registry with Database Audit under System.
- Refreshed release metadata, cache busting, manifests, and validation.


## v5.14.0 — Leave Banks & Data Layer Cleanup

- Leave bank foundation UI expanded.
- Data tools failed-fetch display replaced with graceful fallback state.
- Leave bank sample data and SQL draft added.
- Validation, manifests, and checksums regenerated.

- Fixed `/employee/` drift by moving employee portal HTML routes into `/pages/employee/`.
- Added admin System Health page.
- Added Data Export & Demo Controls foundation page.
- Added Backend Readiness foundation page.
- Added workspace dashboard foundation for Admin, Scheduler, Supervisor, and Employee views.
- Added request, leave bank, open shift, approval, and settings foundation UI notes.
- Added demo preset, settings, export, and workspace preview data files.
- Updated route and navigation registries for all new pages.
- Refreshed footer/header/homepage metadata, manifests, and checksums.

# Master Changelog

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

## Signal Schedule v4.7.0 — Publish Schedule Foundation + Copy Helpers

Adds protected snapshot persistence, migration 044, API route foundation, write contract documentation, employee write validation cleanup, and clean full-replacement packaging.

## v4.7.0 — Employee Portal Navigation Hotfix

- Fixed employee portal subfolder navigation so admin links resolve back to `/schedule/` instead of `/schedule/employee/`.
- Added Schedule History to the Scheduling/Calendar navigation group.
- Fixed employee portal active navigation detection for nested employee pages.
- Cleaned up View As group labels so raw internal values like `shiftGroup` no longer display to users.
- Added hotfix validation for nested Schedule navigation targets.

No SQL migration required.

## v4.7.0 — Availability, Preferences, Restrictions + Navigation Exposure

- Added `/schedule/availability.html` for employee availability, preferences, restrictions, and View As group filters.
- Added preview data, read-only API contract, service/repository/adapter boundaries, and migration 043.
- Expanded View As group foundation to include groups, roles, locations, departments, qualifications, shifts, and future pattern filters.
- Updated app shell navigation so Schedule Builder, Publishing, Employee Portal, and Availability are visible from the connected navigation.
- Enhanced builder assignment hints with availability/preference/restriction context where preview data exists.


## v4.7.0 — Employee Portal Preview + Builder Autocomplete

- Added `/schedule/employee/` employee-facing portal preview.
- Added permanent View As foundation for employee and group previews.
- Added employee dashboard, calendar, requests/OT, profile, balances, and notifications preview screens.
- Added builder name autocomplete using the current employee sample data.
- Added assignment hinting for availability, group, role, and qualification context while editing the grid.
- Added migration 042 for future View As profiles, audit logging, and portal preferences.

## Signal Schedule v4.7.0 — Beta Foundation & Publishing

Starts the Schedule 4.x beta series with a publishing workspace, read-only publication preview endpoint, migration 040, immutable published version/snapshot/event table foundations, post/seat foundations, and employee availability/preference/restriction foundations.

Database migration required: `schedule/api/coolify/sql/040_schedule_beta_publishing_foundation_schema.sql`.


## v4.7.0 — Schedule Planning & Forecast Horizon

- Adds Schedule Planning / Forecast Horizon foundation.
- Adds forecast runs through a selected date range.
- Adds forecast issue preview for under-minimum coverage, qualification gaps, training/leave conflicts, OT posting needs, and likely mandate risk.
- Adds recommended action queues and heatmap preview.
- Adds read-only API contract/endpoint, service/repository/adapter boundaries, and Postgres migration 039.
- Navigation coverage audit confirms Planning Forecast is linked in the desktop app shell.


## v4.7.0 — Schedule File Organization & Release Cleanup

- Organized Schedule page-specific CSS and JS into /schedule/pages module folders.
- Preserved public /schedule/*.html URLs to avoid breaking navigation, bookmarks, or live links.
- Updated all page asset references for the new support-file locations.
- Removed unused legacy Schedule layout files from the release package.
- Added full-replacement cleanup validation and navigation coverage expectations.
- No database migration required.



## v3.8.0 — Drag-and-Drop + Draft Engine

Adds drag-and-drop draft planning foundations with staged move queue, conflict preview, publish checklist, preview data, read-only API endpoint, API contract, service/repository/adapter boundaries, navigation coverage audit, and Postgres migration 038.

## v3.8.0 — Navigation Coverage Audit Hotfix

- Audited Schedule HTML pages against the app-shell navigation.
- Added missing raw fallback nav links on pages where Qualifications or Mandation were omitted.
- Confirmed Visibility & Privacy is linked.
- Kept redirect-only compatibility pages out of primary navigation.
- No database migration required.


## v3.6.1 — Dense Tables & Workspace

- Adds dense workspace styling for large employee populations and operational schedule views.
- Replaces the native browser theme select with a Schedule-styled connected dropdown menu.
- Adds common table standards: sticky headers, row striping, hover/selected states, compact row spacing, and horizontal table scrolling.
- Adds command-bar, inspector-panel, status-pill, and dense-grid foundations for upcoming Schedule workspaces.
- Tightens app shell spacing, hero sizing, and panel density while preserving v3.3.x connected navigation.
- No database migration required.

## v3.6.1 — Schedule Visibility & Privacy Controls

Adds role/group-based schedule visibility and privacy controls. Employees can be allowed to see supervisor schedules as exact times, hours only, working/off only, or hidden. Leave type labels can be shown, reduced to off-only, or hidden by user group and leave type. Adds preview data, page, API contract/endpoint, service/repository/adapter boundaries, and migration 037.

## Signal Schedule v5.1.0 — Staffing Engine

- Introduced Staffing Engine foundation and navigation cleanup.
- Added migration 047 for staffing vacancies, candidates, explanations, fairness metrics, and integrity audit runs.
