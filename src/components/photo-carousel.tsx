import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import waitstaff from "@/assets/p-waitstaff.jpg.asset.json";
import teamSet from "@/assets/p-team-set.jpg.asset.json";
import denimWaist from "@/assets/p-denim-waist.jpg.asset.json";
import personalised from "@/assets/p-personalised.jpg.asset.json";
import burgundy from "@/assets/p-burgundy.jpg.asset.json";
import crossback from "@/assets/p-crossback.jpg.asset.json";
import denimRed from "@/assets/denim-red-aprons.jpg.asset.json";
import leatherDetails from "@/assets/p-leather-details.jpg.asset.json";

const slides = [
  {
    img: teamSet.url,
    title: "Uniforms for Service Teams",
    caption: "Branded tees and denim waist aprons for front-of-house crews.",
  },
  {
    img: waitstaff.url,
    title: "Style Meets Functionality",
    caption: "Wait staff sets designed for professionals who serve with confidence.",
  },
  {
    img: personalised.url,
    title: "Personalised Chef Aprons",
    caption: "Your name embroidered, adjustable straps, leather-trimmed pockets.",
  },
  {
    img: burgundy.url,
    title: "Colour Made to Order",
    caption: "Burgundy twill with brass eyelets and swivel clips.",
  },
  {
    img: denimRed.url,
    title: "Denim & Twill Bibs",
    caption: "Cross-back comfort with leather strap tabs.",
  },
  {
    img: crossback.url,
    title: "Cross-Back Comfort",
    caption: "Weight off your neck through a full service.",
  },
  {
    img: denimWaist.url,
    title: "Denim Waist Aprons",
    caption: "Contrast stitching, twin pockets, service length.",
  },
  {
    img: leatherDetails.url,
    title: "The Details",
    caption: "Leather panels, tabs and hardware finished by hand.",
  },
];

export function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), 4200);
    return () => window.clearInterval(id);
  }, [paused, go]);

  return (
    <div
      className="relative overflow-hidden bg-clay"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[420px] sm:h-[520px] md:h-[600px]">
        {slides.map((s, i) => (
          <figure
            key={s.img}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              i === index
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-105 opacity-0"
            }`}
          >
            <img
              src={s.img}
              alt={s.title}
              loading={i === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clay/85 via-clay/25 to-transparent" />
            <figcaption className="absolute right-0 bottom-0 left-0 p-6 md:p-12">
              <p className="text-[10px] tracking-[0.35em] text-primary uppercase">
                Chef Store Originals
              </p>
              <h3 className="mt-3 max-w-xl font-display text-3xl text-clay-foreground md:text-5xl">
                {s.title}
              </h3>
              <p className="mt-2 max-w-md text-sm text-clay-foreground/80">
                {s.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-background/80 p-3 transition-transform hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-background/80 p-3 transition-transform hover:scale-110"
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.img}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-primary" : "w-3 bg-clay-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
