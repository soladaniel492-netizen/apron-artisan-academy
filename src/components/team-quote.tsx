import { Users } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { useMedia } from "@/lib/media";
import { whatsappLink } from "@/lib/site";

/** Bulk order quote block for restaurants, schools and service teams. */
export function TeamQuote() {
  const media = useMedia();
  return (
    <section className="bg-sand">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 text-[10px] tracking-[0.4em] text-teal-deep uppercase">
            <Users className="h-3.5 w-3.5" aria-hidden /> Team &amp; Bulk Orders
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-bold md:text-5xl">
            Dressing a Whole Team?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Restaurants, cafés, catering companies and hospitality schools get
            tailored quotes for uniform sets, branded aprons and customized
            tees, delivered anywhere in Nigeria.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              Volume pricing from five pieces up
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              Your logo embroidered or printed on every piece
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              Nationwide delivery, tracked in the chat
            </li>
          </ul>
          <a
            href={whatsappLink(
              "Hello Chef Store, I need a quote for a team order. Here are the pieces and quantity:",
            )}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-block rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:scale-105"
          >
            Request a quote
          </a>
        </div>

        <Reveal delay={220}>
          <div className="group relative overflow-hidden rounded-sm">
            <img
              src={media("/images/products/team-uniform-set.jpg")}
              alt="Chef Store team uniform sets for service crews"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clay/40 to-transparent" />
          </div>
        </Reveal>
      </Reveal>
    </section>
  );
}
