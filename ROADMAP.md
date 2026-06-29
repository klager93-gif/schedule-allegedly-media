# Signal Schedule Roadmap

- v5.16.3 — Rule Engine Foundation: conflict, coverage, qualification, approval routing, and notification trigger preview.
- v5.17.0 — Scheduling Engine: wire assignment, coverage, mandation, trades, and publishing logic.


## v5.15.4 — Dashboard Reference Component Rollout

- Extracted the dashboard reference button/action styling into reusable production classes.
- Updated the working dashboard to use reference-style action buttons and build-path copy.
- Converted `/pages/calendar/schedule.html` away from the old app-shell navigation into the new dashboard shell.
- Preserved `/pages/admin/dashboard-reference.html` as the visual target and `/pages/admin/ui-catalog.html` as the implementation guide.
- Updated release/cache markers to v5.15.4 and rebuilt manifests/checksums.

## Current: v5.15.4 Working Dashboard Split

## Current: v5.15.4 Working Dashboard Split
- UI Catalog standards are now active through the app shell.
- `/index.html` remains the independent visual target/placeholder.
- Existing operational pages now normalize buttons, tables, forms, badges, surfaces, and command bars.

## Next: v5.15.4 Dashboard Polish
- Refine dashboard cards, quick actions, staffing summary, pending approvals, and today's schedule widgets.
- Convert dashboard sections to the same UI Catalog primitives.
- Tighten desktop spacing and wide-screen behavior.

## Then: v5.15.4 Navigation Enhancements
- Breadcrumbs, favorites, recently visited pages, better search, and keyboard shortcut planning.

## v5.16 Notification Center
- In-app notification center, unread badges, toasts, reminder framework, and email groundwork.

# Immediate Roadmap

## v5.15.x Foundation polish
- Review UI Component Catalog and apply component standards across remaining module pages.
- Continue navigation, route, placeholder, and metadata audits.
- Prepare v6 operational scheduling modules after the foundation is stable.

# ROADMAP

Updated for Signal Schedule v5.15.0 — UI & Foundation Standardization.

# Signal Schedule Roadmap

## Completed

- v5.1 Standalone split
- v5.2 Repository organization
- v5.3 Metadata stability
- v5.4 Registry foundation
- v5.5 Page architecture
- v5.6 Workspace foundation
- v5.7 Request foundation and navigation cleanup
- v5.8 Leave banks and data layer cleanup
- v5.9 Approval foundation, SQL audit, and UI modernization
- v5.10 Identity and login foundation
- v5.11 Agency setup wizard and sanitized demo data
- v5.12 Visibility and View Engine

## Next

- v5.13 Operations Foundation: Open Shift/VOT, notifications, dashboard widgets
- v5.14 Staffing & Assignment Foundation
- v5.15 Publishing & Data Management
- v5.16 Advanced Tools & Backend Readiness
- v6.0 Multi-User Request Engine


## v5.15.0 Dashboard & Clean Route Foundation

Adds dashboard navigation, agency branding placeholder, and clean route planning. The long-term dashboard target remains the mission-control layout with metrics, layer controls, quick actions, schedule overview, and agency branding.