import type { FastifyInstance } from 'fastify';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export async function authRoutes(app: FastifyInstance) {
  app.post('/api/auth/login', async (request, reply) => {
    const parsed = LoginSchema.safeParse(request.body);
    if (!parsed.success) return reply.code(400).send({ error: 'Invalid login request.' });

    const user = await prisma.user.findUnique({
      where: { email: parsed.data.email.toLowerCase() },
      include: { agency: true, userRoles: { include: { role: true } } }
    });

    if (!user || !user.passwordHash) return reply.code(401).send({ error: 'Invalid email or password.' });

    const ok = await bcrypt.compare(parsed.data.password, user.passwordHash);
    if (!ok) return reply.code(401).send({ error: 'Invalid email or password.' });

    reply.setCookie('ss_session_preview', user.id, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: app.config.COOKIE_SECURE
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        agency: user.agency?.name ?? null,
        roles: user.userRoles.map((entry) => entry.role.name)
      }
    };
  });

  app.post('/api/auth/logout', async (_request, reply) => {
    reply.clearCookie('ss_session_preview', { path: '/' });
    return { ok: true };
  });
}
