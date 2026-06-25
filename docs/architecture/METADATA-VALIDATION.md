# Metadata Validation

Signal Schedule v5.14.3 adds a small release metadata layer to reduce footer/header/version drift.

## Source of truth

Client-side display metadata lives in:

```text
assets/release-metadata.js
```

The app shell and footer should read from this object when available.

## Required checks before packaging

- Footer version matches release version.
- App toolbar/header version matches release version.
- Homepage visible version matches release version.
- Cache-busting values match release version.
- README current release matches release version.
- CHANGELOG/PUBLIC_CHANGELOG/ADMIN_CHANGELOG top entries match release version.
- `app-shell.js` fallback version matches release version.
- `components/footer.js` fallback version matches release version.

## Policy

Cosmetic metadata drift does not require an emergency hotfix, but it must be corrected in the next natural release.
