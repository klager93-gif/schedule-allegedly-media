# Signal Schedule v6.2.0 Repository Architecture

## Purpose

v6.2.0 restores the clean-root rule while preserving the production clean URL system.

## Rule

Public URLs such as `/schedule/`, `/employees/`, `/agency/`, `/users/`, `/roles/`, and `/dashboard/` are routing aliases only. They should not be physical top-level folders unless a future build documents a specific technical reason.

## Root Policy

The repository root is reserved for project infrastructure and long-lived app directories:

- `assets/`
- `data/`
- `docs/`
- `pages/`
- `developer/`
- `standards/`
- `adapters/`, `repositories/`, `services/`, `api/`, `sql/` while backend prep remains in-repo
- root metadata files such as `index.html`, `_redirects`, README/changelog/release manifests

## Removed Physical Alias Folders

The following top-level alias folders were removed and replaced with rewrite rules:

- `account/`
- `admin/`
- `agency/`
- `assignments/`
- `audit/`
- `calendar/`
- `coverage/`
- `daily-board/`
- `dashboard/`
- `employees/`
- `leave/`
- `login/`
- `mandation/`
- `my-schedule/`
- `notifications/`
- `open-shifts/`
- `operations/`
- `publishing/`
- `reports/`
- `requests/`
- `roles/`
- `schedule/`
- `staffing/`
- `system/`
- `trades/`
- `users/`
- `developer/ui-catalog/`
- `developer/dashboard-reference/`
- `developer/rule-engine/`
- `developer/scheduling-engine/`

## Clean URL Strategy

Clean user-facing URLs are handled by `_redirects` rewrites. Example:

```text
/schedule/ -> /pages/workspace/builder.html 200
```

Old physical file paths remain redirect-safe:

```text
/pages/workspace/builder.html -> /schedule/ 301
```

## Next Backend Rule

When backend routing begins in v6.2+, preserve these clean public routes and map them to controller/API views rather than recreating physical root alias folders.
