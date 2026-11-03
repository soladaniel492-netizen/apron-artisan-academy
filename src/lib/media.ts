import { useQuery } from "@tanstack/react-query";

import { supabase } from "@/integrations/supabase/client";
import { SITE_IMAGES } from "@/data/site-images";
import { catalogue, type CatalogueItem } from "@/data/catalogue";
import { chefWearsPricing, type PriceGroup } from "@/data/pricing";

/** Every picture and video bundled with the site — all are replaceable from the admin. */
export const siteAssets = SITE_IMAGES;

export const mediaQueryKey = ["site_media"];

export function useMediaMap() {
  return useQuery({
    queryKey: mediaQueryKey,
    queryFn: async () => {
      const { data, error } = await supabase.from("site_media").select("original_url, url");
      if (error) throw error;
      return Object.fromEntries((data ?? []).map((r) => [r.original_url, r.url])) as Record<
        string,
        string
      >;
    },
    staleTime: 60_000,
  });
}

/** Returns a resolver: pass the original picture URL, get the admin's replacement if any. */
export function useMedia() {
  const { data } = useMediaMap();
  return (url: string) => data?.[url] ?? url;
}

export function useProducts(): CatalogueItem[] {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select("*").order("sort");
      if (error) throw error;
      return data;
    },
  });
  return data && data.length
    ? data.map((item) => ({
        ...item,
        name: withoutDashes(item.name),
        category: withoutDashes(item.category),
        detail: withoutDashes(item.detail),
      }))
    : catalogue;
}

function withoutDashes(text: string) {
  return text.replace(/\s*[‐‑‒–—-]\s*/g, " ").replace(/\s+/g, " ").trim();
}

export function usePriceGroups(): PriceGroup[] {
  const { data } = useQuery({
    queryKey: ["price_items"],
    queryFn: async () => {
      const { data, error } = await supabase.from("price_items").select("*").order("sort");
      if (error) throw error;
      return data;
    },
  });
  if (!data || !data.length) return chefWearsPricing;
  const groups: PriceGroup[] = [];
  for (const row of data) {
    const group = withoutDashes(row.group_name);
    let g = groups.find((x) => x.group === group);
    if (!g) groups.push((g = { group, items: [] }));
    g.items.push({ name: withoutDashes(row.name), price: row.price });
  }
  return groups;
}

/** Uploads a file to private storage and returns a long-lived link. */
export async function uploadMedia(file: File) {
  const path = `${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
  const { error } = await supabase.storage.from("site-media").upload(path, file, {
    contentType: file.type,
  });
  if (error) throw error;
  const { data, error: e2 } = await supabase.storage
    .from("site-media")
    .createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
  if (e2 || !data) throw e2 ?? new Error("Could not create link");
  return data.signedUrl;
}
