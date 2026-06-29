
## v5.15.4 — Dashboard Reference Component Rollout

- Extracted the dashboard reference button/action styling into reusable production classes.
- Updated the working dashboard to use reference-style action buttons and build-path copy.
- Converted `/pages/calendar/schedule.html` away from the old app-shell navigation into the new dashboard shell.
- Preserved `/pages/admin/dashboard-reference.html` as the visual target and `/pages/admin/ui-catalog.html` as the implementation guide.
- Updated release/cache markers to v5.15.4 and rebuilt manifests/checksums.

# Signal Schedule
## Current release: v5.15.0 — UI & Foundation Standardization

Signal Schedule v5.15.0 adds the internal UI Component Catalog and reusable Schedule-only component patterns before larger operational scheduling work.

Signal Schedule is a standalone scheduling platform foundation for public safety and shift-based teams.

## Current foundations

- Standalone repository and domain
- Route, navigation, config, feature, role, and status registries
- Identity/login foundation
- Agency setup wizard foundation
- Request, leave bank, approval, and SQL audit foundations
- Visibility and View Engine foundation

## Demo data

Demo identity and agency references use fictional sample data only.


## v5.15.0 UI & Foundation Standardization

`index.html` is the technical static entry point, but the product should present it as the Dashboard. Future releases should move toward clean app-style routes such as `/dashboard`, `/calendar`, and `/requests`.

## Repository Architecture

Signal Schedule keeps clean public URLs through `_redirects` instead of physical root alias folders. App pages live under `/pages/`; clean routes like `/schedule/` and `/employees/` are routing aliases.
