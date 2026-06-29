# Coolify Setup — Signal Schedule v6.2.0

v6.2.0 is the first build that introduces the long-term backend stack.

## Required services

- Signal Schedule app container from this repository
- Postgres database service

## App build settings

Use the Dockerfile at:

```text
server/Dockerfile
```

Expose port:

```text
3000
```

## Environment variables

```text
NODE_ENV=production
PORT=3000
APP_ORIGIN=https://schedule.allegedly-media.com
DATABASE_URL=postgresql://signal_schedule:<password>@<postgres-host>:5432/signal_schedule?schema=public
SESSION_SECRET=<long random secret>
COOKIE_SECURE=true
```

## Database

Create a Postgres database named:

```text
signal_schedule
```

Recommended user:

```text
signal_schedule
```

## First deployment behavior

The container command runs:

```text
npm run prisma:migrate && npm start
```

That applies committed Prisma migrations once migrations exist. During the first backend setup, run the initial migration/seed manually or through Coolify's terminal after the database URL is confirmed.

## Temporary routing note

The repository still includes lightweight clean URL alias folders because the current static deployment does not honor `_redirects`. After the Node app is active, server-side routing can serve clean URLs directly and those folders can be removed in a follow-up cleanup.
