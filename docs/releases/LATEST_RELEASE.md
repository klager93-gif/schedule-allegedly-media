
## v5.15.4 — Dashboard Reference Component Rollout

- Extracted the dashboard reference button/action styling into reusable production classes.
- Updated the working dashboard to use reference-style action buttons and build-path copy.
- Converted `/pages/calendar/schedule.html` away from the old app-shell navigation into the new dashboard shell.
- Preserved `/pages/admin/dashboard-reference.html` as the visual target and `/pages/admin/ui-catalog.html` as the implementation guide.
- Updated release/cache markers to v5.15.4 and rebuilt manifests/checksums.

# Signal Schedule v5.15.4 — Working Dashboard Split

The visual dashboard target has been preserved as `pages/admin/dashboard-reference.html`, while `index.html` now starts the real working dashboard buildout.
