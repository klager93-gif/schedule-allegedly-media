# Page Architecture & Route Registry Migration

Version: v5.12.0

Signal Schedule now keeps public HTML routes in categorized `/pages/` folders while preserving `index.html` at the repository root.

## Route policy

- `index.html` remains at root.
- Feature pages live under `/pages/<area>/`.
- Navigation uses `assets/routes.js` and `assets/navigation.js`.
- App shell resolves internal routes from the domain root to avoid nested relative-link drift.
- HTML imports use root-relative paths for shared assets.

## Validation requirement

Every release that moves a route must validate local links, JavaScript imports, footer links, route registry entries, and navigation active-state behavior.
