import type { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma.js';

export async function roleRoutes(app: FastifyInstance) {
  app.get('/api/roles', async () => {
    const roles = await prisma.role.findMany({
      orderBy: { name: 'asc' },
      include: { rolePermissions: { include: { permission: true } } }
    });

    return {
      roles: roles.map((role) => ({
        id: role.id,
        name: role.name,
        description: role.description,
        permissions: role.rolePermissions.map((entry) => entry.permission.key)
      }))
    };
  });
}
