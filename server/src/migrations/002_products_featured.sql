alter table products
  add column if not exists is_featured boolean not null default false;

create index if not exists products_featured_idx
  on products (is_featured, is_published, sort_order);
