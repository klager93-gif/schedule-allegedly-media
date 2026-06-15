# Leave Banks Foundation v5.10.0

Signal Schedule v5.10.0 adds the leave bank foundation UI and data model readiness.

## Scope

- Vacation, sick, personal, comp time, holiday, and training banks
- Balance cards by employee and bank
- Pending request impact preview
- Transaction history foundation
- Manual adjustment entry foundation
- Admin reason, author, timestamp, and audit requirements
- Sample leave bank data
- Preview SQL draft for future Postgres migration

## Future tables

- `schedule_leave_banks`
- `schedule_leave_balances`
- `schedule_leave_transactions`

No live database migration is required for v5.10.0.
