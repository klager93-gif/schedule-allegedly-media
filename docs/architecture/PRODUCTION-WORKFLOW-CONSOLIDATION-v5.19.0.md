# Production Workflow Consolidation — v6.1.1

Signal Schedule v6.1.1 moves the application from feature-preview pages toward production workflows.

## Production workflows

- `/schedule/` — Schedule Builder
- `/publishing/` — draft, publish, archive, compare, rollback
- `/audit/` — publishing and operational audit trail
- `/leave/` — leave management and coverage impact
- `/requests/` — approvals and request routing
- `/trades/` — shift trade workflow
- `/mandation/` — mandate workflow

## Developer tools

The Rule Engine and Scheduling Engine pages remain available for development and validation, but they are no longer normal user navigation destinations.

- `/developer/rule-engine/`
- `/developer/scheduling-engine/`
- `/developer/ui-catalog/`
- `/developer/dashboard-reference/`

## Production IA rule

Primary navigation should describe scheduler workflows, not implementation internals.
