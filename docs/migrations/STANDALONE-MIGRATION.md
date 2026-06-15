# Signal Schedule Standalone Migration

This package was created from `signal-schedule-v5.1.0-full-replacement.zip`.

## Migration action

The contents of the former `/schedule/` folder have been moved to the repository root for the standalone `schedule-allegedly-media` repo.

## Root files recreated from tools-allegedly-media

The following root-level support files were copied into the standalone package because they are safe repo/development dependencies:

- `.gitattributes`
- `.gitignore`
- `STANDARDS.md`
- `/standards/`
- `/assets/icons/`

The old Signal Labs root `/assets/global.css`, `/assets/global.js`, and shared header/footer components were not copied because Signal Schedule v5.1.0 uses its own `app-shell.css`, `app-shell.js`, and Schedule-specific navigation/footer.

## Code patch

`app-shell.js` was patched so path detection works when Signal Schedule is deployed at the domain root, such as:

- `/index.html`
- `/employee/index.html`

It remains backward-compatible with the older `/schedule/` path form.
