create extension if not exists pgcrypto;

create table if not exists organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type text not null check (type in ('network','nonprofit','municipality','care_provider','private_provider')),
  region text,
  brand_color text default '#0a6ed1',
  created_at timestamptz not null default now()
);

create table if not exists locations (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  name text not null,
  city text,
  type text,
  created_at timestamptz not null default now()
);

create table if not exists activities (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete set null,
  location_id uuid references locations(id) on delete set null,
  title text not null,
  category text,
  description text,
  venue text,
  city text,
  starts_at timestamptz,
  ends_at timestamptz,
  capacity integer not null default 0,
  price_cents integer not null default 0,
  status text not null default 'draft' check (status in ('draft','published','full','completed','cancelled')),
  pool_scope text default 'private' check (pool_scope in ('private','organization','regional')),
  accessibility jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists registrations (
  id uuid primary key default gen_random_uuid(),
  activity_id uuid not null references activities(id) on delete cascade,
  organization_id uuid references organizations(id) on delete set null,
  location_id uuid references locations(id) on delete set null,
  participant_name text not null,
  phone text,
  email text,
  support_needs text,
  status text not null default 'requested' check (status in ('requested','confirmed','waitlist','cancelled')),
  consent_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  organization text,
  role text,
  message text,
  source text default 'landing',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table organizations enable row level security;
alter table locations enable row level security;
alter table activities enable row level security;
alter table registrations enable row level security;
alter table leads enable row level security;

create policy if not exists "public can create landing leads" on leads for insert with check (true);
create policy if not exists "service role can manage leads" on leads using (auth.role() = 'service_role') with check (auth.role() = 'service_role');
