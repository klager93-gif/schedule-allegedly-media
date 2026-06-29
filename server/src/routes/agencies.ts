import type { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma.js';

export async function agencyRoutes(app: FastifyInstance) {
  app.get('/api/agencies', async () => {
    const agencies = await prisma.agency.findMany({ orderBy: { name: 'asc' } });
    return { agencies };
  });
}
