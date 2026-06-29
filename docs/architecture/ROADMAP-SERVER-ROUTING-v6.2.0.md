# Server-Side Routing Roadmap

Signal Schedule temporarily restored physical clean URL folders in v6.2.0 because the existing static Coolify/Nginx deployment did not honor `_redirects`.

v6.2.0 introduces a Fastify server route map. Once the Node backend is deployed, the app should serve clean URLs directly from the backend:

- `/dashboard/` -> `index.html`
- `/schedule/` -> `pages/workspace/builder.html`
- `/calendar/` -> `pages/calendar/schedule.html`
- `/employees/` -> `pages/people/employees.html`
- `/users/` -> `pages/identity/users.html`
- `/roles/` -> `pages/identity/roles.html`

After confirming backend routing works, remove the temporary physical alias folders in a later cleanup release.
