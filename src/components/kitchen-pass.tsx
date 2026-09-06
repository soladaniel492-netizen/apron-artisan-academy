import { useEffect, useState } from "react";

import kitchenPass from "@/assets/kitchen-pass-new.jpg.asset.json";
import egusiPacks from "@/assets/local-egusi-packs.jpg.asset.json";
import jollofPan from "@/assets/local-jollof-pan.jpg.asset.json";
import grilledChicken from "@/assets/dish-grilled-chicken.jpg.asset.json";
import efoRiro from "@/assets/local-efo-riro.jpg.asset.json";

const slides = [
  {
    img: kitchenPass.url,
    alt: "Fresh produce prepped on the kitchen counter",
    eyebrow: "On the pass",
    line: "Good food starts long before the fire",
    sub: "Everything is prepped fresh — no shortcuts, no yesterday's produce.",
    tint: "from-teal-deep/80 via-clay/70 to-clay/90",
  },
  {
    img: jollofPan.url,
    alt: "Party jollof rice finishing in a cast iron pan",
    eyebrow: "Heat & patience",
    line: "Flavour is built slowly, layer by layer",
    sub: "Smoke, stock and timing — the difference between food and a meal.",
    tint: "from-primary/75 via-clay/70 to-clay/90",
  },
  {
    img: grilledChicken.url,
    alt: "Herb roasted chicken resting on a board",
    eyebrow: "Standards",
    line: "Season with intention, plate with pride",
    sub: "The same discipline we teach in training runs every service.",
    tint: "from-teal-bright/70 via-clay/70 to-clay/90",
  },
  {
    img: efoRiro.url,
    alt: "Efo riro stew in a white serving dish",
    eyebrow: "Nourishment",
    line: "Great cooking is care you can taste",
    sub: "Real ingredients, honest portions, food that does your body good.",
    tint: "from-clay/70 via-primary/50 to-clay/90",
  },
  {
    img: egusiPacks.url,
    alt: "Trays of egusi prepared for events",
    eyebrow: "Service",
    line: "From one plate to one thousand",
    sub: "Events, meal plans and private dinners, cooked to the same standard.",
    tint: "from-teal-deep/75 via-clay/65 to-clay/90",
  },
];

export function KitchenPass() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setI((v) => (v + 1) % slides.length),
      5200,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative h-[520px] overflow-hidden bg-clay md:h-[640px]">
      {slides.map((s, idx) => (
        <div
          key={s.img}
          aria-hidden={idx !== i}
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-out"
          style={{ opacity: idx === i ? 1 : 0 }}
        >
          <img
            src={s.img}
            alt={s.alt}
            loading="lazy"
            className="h-full w-full object-cover"
            style={{
              transform: idx === i ? "scale(1.14)" : "scale(1)",
              transition: "transform 7000ms ease-out",
            }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${s.tint} mix-blend-multiply transition-opacity duration-[1600ms]`}
          />
          <div className="absolute inset-0 bg-clay/25" />
        </div>
      ))}

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        {slides.map((s, idx) => (
          <div
            key={s.line}
            className="absolute max-w-3xl px-6 transition-all duration-[1200ms] ease-out"
            style={{
              opacity: idx === i ? 1 : 0,
              transform:
                idx === i ? "translateY(0) scale(1)" : "translateY(28px) scale(0.97)",
              filter: idx === i ? "blur(0)" : "blur(6px)",
              pointerEvents: idx === i ? "auto" : "none",
            }}
          >
            <p className="text-[10px] tracking-[0.45em] text-clay-foreground/80 uppercase">
              {s.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-clay-foreground md:text-7xl">
              {s.line}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-clay-foreground/85">
              {s.sub}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.eyebrow}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Show ${s.eyebrow}`}
            className="h-[3px] w-10 overflow-hidden bg-clay-foreground/30"
          >
            <span
              className="block h-full bg-primary transition-all duration-700"
              style={{ width: idx === i ? "100%" : "0%" }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
