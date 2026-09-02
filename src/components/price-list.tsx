import { MessageCircle } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { chefWearsPricing } from "@/data/pricing";
import { whatsappLink } from "@/lib/site";

export function PriceList() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Reveal className="text-center">
        <p className="text-xs tracking-[0.35em] text-primary uppercase">
          Chef Wears
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
          Price List
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-16 bg-primary" />
      </Reveal>

      <div className="mt-10 overflow-hidden rounded-sm border border-border">
        <div className="bg-clay px-6 py-3 text-center text-xs tracking-[0.3em] text-primary uppercase">
          Chef Wears
        </div>
        <div className="divide-y divide-border bg-card">
          {chefWearsPricing.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 80} className="px-6 py-6 sm:px-10">
              <h3 className="font-display text-2xl text-primary">{g.group}</h3>
              <ul className="mt-3 space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it.name}
                    className="flex items-baseline justify-between gap-6 border-b border-dashed border-border/70 pb-2 last:border-0"
                  >
                    <span className="text-sm">{it.name}</span>
                    <span className="shrink-0 text-sm font-semibold text-teal-deep">
                      {it.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-8 text-center" delay={120}>
        <p className="text-sm text-muted-foreground">
          Aprons, uniforms, accessories and customized t-shirts are quoted on
          request — message us for the current rate.
        </p>
        <a
          href={whatsappLink("Hello Chef Store, please send me your full price list.")}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-6 inline-flex items-center gap-2 rounded-sm bg-teal-deep px-8 py-3 text-xs tracking-[0.2em] text-clay-foreground uppercase transition-transform hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Request a quote
        </a>
      </Reveal>
    </section>
  );
}
