import Fastify from 'fastify';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import formbody from '@fastify/formbody';
import helmet from '@fastify/helmet';
import { env } from './env.js';
import { healthRoutes } from './routes/health.js';
import { authRoutes } from './routes/auth.js';
import { agencyRoutes } from './routes/agencies.js';
import { userRoutes } from './routes/users.js';
import { roleRoutes } from './routes/roles.js';
import { staticRoutes } from './routes/static.js';

declare module 'fastify' {
  interface FastifyInstance {
    config: typeof env;
  }
}

const app = Fastify({ logger: true });
app.decorate('config', env);

await app.register(helmet, { contentSecurityPolicy: false });
await app.register(cors, { origin: env.APP_ORIGIN, credentials: true });
await app.register(cookie, { secret: env.SESSION_SECRET });
await app.register(formbody);

await app.register(healthRoutes);
await app.register(authRoutes);
await app.register(agencyRoutes);
await app.register(userRoutes);
await app.register(roleRoutes);
await app.register(staticRoutes);

await app.listen({ host: '0.0.0.0', port: env.PORT });
