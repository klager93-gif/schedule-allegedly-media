# Signal Schedule v5.18.0 — Operational Scheduling Part 2

Built from v5.17.2. Adds mandation, shift trades, open shifts/VOT integration, leave-impact checks, approval routing previews, clean aliases for `/trades/` and `/mandation/`, and operational cards inside Schedule Builder.

# Validation — Signal Schedule v5.18.0

## Required checks

- Open `/dashboard/` and confirm it displays the dashboard.
- Open `/schedule/` and confirm it displays Schedule Builder.
- Open `/employees/` and confirm it displays Employee Workspace.
- Open `/leave/` and confirm it displays Leave & Banks.
- Open `/notifications/` and confirm Notification Center loads.
- Open `/developer/ui-catalog/` and confirm the UI Catalog loads.
- Confirm primary sidebar links use clean aliases instead of `/pages/...html` paths.
- Confirm physical `/pages/...` paths still load for development/backward compatibility.

## Server action

No Coolify/server configuration changes required for directory alias pages.

