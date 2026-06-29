# Signal Schedule v6.2.0 — Node + TypeScript + Postgres Foundation

This release starts the long-term backend architecture for Signal Schedule.

## Stack

- Node.js 22
- TypeScript
- Fastify
- Postgres 16
- Prisma ORM
- Cookie/session-ready auth foundation

## Added backend folders

- `server/src/` — Fastify application source
- `server/prisma/schema.prisma` — initial production database schema
- `server/scripts/seed.ts` — demo seed data
- `server/.env.example` — required environment variables
- `server/Dockerfile` — production container build
- `docker-compose.example.yml` — local/reference app + Postgres setup

## Current backend scope

This is an integration foundation, not the final security implementation.

Included:

- `/api/health`
- `/api/auth/login`
- `/api/auth/logout`
- `/api/agencies`
- `/api/users`
- `/api/roles`
- server-side clean URL route map
- Prisma models for agencies, users, roles, permissions, employees, schedules, assignments, leave, revisions, and audit logs

## Server routing roadmap

Physical alias folders remain temporarily for the current static Coolify deployment. Once the Node app is deployed, clean URL routing should move into the Fastify route map and the alias folders can be removed again.
