-- Signal Schedule v5.9.0 Leave Banks Foundation
-- Preview schema draft only. Do not apply to production until backend migration plan is approved.

create table if not exists schedule_leave_banks (
  id text primary key,
  agency_id text not null,
  code text not null,
  name text not null,
  unit text not null default 'hours',
  accrual_rule jsonb not null default '{}'::jsonb,
  allow_negative boolean not null default false,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists schedule_leave_balances (
  id text primary key,
  agency_id text not null,
  employee_id text not null,
  bank_id text not null references schedule_leave_banks(id),
  earned_minutes integer not null default 0,
  used_minutes integer not null default 0,
  pending_minutes integer not null default 0,
  adjusted_minutes integer not null default 0,
  remaining_minutes integer not null default 0,
  as_of date not null,
  updated_at timestamptz not null default now()
);

create table if not exists schedule_leave_transactions (
  id text primary key,
  agency_id text not null,
  employee_id text not null,
  bank_id text not null references schedule_leave_banks(id),
  request_id text,
  transaction_type text not null,
  minutes integer not null,
  reason text not null,
  entered_by text not null,
  effective_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
