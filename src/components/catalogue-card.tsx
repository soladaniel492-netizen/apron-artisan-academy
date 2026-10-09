import { Check, MessageCircle, Plus } from "lucide-react";

import type { CatalogueItem } from "@/data/catalogue";
import { orderLink } from "@/lib/site";
import { useMedia } from "@/lib/media";
import { useOrderList } from "@/lib/order-list";

export function CatalogueCard({
  item,
  colorOnHover = false,
}: {
  item: CatalogueItem;
  colorOnHover?: boolean;
}) {
  const media = useMedia();
  const { has, add, remove } = useOrderList();
  const saved = has(item.name);

  return (
    <article className="group hover-lift flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card">
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={media(item.img)}
          alt={item.name}
          loading="lazy"
          width={700}
          height={900}
          className={`h-72 w-full object-cover transition-[transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 ${
            colorOnHover ? "grayscale group-hover:grayscale-0" : ""
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-clay/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <button
          type="button"
          onClick={() => (saved ? remove(item.name) : add(item))}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${item.name} from your order` : `Add ${item.name} to your order`}
          className={`absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            saved
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card/85 text-muted-foreground hover:border-primary hover:text-primary"
          }`}
        >
          {saved ? (
            <Check className="h-4 w-4" aria-hidden />
          ) : (
            <Plus className="h-4 w-4" aria-hidden />
          )}
        </button>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] tracking-[0.25em] text-primary uppercase">
          {item.category}
        </p>
        <h3 className="mt-2 font-display text-3xl leading-tight">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.detail}
        </p>
        <p className="mt-4 text-sm font-medium">{item.price}</p>
        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => (saved ? remove(item.name) : add(item))}
            aria-pressed={saved}
            className={`inline-flex items-center justify-center gap-2 rounded-md border px-6 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.02] ${
              saved
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {saved ? (
              <>
                <Check className="h-4 w-4" aria-hidden />
                In your order
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" aria-hidden />
                Add to order
              </>
            )}
          </button>
          <a
            href={orderLink(item.name, item.price)}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-deep px-6 py-3 text-[11px] tracking-[0.2em] text-clay-foreground uppercase transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
