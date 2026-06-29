import type { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma.js';

export async function userRoutes(app: FastifyInstance) {
  app.get('/api/users', async () => {
    const users = await prisma.user.findMany({
      orderBy: { name: 'asc' },
      include: { agency: true, userRoles: { include: { role: true } } }
    });

    return {
      users: users.map((user) => ({
        id: user.id,
        email: user.email,
        name: user.name,
        status: user.status,
        agency: user.agency?.name ?? null,
        roles: user.userRoles.map((entry) => entry.role.name)
      }))
    };
  });
}
