# Registry Foundation

Version: v5.15.0
Date: 2026-06-15

Signal Schedule now uses a client-side registry layer for shared release and navigation behavior.

## Registries

- `assets/release-metadata.js` — product version, status, release name, domain, and cache key.
- `assets/routes.js` — stable route keys mapped to current root-level HTML routes.
- `assets/navigation.js` — connected navigation groups and labels.
- `assets/config.js` — default agency/deployment configuration before persistence is wired.
- `assets/features.js` — foundation-era feature flags.
- `assets/roles.js` — employee/supervisor/scheduler/admin role vocabulary.
- `assets/status.js` — shared module status labels.

## Rule

Future releases should update the registry first when changing shared navigation, metadata, roles, feature flags, or default configuration.

## Route caution

HTML files remain at repo root in v5.15.0. Page moves are intentionally deferred to avoid route drift during the foundation era.
