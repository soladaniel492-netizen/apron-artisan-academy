import { useMedia } from "@/lib/media";

const strip = [
  { img: "/images/food/local-jollof-plantain.jpg", label: "Jollof & Plantain" },
  { img: "/images/food/local-egusi.jpg", label: "Egusi" },
  { img: "/images/food/local-efo-riro.jpg", label: "Efo Riro" },
  { img: "/images/food/local-jollof-pan.jpg", label: "Party Jollof" },
  { img: "/images/food/dish-noodles.jpg", label: "Stir Fry Noodles" },
  { img: "/images/food/dish-grilled-chicken.jpg", label: "Roast Chicken" },
  { img: "/images/food/local-egusi-packs.jpg", label: "Event Trays" },
];

export function FoodStrip() {
  const media = useMedia();
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
              src={media(s.img)}
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
