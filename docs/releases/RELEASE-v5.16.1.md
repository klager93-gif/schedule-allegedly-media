# Signal Schedule v6.1.0 — Navigation & Employee Workspace

## Summary

v6.1.0 reorganizes dashboard navigation into clear sections and adds the first real Employee Workspace surface.

## Highlights

- Grouped sidebar navigation across every dashboard-shell page.
- Permission-ready grouped navigation registry in `assets/navigation.js`.
- Employee directory, filters, cards, profile preview, quick actions, and activity timeline.
- Employee components added to the UI Catalog.
- Compact user avatar markup fixed in the top action bar.

## Validation

- Confirm grouped navigation appears on `/pages/admin/system-health.html` without the old long single-list sidebar.
- Confirm `/pages/people/employees.html` shows the Employee Workspace.
- Confirm `/pages/people/profile.html` shows the profile workspace preview.
- Confirm notification bell and compact `JM` avatar render correctly.
