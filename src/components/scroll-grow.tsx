import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Scroll-driven "grow then swipe off" element.
 * Scales up from small as it enters the viewport, then slides + fades away as it leaves.
 */
export function ScrollGrow({
  children,
  className,
  from = 0.72,
  swipe = 140,
  rotate = 0,
}: {
  children: ReactNode;
  className?: string;
  /** starting scale */
  from?: number;
  /** px the element swipes horizontally as it exits */
  swipe?: number;
  /** degrees of rotation applied across the whole travel */
  rotate?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when the element is just below the fold, 1 when it has just left the top
      const raw = (vh - rect.top) / (vh + rect.height);
      setP(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // grow phase: 0 -> 0.55, hold, swipe phase: 0.75 -> 1
  const grow = Math.min(1, p / 0.55);
  const exit = Math.max(0, (p - 0.78) / 0.22);
  const scale = from + (1 - from) * grow + exit * 0.06;
  const opacity = Math.min(1, grow * 1.6) * (1 - exit);
  const x = exit * swipe;
  const rot = (grow - 1) * rotate + exit * rotate;

  return (
    <div
      ref={ref}
      style={{
        transform: `translate3d(${x}px,0,0) scale(${scale}) rotate(${rot}deg)`,
        opacity,
        willChange: "transform, opacity",
      }}
      className={cn("origin-left transition-none", className)}
    >
      {children}
    </div>
  );
}

/** Slow parallax drift for decorative shapes. */
export function ScrollShape({
  className,
  speed = 0.15,
  spin = 0,
}: {
  className?: string;
  speed?: number;
  spin?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      setY((vh / 2 - rect.top) * speed);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{ transform: `translate3d(0,${y}px,0) rotate(${y * spin}deg)` }}
      className={cn("pointer-events-none absolute", className)}
    />
  );
}
