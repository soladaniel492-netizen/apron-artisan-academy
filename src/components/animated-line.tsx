export function AnimatedLine({ text, start }: { text: string; start: number }) {
  return (
    <span aria-hidden className="inline-block">
      {text.split("").map((ch, i) =>
        ch === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <span
            key={i}
            className="hero-char"
            style={{ animationDelay: `${start + i * 0.045}s` }}
          >
            {ch}
          </span>
        ),
      )}
    </span>
  );
}
