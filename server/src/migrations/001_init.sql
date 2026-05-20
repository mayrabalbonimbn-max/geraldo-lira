create extension if not exists pgcrypto;

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamp not null default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  legacy_id text unique,
  name text not null,
  slug text unique,
  description text,
  category text,
  "filter" text,
  image_url text,
  image_path text,
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

create table if not exists admin_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  password_hash text not null,
  created_at timestamp not null default now()
);

create index if not exists products_public_idx
  on products (is_published, sort_order, created_at);

create index if not exists products_slug_idx
  on products (slug);


create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_products_updated_at on products;
create trigger set_products_updated_at
before update on products
for each row execute function set_updated_at();
