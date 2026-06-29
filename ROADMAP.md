# Signal Schedule Roadmap

## Current: v6.2.0 — Backend Integration Start

Signal Schedule is moving from static preview application to long-term production architecture.

## v6.2.x

- Deploy Node + TypeScript + Fastify backend
- Connect Postgres
- Confirm Prisma migrations
- Confirm `/api/health`
- Confirm clean URL routing from the backend
- Keep temporary physical alias folders until backend routing is verified

## v6.3.0 — Real Employee + Agency Data

- Store employees in Postgres
- Store agency settings in Postgres
- Enforce roles and permissions on backend routes
- Add CSV employee import/export

## v6.4.0 — Real Schedule Persistence

- Save/load schedule drafts
- Save assignments, leave requests, trades, mandation actions, and publish status

## v6.5.0 — Live Scheduling Intelligence

- Live conflict detection
- Coverage calculations
- Qualification validation
- Leave impact checks
- Open shift recommendations

## v6.6.0 — Reports, Audit, Revision History

- Real audit trail
- Revision compare and rollback
- Reports from saved data

## v6.7.0 — Real Notifications

- Database-backed in-app notifications
- Approval/trade/leave alerts
- Email groundwork

## v6.8.0 — Scenario Planner

- What-if schedule simulation
- Coverage and overtime impact

## v6.9.0 — Production Hardening

- Security audit
- Backup/restore
- Error handling
- Deployment documentation

## v7.0.0 — Commercial Release

- Production stable scheduling platform ready for demo, onboarding, and commercialization.
