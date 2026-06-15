# Signal Schedule v5.14.0 — SQL Audit Snapshot

The live Postgres database currently reports **118 public tables**. This means the backend foundation is farther along than the static UI initially suggested.

## Confirmed core identity tables

- `employees`
- `users`
- `roles`
- `user_roles`
- `role_permissions`

## Confirmed approval tables

- `approval_workflows`
- `approval_workflow_steps`
- `approval_requests`
- `approval_decisions`

## Confirmed request/leave/OT tables

- `leave_requests`
- `leave_request_types`
- `request_type_settings`
- `request_reason_options`
- `schedule_request_cases`
- `schedule_request_decisions`
- `schedule_request_events`
- `schedule_request_comments`
- `schedule_request_schedule_impacts`
- `schedule_leave_bank_types`
- `schedule_leave_bank_balances`
- `schedule_leave_bank_ledger_entries`
- `schedule_leave_bank_pending_impacts`
- `open_shifts`
- `vot_requests`
- `schedule_ot_opportunities`
- `schedule_ot_volunteers`
- `schedule_ot_award_queue`

## Confirmed table inventory

- `schedule_eligibility_audit`
- `schema_migrations`
- `employees`
- `schedule_shift_trade_requests`
- `schedule_training_certifications`
- `schedule_shift_requirements`
- `benefit_banks`
- `employee_benefit_ledger_entries`
- `minimum_staffing_templates`
- `schedule_calendar_entries`
- `schedule_calendar_entry_employees`
- `schedule_calendar_events`
- `users`
- `leave_request_types`
- `user_roles`
- `roles`
- `request_type_settings`
- `leave_requests`
- `open_shifts`
- `vot_requests`
- `request_reason_options`
- `schedule_coverage_blocks`
- `schedule_seniority_lists`
- `schedule_rotation_events`
- `calendar_shortcode_categories`
- `calendar_shortcodes`
- `calendar_shortcode_audit_entries`
- `calendar_view_presets`
- `calendar_view_events`
- `employee_profile_field_policies`
- `employee_contact_methods`
- `employee_notification_preferences`
- `employee_profile_change_requests`
- `employee_timeline_events`
- `employee_timeline_visibility_rules`
- `supervisor_scope_assignments`
- `supervisor_effective_employee_cache`
- `supervisor_hierarchy_audit_events`
- `role_permissions`
- `user_role_assignments`
- `field_permission_rules`
- `permission_audit_events`
- `approval_workflows`
- `approval_workflow_steps`
- `approval_requests`
- `approval_decisions`
- `schedule_notification_channels`
- `schedule_notification_rules`
- `schedule_notification_preferences`
- `schedule_notification_queue`
- `schedule_coverage_spots`
- `schedule_daily_boards`
- `schedule_daily_board_rows`
- `schedule_assignment_records`
- `schedule_assignment_history`
- `schedule_leave_bank_types`
- `schedule_leave_bank_balances`
- `schedule_leave_bank_ledger_entries`
- `schedule_leave_bank_pending_impacts`
- `schedule_ot_opportunities`
- `schedule_ot_volunteers`
- `schedule_ot_award_queue`
- `schedule_seniority_scenarios`
- `schedule_seniority_overrides`
- `schedule_seniority_audit`
- `schedule_assignment_generation_runs`
- `schedule_assignment_generation_drafts`
- `schedule_assignment_generation_audit`
- `schedule_conflict_detection_runs`
- `schedule_conflict_detection_records`
- `schedule_conflict_detection_rules`
- `schedule_weekly_schedule_views`
- `schedule_qualification_types`
- `schedule_employee_credentials`
- `schedule_weekly_schedule_days`
- `schedule_role_qualification_requirements`
- `schedule_credential_audit_log`
- `schedule_weekly_schedule_cells`
- `schedule_visibility_policies`
- `schedule_visibility_groups`
- `schedule_visibility_rules`
- `schedule_leave_visibility_rules`
- `schedule_visibility_audit_events`
- `schedule_draft_runs`
- `schedule_draft_assignment_moves`
- `schedule_draft_publish_checks`
- `schedule_draft_audit_events`
- `schedule_forecast_runs`
- `schedule_forecast_issues`
- `schedule_forecast_actions`
- `schedule_forecast_heatmap_rollups`
- `schedule_published_versions`
- `schedule_publication_snapshots`
- `schedule_publication_events`
- `schedule_posts`
- `schedule_post_requirements`
- `schedule_post_assignments`
- `schedule_employee_preferences`
- `schedule_employee_availability`
- `schedule_employee_restrictions`
- `schedule_admin_settings`
- `schedule_sandbox_scenarios`
- `schedule_sandbox_events`
- `schedule_view_profiles`
- `schedule_view_audit`
- `schedule_employee_portal_preferences`
- `schedule_view_group_filters`
- `schedule_saved_schedules`
- `schedule_templates`
- `schedule_import_jobs`
- `schedule_export_jobs`
- `schedule_employee_profile_extras`
- `schedule_employee_notification_preferences`
- `schedule_request_cases`
- `schedule_request_decisions`
- `schedule_request_events`
- `schedule_request_comments`
- `schedule_request_schedule_impacts`

## v5.9 conclusion

The next backend work should not create duplicate tables blindly. It should map UI/service needs to the existing table inventory first, then fill only true gaps.
