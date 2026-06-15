# Data Layer Audit v5.12.0

## Fixed/Improved

- Data Tools no longer displays alarming failed-fetch boxes when optional preview JSON is unavailable.
- `assets/data-loader.js` now includes `loadJsonOrFallback()` and `renderDataNotice()` helpers.
- Foundation pages can render neutral fallback states instead of raw JSON/HTML parsing errors.
- Leave bank preview data now includes transaction history and adjustment entry structure.

## Validation expectations

- All local `/data/*.json` references should point to files that exist, or use graceful fallback.
- JSON loaders should check HTTP status and content type before parsing.
- Missing optional preview data should be shown as an empty/foundation state, not a user-facing error.
