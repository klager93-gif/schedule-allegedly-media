# STANDARDS

Updated for Signal Schedule v5.15.0 — UI & Foundation Standardization.

# Signal Schedule Standards

## Release validation

Every release validates version metadata, footer/header metadata, local links, JavaScript imports, route registry targets, macOS metadata, and manifests.

## Footer and metadata rule

Footer version, header version, homepage metadata, cache-busting values, LATEST_RELEASE, README, changelog entries, public/admin changelogs, app-shell metadata, and shared components must be checked before packaging.

## Demo privacy rule

Do not use real user or real customer identifying information in demo UI/data unless explicitly requested. Use fictional sample agencies and users.

## Database naming contract

Core identity tables are unprefixed: employees, users, roles, user_roles, role_permissions. Schedule module tables are schedule_* prefixed.

## View engine rule

Agency calendar day-start time, role visibility, saved views, filters, layers, and coloring are first-class settings/foundations, not scattered per-page assumptions.


## Clean Route Standard

Do not switch technologies just to hide file extensions. Clean routes should be delivered through routing/rewrite architecture while preserving stable route registry entries during static foundation builds.

## v5.15.0 UI Component Catalog Rule

Use `/pages/admin/ui-catalog.html` as the Schedule-only reference for reusable page headers, action bars, filters, buttons, cards, forms, tables, badges, alerts, empty states, and modal/dialog patterns. Do not borrow UI or CSS patterns from unrelated projects unless explicitly approved.

## Root Cleanliness + Clean URL Architecture

Public clean URLs are routing aliases, not physical top-level folders. Keep app pages under `/pages/` and use `_redirects` or backend routing to expose clean URLs.
