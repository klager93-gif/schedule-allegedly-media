# Validation Report — Signal Schedule v5.8.0

## Result

ISSUES FOUND

## Checks

- macOS metadata check
- local HTML href/src check
- JavaScript import check
- route registry target check
- `/data/*.json` reference check
- root HTML route check
- footer/header/homepage metadata check
- data fallback rule review

## Notes

- Data Tools now renders a neutral data-ready/fallback card instead of a scary failed-fetch card.
- Leave Banks includes transaction history and adjustment-entry foundation data.
- No live database changes are required.

## Issues

- Missing href target in index.html: /pages/pages/employee/index.html
- Missing JS import in api/coolify/server.js: node:http
- Missing JS import in api/coolify/server.js: node:fs/promises
- Missing JS import in api/coolify/server.js: node:url
- Missing JS import in api/coolify/server.js: node:path
