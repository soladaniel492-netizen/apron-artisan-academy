import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { Upload, Trash2, RotateCcw, Plus, LogOut } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { siteAssets, useMediaMap, mediaQueryKey, uploadMedia } from "@/lib/media";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin | Chef Store" },
      { name: "description", content: "Manage Chef Store pictures, products and prices." },
      { property: "og:title", content: "Admin | Chef Store" },
      { property: "og:description", content: "Chef Store admin dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const { user } = Route.useRouteContext();
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [tab, setTab] = useState<"pictures" | "products" | "prices">("pictures");

  const roleQ = useQuery({
    queryKey: ["is_admin", user.id],
    queryFn: async () => {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin");
      const { data: exists } = await supabase.rpc("admin_exists");
      return { isAdmin: (data ?? []).length > 0, adminExists: !!exists };
    },
  });

  const signOut = async () => {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  if (roleQ.isLoading) return <Shell onSignOut={signOut}>Loading…</Shell>;

  if (!roleQ.data?.isAdmin) {
    return (
      <Shell onSignOut={signOut}>
        {roleQ.data?.adminExists ? (
          <p>This account doesn't have admin access.</p>
        ) : (
          <div>
            <p>No admin has been set up yet. Make this account the site owner?</p>
            <button
              className="mt-4 rounded-md bg-primary px-6 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase"
              onClick={async () => {
                const { data, error } = await supabase.rpc("claim_first_admin");
                if (error || !data) toast.error("Could not claim admin access");
                else {
                  toast.success("You are now the admin");
                  roleQ.refetch();
                }
              }}
            >
              Become admin
            </button>
          </div>
        )}
      </Shell>
    );
  }

  return (
    <Shell onSignOut={signOut}>
      <div className="mb-8 flex flex-wrap gap-2">
        {(["pictures", "products", "prices"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-5 py-2 text-xs tracking-[0.2em] uppercase ${
              tab === t ? "bg-primary text-primary-foreground" : "bg-secondary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "pictures" && <PicturesTab />}
      {tab === "products" && <ProductsTab />}
      {tab === "prices" && <PricesTab />}
    </Shell>
  );
}

function Shell({ children, onSignOut }: { children: React.ReactNode; onSignOut: () => void }) {
  return (
    <main className="min-h-screen bg-background">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <Link to="/" className="font-display text-2xl font-bold">
          Chef Store <span className="text-sm text-primary">Admin</span>
        </Link>
        <button onClick={onSignOut} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </header>
      <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
    </main>
  );
}

function UploadButton({ onFile, label = "Upload new", accept = "image/*,video/*" }: { onFile: (f: File) => Promise<void>; label?: string; accept?: string }) {
  const [busy, setBusy] = useState(false);
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-teal-deep px-3 py-2 text-xs text-clay-foreground">
      <Upload className="h-4 w-4" />
      {busy ? "Uploading…" : label}
      <input
        type="file"
        accept={accept}
        className="hidden"
        disabled={busy}
        onChange={async (e) => {
          const f = e.target.files?.[0];
          e.target.value = "";
          if (!f) return;
          setBusy(true);
          try {
            await onFile(f);
            toast.success("Saved");
          } catch (err) {
            toast.error(err instanceof Error ? err.message : "Upload failed");
          } finally {
            setBusy(false);
          }
        }}
      />
    </label>
  );
}

function Preview({ url, type }: { url: string; type: string }) {
  return type.startsWith("video") ? (
    <video src={url} muted className="h-48 w-full object-cover" />
  ) : (
    <img src={url} alt="" className="h-48 w-full object-cover" />
  );
}

function PicturesTab() {
  const qc = useQueryClient();
  const { data: map = {} } = useMediaMap();
  return (
    <div>
      <p className="mb-6 text-sm text-muted-foreground">
        Every picture and video on the website. Upload a new file to replace it everywhere it appears.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {siteAssets.map((a) => {
          const current = map[a.url];
          return (
            <div key={a.key} className="overflow-hidden rounded-lg border border-border bg-card">
              <Preview url={current ?? a.url} type={a.type} />
              <div className="space-y-2 p-3">
                <p className="truncate text-xs font-medium">{a.key.replace(/-/g, " ")}</p>
                {current && <p className="text-[10px] text-primary uppercase">Replaced</p>}
                <div className="flex flex-wrap gap-2">
                  <UploadButton
                    accept={a.type.startsWith("video") ? "video/*" : "image/*"}
                    onFile={async (f) => {
                      const url = await uploadMedia(f);
                      const { error } = await supabase
                        .from("site_media")
                        .upsert({ original_url: a.url, url, updated_at: new Date().toISOString() });
                      if (error) throw error;
                      qc.invalidateQueries({ queryKey: mediaQueryKey });
                    }}
                  />
                  {current && (
                    <button
                      className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-2 text-xs"
                      onClick={async () => {
                        await supabase.from("site_media").delete().eq("original_url", a.url);
                        qc.invalidateQueries({ queryKey: mediaQueryKey });
                      }}
                    >
                      <RotateCcw className="h-3 w-3" /> Restore
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type ProductRow = { id: string; name: string; price: string; category: string; detail: string; img: string; sort: number };

function ProductsTab() {
  const qc = useQueryClient();
  const { data = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => ((await supabase.from("products").select("*").order("sort")).data ?? []).map((p) => ({
      ...p,
      name: p.name.replace(/\s*[‐‑‒–—-]\s*/g, " "),
      category: p.category.replace(/\s*[‐‑‒–—-]\s*/g, " "),
      detail: p.detail.replace(/\s*[‐‑‒–—-]\s*/g, " "),
    })),
  });
  const refresh = () => qc.invalidateQueries({ queryKey: ["products"] });

  const save = async (p: ProductRow) => {
    const { error } = await supabase.from("products").update(p).eq("id", p.id);
    if (error) toast.error(error.message);
    else {
      toast.success("Product saved");
      refresh();
    }
  };

  return (
    <div className="space-y-5">
      <button
        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs text-primary-foreground uppercase tracking-[0.2em]"
        onClick={async () => {
          await supabase.from("products").insert({ name: "New product", sort: data.length + 1 });
          refresh();
        }}
      >
        <Plus className="h-4 w-4" /> Add product
      </button>
      {data.map((p) => (
        <ProductEditor key={p.id + p.img} product={p} onSave={save} onDelete={async () => {
          if (!confirm(`Delete ${p.name}?`)) return;
          await supabase.from("products").delete().eq("id", p.id);
          refresh();
        }} />
      ))}
    </div>
  );
}

function ProductEditor({ product, onSave, onDelete }: { product: ProductRow; onSave: (p: ProductRow) => void; onDelete: () => void }) {
  const [p, setP] = useState(product);
  const field = (k: keyof ProductRow, label: string) => (
    <label className="block text-xs">
      {label}
      <input
        value={String(p[k])}
        onChange={(e) => setP({ ...p, [k]: k === "sort" ? Number(e.target.value) || 0 : e.target.value })}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      />
    </label>
  );
  return (
    <div className="grid gap-4 rounded-lg border border-border bg-card p-4 md:grid-cols-[160px_1fr]">
      <div className="space-y-2">
        {p.img ? <img src={p.img} alt="" className="h-40 w-full rounded object-cover" /> : <div className="h-40 rounded bg-secondary" />}
        <UploadButton label="Change photo" accept="image/*" onFile={async (f) => {
          const url = await uploadMedia(f);
          const next = { ...p, img: url };
          setP(next);
          onSave(next);
        }} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {field("name", "Name")}
        {field("price", "Price")}
        {field("category", "Category")}
        {field("sort", "Order")}
        <label className="block text-xs sm:col-span-2">
          Description
          <textarea
            value={p.detail}
            onChange={(e) => setP({ ...p, detail: e.target.value })}
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </label>
        <div className="flex gap-2 sm:col-span-2">
          <button onClick={() => onSave(p)} className="rounded-md bg-primary px-4 py-2 text-xs text-primary-foreground uppercase">Save</button>
          <button onClick={onDelete} className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2 text-xs"><Trash2 className="h-3 w-3" /> Delete</button>
        </div>
      </div>
    </div>
  );
}

type PriceRow = { id: string; group_name: string; name: string; price: string; sort: number };

function PricesTab() {
  const qc = useQueryClient();
  const { data = [] } = useQuery({
    queryKey: ["price_items"],
    queryFn: async () => ((await supabase.from("price_items").select("*").order("sort")).data ?? []).map((r) => ({
      ...r,
      group_name: r.group_name.replace(/\s*[‐‑‒–—-]\s*/g, " "),
      name: r.name.replace(/\s*[‐‑‒–—-]\s*/g, " "),
    })),
  });
  const refresh = () => qc.invalidateQueries({ queryKey: ["price_items"] });
  return (
    <div className="space-y-3">
      <button
        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs text-primary-foreground uppercase tracking-[0.2em]"
        onClick={async () => {
          await supabase.from("price_items").insert({ group_name: "Jackets", name: "New item", sort: data.length + 1 });
          refresh();
        }}
      >
        <Plus className="h-4 w-4" /> Add price
      </button>
      {data.map((r) => (
        <PriceEditor key={r.id} row={r} refresh={refresh} />
      ))}
    </div>
  );
}

function PriceEditor({ row, refresh }: { row: PriceRow; refresh: () => void }) {
  const [r, setR] = useState(row);
  const input = (k: "group_name" | "name" | "price", ph: string) => (
    <input placeholder={ph} value={r[k]} onChange={(e) => setR({ ...r, [k]: e.target.value })}
      className="rounded-md border border-input bg-background px-3 py-2 text-sm" />
  );
  return (
    <div className="grid items-center gap-2 rounded-lg border border-border bg-card p-3 sm:grid-cols-[1fr_2fr_1fr_auto_auto]">
      {input("group_name", "Group")}
      {input("name", "Item")}
      {input("price", "Price")}
      <button className="rounded-md bg-primary px-4 py-2 text-xs text-primary-foreground uppercase" onClick={async () => {
        const { error } = await supabase.from("price_items").update(r).eq("id", r.id);
        if (error) toast.error(error.message); else { toast.success("Saved"); refresh(); }
      }}>Save</button>
      <button className="rounded-md border border-border p-2" aria-label="Delete" onClick={async () => {
        await supabase.from("price_items").delete().eq("id", r.id);
        refresh();
      }}><Trash2 className="h-4 w-4" /></button>
    </div>
  );
}
