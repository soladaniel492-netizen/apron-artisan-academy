import { Instagram } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { useMedia } from "@/lib/media";

const IG_URL = "https://www.instagram.com/chefstore.ng/";

const tiles = [
  { img: "/images/food/local-jollof-plantain.jpg", label: "Jollof & Plantain" },
  { img: "/images/food/local-egusi.jpg", label: "Egusi Sunday" },
  { img: "/images/food/dish-noodles.jpg", label: "Stir Fry Noodles" },
  { img: "/images/food/dish-grilled-chicken.jpg", label: "Roast Chicken" },
  { img: "/images/food/local-efo-riro.jpg", label: "Efo Riro" },
  { img: "/images/food/drink-zobo.jpg", label: "Chilled Zobo" },
  { img: "/images/food/drink-chapman.jpg", label: "Chapman O'Clock" },
  { img: "/images/food/local-egusi-packs.jpg", label: "Event Trays" },
];

/** Instagram wall — real kitchen shots linking to the Chef Store Instagram feed. */
export function InstagramWall() {
  const media = useMedia();
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal className="mb-10 text-center">
        <p className="text-[10px] tracking-[0.5em] text-primary uppercase">Instagram</p>
        <h2 className="mt-4 font-display text-4xl leading-tight font-bold md:text-5xl">
          Fresh From the Pass
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Daily dishes, plating experiments and kitchen life. Follow along and
          see what we are cooking this week.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {tiles.map((t, i) => (
          <Reveal key={t.label} delay={(i % 4) * 140}>
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`See ${t.label} on the Chef Store Instagram`}
              className="group relative block aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={media(t.img)}
                alt={t.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-115"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-clay/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-clay-foreground" aria-hidden />
                <span className="px-2 text-center text-[10px] tracking-[0.3em] text-clay-foreground uppercase">
                  {t.label}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-10 text-center">
        <a
          href={IG_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-sm bg-foreground px-8 py-3 text-xs tracking-[0.2em] text-clay-foreground uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          <Instagram className="h-4 w-4" aria-hidden />
          Follow @chefstore.ng
        </a>
      </Reveal>
    </section>
  );
}
