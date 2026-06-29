# Signal Schedule v6.2.0 Data Contracts

## Purpose

This document defines the first production-facing data contract set before backend integration.

## Core Entities

### agencies
- id
- name
- slug
- timezone
- work_week_start
- status
- created_at
- updated_at

### users
- id
- agency_id
- employee_id nullable
- email
- display_name
- status
- last_login_at nullable
- created_at
- updated_at

### roles
- id
- agency_id nullable for system roles
- key
- name
- description
- scope

### role_permissions
- role_id
- permission_key
- allowed

### employees
- id
- agency_id
- employee_number
- first_name
- last_name
- position
- supervisor_id nullable
- seniority_date
- status

### schedule_shifts
- id
- agency_id
- name
- starts_at
- ends_at
- minimum_staffing
- required_qualifications

### schedule_assignments
- id
- agency_id
- schedule_id
- shift_id
- employee_id
- assignment_status
- source
- created_by

### schedule_leave_requests
- id
- agency_id
- employee_id
- leave_bank_id
- starts_at
- ends_at
- status
- requested_by
- approved_by nullable

### schedule_shift_trades
- id
- agency_id
- offered_by_employee_id
- accepted_by_employee_id nullable
- source_assignment_id
- target_assignment_id nullable
- status
- supervisor_approval_status

### schedule_mandation_actions
- id
- agency_id
- employee_id
- shift_id
- reason
- status
- override_by nullable

### schedule_publications
- id
- agency_id
- schedule_id
- version_label
- status
- published_by nullable
- published_at nullable

### audit_logs
- id
- agency_id
- actor_user_id
- action
- entity_type
- entity_id
- before_json
- after_json
- created_at

## Contract Notes

- Core identity tables use unprefixed names where previously requested: `employees`, `users`, `roles`, `user_roles`, `role_permissions`.
- Scheduling module tables use the `schedule_` prefix.
- Every agency-owned record must include `agency_id`.
- Preview JSON can remain in `/data/` until v6.2 backend integration begins.
