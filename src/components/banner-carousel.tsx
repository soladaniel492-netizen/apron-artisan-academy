import { useEffect, useState } from "react";

export type BannerSlide = {
  img: string;
  alt: string;
};

/**
 * Auto-sliding two-image banner with a slow Ken Burns push.
 * Swap the slides passed in from src/lib/site.ts to change the banner.
 */
export function BannerCarousel({
  slides,
  interval = 5000,
  className = "",
  children,
}: {
  slides: readonly BannerSlide[];
  interval?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className={`relative overflow-hidden bg-clay ${className}`}>
      {slides.map((s, i) => (
        <img
          key={s.img}
          src={s.img}
          alt={s.alt}
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i !== index}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-[opacity,transform] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            i === index ? "scale-105 opacity-100" : "scale-100 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-clay/90 via-clay/55 to-clay/10" />
      {children}
      <div className="absolute bottom-5 left-6 flex gap-2 md:left-12">
        {slides.map((s, i) => (
          <button
            key={s.img}
            type="button"
            aria-label={`Show banner ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-10 bg-primary" : "w-4 bg-clay-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
