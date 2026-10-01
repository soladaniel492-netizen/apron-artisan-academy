create type public.app_role as enum ('admin', 'user');
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users see own roles" on public.user_roles for select to authenticated using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create or replace function public.admin_exists()
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where role = 'admin') $$;

create or replace function public.claim_first_admin()
returns boolean language plpgsql security definer set search_path = public
as $$
begin
  if auth.uid() is null then return false; end if;
  perform pg_advisory_xact_lock(4242);
  if exists (select 1 from public.user_roles where role = 'admin') then return false; end if;
  insert into public.user_roles (user_id, role) values (auth.uid(), 'admin');
  return true;
end $$;
grant execute on function public.admin_exists() to anon, authenticated;
grant execute on function public.claim_first_admin() to authenticated;

create table public.site_media (
  original_url text primary key,
  url text not null,
  updated_at timestamptz not null default now()
);
grant select on public.site_media to anon, authenticated;
grant insert, update, delete on public.site_media to authenticated;
grant all on public.site_media to service_role;
alter table public.site_media enable row level security;
create policy "Anyone can view media" on public.site_media for select using (true);
create policy "Admins manage media" on public.site_media for all to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

create table public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price text not null default '',
  category text not null default 'Aprons',
  detail text not null default '',
  img text not null default '',
  sort int not null default 0,
  created_at timestamptz not null default now()
);
grant select on public.products to anon, authenticated;
grant insert, update, delete on public.products to authenticated;
grant all on public.products to service_role;
alter table public.products enable row level security;
create policy "Anyone can view products" on public.products for select using (true);
create policy "Admins manage products" on public.products for all to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

create table public.price_items (
  id uuid primary key default gen_random_uuid(),
  group_name text not null,
  name text not null,
  price text not null default '',
  sort int not null default 0
);
grant select on public.price_items to anon, authenticated;
grant insert, update, delete on public.price_items to authenticated;
grant all on public.price_items to service_role;
alter table public.price_items enable row level security;
create policy "Anyone can view prices" on public.price_items for select using (true);
create policy "Admins manage prices" on public.price_items for all to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

insert into public.products (name, price, category, detail, img, sort) values
('Personalised Bib Apron','₦28,000','Aprons','Tan cotton twill, adjustable straps with metal clips, embroidered with your name.','/__l5e/assets-v1/PERSONALISED',1);

create policy "Public read site-media files" on storage.objects for select using (bucket_id = 'site-media');
create policy "Admins upload site-media" on storage.objects for insert to authenticated with check (bucket_id = 'site-media' and public.has_role(auth.uid(), 'admin'));
create policy "Admins update site-media" on storage.objects for update to authenticated using (bucket_id = 'site-media' and public.has_role(auth.uid(), 'admin'));
create policy "Admins delete site-media" on storage.objects for delete to authenticated using (bucket_id = 'site-media' and public.has_role(auth.uid(), 'admin'));