# Signal Schedule v5.17.1 — Operational Scheduling: Part 1

Signal Schedule v5.17.1 makes the Schedule Builder the centerpiece of operational scheduling.

## Highlights

- Rebuilt `pages/workspace/builder.html` into a flagship Schedule Builder workspace.
- Added assignment board, employee panel, coverage panel, validation panel, and recommendation panel.
- Added live-style metrics for draft coverage, blocking conflicts, warnings, and recommendations.
- Added `data/schedule-builder-operational-preview.json` for static operational scheduling preview data.
- Renamed user-facing navigation from Create Schedule to Schedule Builder.
- Kept the Scheduling Engine page as a developer/support preview while beginning the move toward workflow-centered scheduling.

## Validation

Check these routes after deployment:

- `/pages/workspace/builder.html`
- `/pages/scheduling/scheduling-engine.html`
- `/pages/workspace/assignments.html`
- `/pages/admin/ui-catalog.html#schedule-builder`
- `/index.html`

No Coolify or server configuration changes are required.
