import jollof from "@/assets/dish-jollof.jpg.asset.json";
import egusi from "@/assets/dish-egusi.jpg.asset.json";
import suya from "@/assets/dish-suya.jpg.asset.json";
import salmon from "@/assets/dish-salmon.jpg.asset.json";
import pasta from "@/assets/dish-pasta.jpg.asset.json";
import peri from "@/assets/dish-perigrill.jpg.asset.json";
import zobo from "@/assets/drink-zobo.jpg.asset.json";

const strip = [
  { img: jollof.url, label: "Party Jollof" },
  { img: egusi.url, label: "Egusi & Yam" },
  { img: suya.url, label: "Suya Skewers" },
  { img: salmon.url, label: "Seared Salmon" },
  { img: pasta.url, label: "Tagliatelle" },
  { img: peri.url, label: "Peri Peri Grill" },
  { img: zobo.url, label: "Chilled Zobo" },
];

export function FoodStrip() {
  const loop = [...strip, ...strip];

  return (
    <div className="group relative overflow-hidden bg-clay">
      <div className="flex w-max animate-marquee gap-0 group-hover:[animation-play-state:paused]">
        {loop.map((s, i) => (
          <figure
            key={`${s.label}-${i}`}
            className="relative h-[260px] w-[220px] shrink-0 overflow-hidden sm:h-[340px] sm:w-[300px]"
          >
            <img
              src={s.img}
              alt={s.label}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clay/85 via-transparent to-transparent" />
            <figcaption className="absolute bottom-4 left-4 text-xs tracking-[0.25em] text-clay-foreground uppercase">
              {s.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
