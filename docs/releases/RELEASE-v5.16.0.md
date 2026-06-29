# Signal Schedule v5.17.1 — Notification Center

Release date: 2026-06-29

## Summary
v5.17.1 adds the first static Notification Center foundation after the v5.15 dashboard-shell stabilization work.

## Added
- Dashboard-shell notification bell with unread badge across application pages.
- Notification Center route at `/pages/rules/notifications.html`.
- Static notification drawer preview, inbox queue, notification types, channel model, delivery rules, role preferences, and policy notes.
- Notification components added to the UI Catalog.
- Expanded notification preview JSON for approvals, schedule changes, leave requests, open shifts, coverage warnings, training expirations, and system alerts.

## Notes
- No production email, SMS, or push provider is enabled.
- Badge counts and queue data are static preview data until authentication/session wiring is added.
- No Coolify/server configuration changes are required.
