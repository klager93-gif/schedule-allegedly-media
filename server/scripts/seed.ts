import bcrypt from 'bcryptjs';
import { prisma } from '../src/lib/prisma.js';

const permissions = [
  'dashboard:view',
  'schedule:view',
  'schedule:edit',
  'schedule:publish',
  'employees:view',
  'employees:edit',
  'leave:approve',
  'trades:approve',
  'admin:manage_users',
  'admin:manage_roles',
  'audit:view'
];

async function main() {
  const agency = await prisma.agency.upsert({
    where: { slug: 'demo-agency' },
    update: {},
    create: { name: 'Demo Dispatch Center', slug: 'demo-agency', timezone: 'America/Chicago' }
  });

  for (const key of permissions) {
    await prisma.permission.upsert({ where: { key }, update: {}, create: { key } });
  }

  const adminRole = await prisma.role.upsert({
    where: { name: 'Administrator' },
    update: {},
    create: { name: 'Administrator', description: 'Full system access.' }
  });

  const allPermissions = await prisma.permission.findMany();
  for (const permission of allPermissions) {
    await prisma.rolePermission.upsert({
      where: { roleId_permissionId: { roleId: adminRole.id, permissionId: permission.id } },
      update: {},
      create: { roleId: adminRole.id, permissionId: permission.id }
    });
  }

  const passwordHash = await bcrypt.hash('ChangeMe123!', 12);
  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: { passwordHash, status: 'active', agencyId: agency.id },
    create: { agencyId: agency.id, email: 'admin@example.com', name: 'Demo Admin', passwordHash, status: 'active' }
  });

  await prisma.userRole.upsert({
    where: { userId_roleId: { userId: user.id, roleId: adminRole.id } },
    update: {},
    create: { userId: user.id, roleId: adminRole.id }
  });

  console.log('Seed complete. Demo login: admin@example.com / ChangeMe123!');
}

main().finally(async () => prisma.$disconnect());
