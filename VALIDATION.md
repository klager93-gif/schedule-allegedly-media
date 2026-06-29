# Signal Schedule v5.19.0 Validation

## Required route checks

- `/dashboard/`
- `/schedule/`
- `/publishing/`
- `/audit/`
- `/employees/`
- `/leave/`
- `/requests/`
- `/trades/`
- `/mandation/`
- `/developer/ui-catalog/`

## Expected result

- Publishing and Audit Trail appear under Operations.
- Rule Engine and Scheduling Engine do not appear in normal user navigation.
- Developer routes remain accessible under Developer Tools.
- No physical `/pages/...` route is required for normal navigation.

No Coolify/server configuration changes required.
