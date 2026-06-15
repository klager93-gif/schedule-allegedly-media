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
