import path from 'node:path';
import type { FastifyInstance } from 'fastify';
import fastifyStatic from '@fastify/static';

const rootDir = path.resolve(process.cwd(), '..');

const routeMap: Record<string, string> = {
  '/': 'index.html',
  '/dashboard/': 'index.html',
  '/calendar/': 'pages/calendar/schedule.html',
  '/schedule/': 'pages/workspace/builder.html',
  '/employees/': 'pages/people/employees.html',
  '/leave/': 'pages/requests/leave-banks.html',
  '/requests/': 'pages/requests/approvals.html',
  '/notifications/': 'pages/rules/notifications.html',
  '/reports/': 'pages/reports/reports.html',
  '/system/': 'pages/admin/system-health.html',
  '/agency/': 'pages/identity/agency.html',
  '/users/': 'pages/identity/users.html',
  '/roles/': 'pages/identity/roles.html',
  '/trades/': 'pages/scheduling/trades.html',
  '/mandation/': 'pages/scheduling/mandation.html',
  '/publishing/': 'pages/operations/publishing.html',
  '/audit/': 'pages/operations/audit.html',
  '/developer/ui-catalog/': 'pages/admin/ui-catalog.html',
  '/developer/dashboard-reference/': 'pages/admin/dashboard-reference.html',
  '/developer/rule-engine/': 'pages/rules/rule-engine.html',
  '/developer/scheduling-engine/': 'pages/scheduling/scheduling-engine.html'
};

export async function staticRoutes(app: FastifyInstance) {
  await app.register(fastifyStatic, {
    root: rootDir,
    decorateReply: false
  });

  Object.entries(routeMap).forEach(([route, file]) => {
    app.get(route, async (_request, reply) => reply.sendFile(file));
  });
}
