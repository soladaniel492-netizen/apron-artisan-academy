revoke execute on function public.has_role(uuid, app_role) from public, anon;
revoke execute on function public.claim_first_admin() from public, anon;
revoke execute on function public.admin_exists() from public;
grant execute on function public.admin_exists() to anon, authenticated;
grant execute on function public.has_role(uuid, app_role) to authenticated;