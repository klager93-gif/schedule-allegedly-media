# Signal Schedule v6.2.0 — Clean URL Alias Foundation

## Purpose

v6.2.0 adds clean, user-facing URL aliases for the primary Signal Schedule workflows while preserving the existing static HTML file structure under `/pages/`.

## User-facing aliases

| Clean URL | Source page |
|---|---|
| `/dashboard/` | `/index.html` |
| `/schedule/` | `/pages/workspace/builder.html` |
| `/calendar/` | `/pages/calendar/schedule.html` |
| `/my-schedule/` | `/pages/employee/index.html` |
| `/open-shifts/` | `/pages/requests/open-shifts.html` |
| `/assignments/` | `/pages/workspace/assignments.html` |
| `/staffing/` | `/pages/staffing/staffing-engine.html` |
| `/daily-board/` | `/pages/workspace/daily-board.html` |
| `/employees/` | `/pages/people/employees.html` |
| `/employees/profile/` | `/pages/people/profile.html` |
| `/leave/` | `/pages/requests/leave-banks.html` |
| `/requests/` | `/pages/requests/requests.html` |
| `/notifications/` | `/pages/rules/notifications.html` |
| `/reports/` | `/pages/reports/reports.html` |
| `/coverage/` | `/pages/coverage/coverage.html` |
| `/operations/` | `/pages/operations/operations.html` |
| `/system/` | `/pages/admin/system-health.html` |
| `/admin/` | `/pages/settings/settings.html` |
| `/account/` | `/pages/identity/current-user.html` |
| `/login/` | `/pages/identity/login.html` |

## Developer aliases

| Clean URL | Source page |
|---|---|
| `/developer/ui-catalog/` | `/pages/admin/ui-catalog.html` |
| `/developer/dashboard-reference/` | `/pages/admin/dashboard-reference.html` |
| `/developer/rule-engine/` | `/pages/rules/rule-engine.html` |
| `/developer/scheduling-engine/` | `/pages/scheduling/scheduling-engine.html` |

## Notes

- The physical `/pages/...` files remain in place for now so existing bookmarks and development references do not break.
- Primary navigation now points to clean aliases instead of physical HTML paths.
- `_redirects` is included for static hosts that support redirect files.
- Directory `index.html` alias pages are included so `/schedule/`, `/employees/`, and similar routes work on basic static hosting.
- Engine pages are now treated as Developer Tools instead of primary workflow destinations.
