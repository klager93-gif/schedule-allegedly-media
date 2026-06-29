# Signal Schedule v6.2.0 — Backend Integration Start

Signal Schedule v6.2.0 starts the long-term backend architecture with Node, TypeScript, Fastify, Postgres, and Prisma.

## Server required

This is the first release that introduces backend/database requirements. The static frontend still exists, but production login, roles, users, agency data, and server-side routing now have a backend foundation.

## Added

- `server/` backend application
- Fastify API foundation
- Prisma Postgres schema
- Auth/login API foundation
- Agencies/users/roles API endpoints
- Server-side clean URL route map
- Dockerfile for app container
- `docker-compose.example.yml`
- Coolify Node/Postgres setup documentation

## Important

Physical alias folders remain temporarily for the current static deployment. After the Node app is deployed and backend routing is confirmed, remove those temporary alias folders in a later cleanup release.
