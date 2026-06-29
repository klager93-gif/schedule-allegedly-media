# Server Routing Roadmap

Signal Schedule currently uses lightweight physical alias folders to support clean public URLs on Coolify/Nginx static hosting.

## Current temporary approach

Clean URLs such as `/dashboard/`, `/schedule/`, `/calendar/`, `/employees/`, `/leave/`, `/users/`, and `/roles/` are backed by physical `index.html` alias files.

This prevents 404s on static hosting where `_redirects` is not honored.

## Target approach

When backend work begins, replace physical alias folders with real server/app routing.

Options:

1. Nginx rewrite rules in Coolify
2. PHP router/controller
3. Node/Express router
4. Framework router if the app is migrated later

## Planned version

Server-side clean URL routing belongs in v6.2.x or the first backend integration build that introduces PHP/Node + database infrastructure.

## Requirement

Users should continue seeing clean URLs. Physical source files may remain organized under `pages/`, `developer/`, `assets/`, `data/`, etc.
