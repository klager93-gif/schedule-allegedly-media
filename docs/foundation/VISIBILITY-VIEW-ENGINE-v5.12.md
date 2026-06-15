# Signal Schedule v5.12 Visibility & View Engine

## Purpose

Define how users see schedule data before live authentication and database-backed visibility enforcement.

## Agency settings

- Day starts at `05:00` by default for dispatch-style operational days.
- A Schedule day may run `05:00-04:59` instead of midnight-to-midnight.
- Week starts on Sunday by default.
- Time format defaults to 24-hour.

## Calendar layers

- Employees
- Requests
- Training
- Overtime
- Coverage
- Posts
- Vacancies
- Annotations

## Filters

Users may hide or show trainees, administrators, supervisors, inactive employees, shift groups, qualifications, request types, overtime types, coverage warnings, and posts.

## Saved views

Saved views allow agencies and users to keep named combinations of filters, layers, colors, and time windows. Examples: Dispatch View, Supervisor View, Training View, Overtime View, and Coverage View.

## Future database tie-ins

- `schedule_visibility_policies`
- `schedule_visibility_groups`
- `schedule_visibility_rules`
- `schedule_view_profiles`
- `schedule_view_group_filters`

No live database changes are made in v5.12.
