# Signal Schedule v6.0.1 — Operational Scheduling Part 2

This release connects the Schedule Builder to operational workflows that affect staffing: mandation, shift trades, open shifts/VOT, leave impact, approval routing, and notifications.

## Production workflow direction

Engine pages remain available under Developer Tools, but production users should work from clean workflow aliases:

- `/schedule/` — Schedule Builder
- `/open-shifts/` — Open Shifts / VOT
- `/trades/` — Shift Trades
- `/mandation/` — Mandation
- `/leave/` — Leave Management
- `/requests/` — Approvals & Requests

## Included preview data

- `data/operational-scheduling-preview.json`

## Validation focus

Confirm the clean aliases load, the grouped navigation includes Trades and Mandation, and the Schedule Builder shows the operational workflow cards.
