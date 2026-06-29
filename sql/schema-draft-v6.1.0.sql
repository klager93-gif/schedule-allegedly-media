-- Signal Schedule v6.1.0 schema draft only.
-- Do not apply until v6.2 backend/database integration is approved.

create table agencies (
  id varchar(64) primary key,
  name varchar(255) not null,
  slug varchar(120) not null unique,
  timezone varchar(120) not null default 'America/Chicago',
  work_week_start varchar(16) not null default 'monday',
  status varchar(32) not null default 'active',
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp
);

create table users (
  id varchar(64) primary key,
  agency_id varchar(64) not null,
  employee_id varchar(64),
  email varchar(255) not null unique,
  display_name varchar(255) not null,
  password_hash varchar(255),
  status varchar(32) not null default 'active',
  last_login_at timestamp null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp
);

create table roles (
  id varchar(64) primary key,
  agency_id varchar(64),
  role_key varchar(120) not null,
  name varchar(255) not null,
  description text,
  scope varchar(64) not null default 'agency'
);

create table user_roles (
  user_id varchar(64) not null,
  role_id varchar(64) not null,
  primary key (user_id, role_id)
);

create table role_permissions (
  role_id varchar(64) not null,
  permission_key varchar(160) not null,
  allowed boolean not null default true,
  primary key (role_id, permission_key)
);

create table employees (
  id varchar(64) primary key,
  agency_id varchar(64) not null,
  employee_number varchar(64),
  first_name varchar(120) not null,
  last_name varchar(120) not null,
  position varchar(160),
  supervisor_id varchar(64),
  seniority_date date,
  status varchar(32) not null default 'active',
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp
);

create table schedule_assignments (
  id varchar(64) primary key,
  agency_id varchar(64) not null,
  schedule_id varchar(64) not null,
  shift_id varchar(64) not null,
  employee_id varchar(64) not null,
  assignment_status varchar(32) not null default 'draft',
  source varchar(64) not null default 'manual',
  created_by varchar(64),
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp
);

create table audit_logs (
  id varchar(64) primary key,
  agency_id varchar(64) not null,
  actor_user_id varchar(64),
  action varchar(160) not null,
  entity_type varchar(120) not null,
  entity_id varchar(64),
  before_json json,
  after_json json,
  created_at timestamp default current_timestamp
);
