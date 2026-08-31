import { MessageCircle } from "lucide-react";

import type { CatalogueItem } from "@/data/catalogue";
import { orderLink } from "@/lib/site";

export function CatalogueCard({ item }: { item: CatalogueItem }) {
  return (
    <article className="group flex flex-col border border-border bg-card">
      <div className="overflow-hidden bg-secondary">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          width={700}
          height={900}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] tracking-[0.25em] text-primary uppercase">
          {item.category}
        </p>
        <h3 className="mt-2 font-display text-2xl">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.detail}
        </p>
        <p className="mt-4 text-sm font-medium">{item.price}</p>
        <a
          href={orderLink(item.name, item.price)}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-olive px-6 py-3 text-[11px] tracking-[0.2em] text-background uppercase transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}
