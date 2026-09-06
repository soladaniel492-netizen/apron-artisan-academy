import jollofPlantain from "@/assets/local-jollof-plantain.jpg.asset.json";
import egusi from "@/assets/local-egusi.jpg.asset.json";
import efoRiro from "@/assets/local-efo-riro.jpg.asset.json";
import jollofPan from "@/assets/local-jollof-pan.jpg.asset.json";
import noodles from "@/assets/dish-noodles.jpg.asset.json";
import grilledChicken from "@/assets/dish-grilled-chicken.jpg.asset.json";
import egusiPacks from "@/assets/local-egusi-packs.jpg.asset.json";

const strip = [
  { img: jollofPlantain.url, label: "Jollof & Plantain" },
  { img: egusi.url, label: "Egusi" },
  { img: efoRiro.url, label: "Efo Riro" },
  { img: jollofPan.url, label: "Party Jollof" },
  { img: noodles.url, label: "Stir-Fry Noodles" },
  { img: grilledChicken.url, label: "Roast Chicken" },
  { img: egusiPacks.url, label: "Event Trays" },
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
              className="h-full w-full scale-105 object-cover transition-transform duration-[1400ms] ease-out hover:scale-115"
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
