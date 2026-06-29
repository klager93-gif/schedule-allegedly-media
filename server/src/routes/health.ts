import type { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma.js';

export async function healthRoutes(app: FastifyInstance) {
  app.get('/api/health', async () => {
    let database = 'unknown';
    try {
      await prisma.$queryRaw`SELECT 1`;
      database = 'ok';
    } catch {
      database = 'unavailable';
    }

    return {
      app: 'Signal Schedule',
      version: 'v6.2.0',
      status: 'ok',
      database
    };
  });
}
