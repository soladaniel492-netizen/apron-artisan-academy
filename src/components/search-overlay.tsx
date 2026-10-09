import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, MessageCircle, Plus, Search, X } from "lucide-react";

import { useMedia, useProducts } from "@/lib/media";
import { useOrderList } from "@/lib/order-list";
import { orderLink } from "@/lib/site";

const quickLinks = [
  { label: "Full catalogue", to: "/catalogue" },
  { label: "Our kitchen", to: "/kitchen" },
  { label: "Training", to: "/training" },
  { label: "Contact us", to: "/contact" },
] as const;

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const products = useProducts();
  const media = useMedia();
  const { has, add, remove } = useOrderList();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const focus = window.setTimeout(() => inputRef.current?.focus(), 80);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(focus);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter((item) =>
        `${item.name} ${item.category} ${item.detail}`.toLowerCase().includes(q),
      )
      .slice(0, 6);
  }, [query, products]);

  if (!open) return null;

  const showEmpty = query.trim().length > 0 && results.length === 0;

  return (
    <div className="fixed inset-0 z-90" role="dialog" aria-modal="true" aria-label="Search the catalogue">
      <button
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 bg-clay/45 backdrop-blur-sm animate-fade-in"
      />
      <div className="relative mx-auto mt-[8vh] w-[calc(100%-2rem)] max-w-2xl animate-overlay-in rounded-lg border border-border bg-card p-5 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <Search className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try apron, uniform, tee or accessory"
            aria-label="Search products"
            className="w-full bg-transparent font-display text-2xl outline-none placeholder:text-muted-foreground/60"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="rounded-sm p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="max-h-[52vh] overflow-y-auto py-3">
          {results.map((item, index) => {
            const saved = has(item.name);
            return (
              <div
                key={item.name}
                className="flex animate-fade-up items-center gap-4 border-b border-border/60 py-3 last:border-0"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <img
                  src={media(item.img)}
                  alt={item.name}
                  loading="lazy"
                  className="h-16 w-14 shrink-0 rounded-sm object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-xl">{item.name}</p>
                  <p className="truncate text-[10px] tracking-[0.2em] text-primary uppercase">
                    {item.category}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.price}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    onClick={() => (saved ? remove(item.name) : add(item))}
                    aria-pressed={saved}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-sm border transition-all duration-300 hover:scale-110 ${
                      saved
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                    aria-label={saved ? `Remove ${item.name} from your order` : `Add ${item.name} to your order`}
                  >
                    {saved ? (
                      <Check className="h-4 w-4" aria-hidden />
                    ) : (
                      <Plus className="h-4 w-4" aria-hidden />
                    )}
                  </button>
                  <a
                    href={orderLink(item.name, item.price)}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Order ${item.name} on WhatsApp`}
                    className="inline-flex h-9 items-center gap-2 rounded-sm bg-teal-deep px-4 text-[10px] tracking-[0.2em] text-clay-foreground uppercase transition-transform duration-300 hover:scale-105"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Order
                  </a>
                </div>
              </div>
            );
          })}

          {showEmpty && (
            <p className="animate-fade-up px-1 py-6 text-center text-sm text-muted-foreground">
              Nothing matches "{query.trim()}". Try apron, jacket, uniform, tee or
              accessory — or message us and we'll make it.
            </p>
          )}

          {!query.trim() && (
            <div className="animate-fade-up px-1 py-2">
              <p className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                Popular searches
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Apron", "Uniform", "Tee", "Accessory", "Jacket"].map((word) => (
                  <button
                    key={word}
                    onClick={() => setQuery(word)}
                    className="rounded-full border border-border px-4 py-1.5 text-xs transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary"
                  >
                    {word}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                Pages
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={onClose}
                    className="underline-sweep text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
