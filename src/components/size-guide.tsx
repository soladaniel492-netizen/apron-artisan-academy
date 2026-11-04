import { Ruler } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { whatsappLink } from "@/lib/site";

const rows = [
  { size: "Small", chest: "Up to 102 cm", waist: "Up to 91 cm", length: "76 cm" },
  { size: "Medium", chest: "102 to 112 cm", waist: "91 to 102 cm", length: "79 cm" },
  { size: "Large", chest: "112 to 122 cm", waist: "102 to 112 cm", length: "81 cm" },
  { size: "XL", chest: "122 to 132 cm", waist: "112 to 122 cm", length: "84 cm" },
  { size: "2XL", chest: "132 to 142 cm", waist: "122 to 132 cm", length: "86 cm" },
];

/** Size guide — standard apron and chef jacket measurements, confirmed per order in chat. */
export function SizeGuide() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal className="text-center">
        <p className="inline-flex items-center gap-2 text-[10px] tracking-[0.5em] text-primary uppercase">
          <Ruler className="h-3.5 w-3.5" aria-hidden /> Size Guide
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight font-bold md:text-5xl">
          Get the Fit Right
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Standard apron and chef jacket measurements. Send us your chest,
          waist and height on WhatsApp and we will confirm your size before
          sewing.
        </p>
      </Reveal>

      <Reveal delay={200} className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <caption className="sr-only">Apron and chef jacket size chart</caption>
          <thead>
            <tr className="border-b border-border text-left text-xs tracking-[0.2em] uppercase">
              <th scope="col" className="py-4 pr-6 font-semibold">Size</th>
              <th scope="col" className="py-4 pr-6 font-semibold">Chest</th>
              <th scope="col" className="py-4 pr-6 font-semibold">Waist</th>
              <th scope="col" className="py-4 font-semibold">Apron Length</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.size}
                className="border-b border-border/60 transition-colors duration-300 hover:bg-sand/70"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                <th scope="row" className="py-4 pr-6 font-display text-lg font-semibold">
                  {r.size}
                </th>
                <td className="py-4 pr-6 text-muted-foreground">{r.chest}</td>
                <td className="py-4 pr-6 text-muted-foreground">{r.waist}</td>
                <td className="py-4 text-muted-foreground">{r.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <Reveal delay={300} className="mt-8 text-center">
        <a
          href={whatsappLink("Hello Chef Store, I need help picking my size.")}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block rounded-sm border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-foreground hover:text-clay-foreground"
        >
          Ask about your size
        </a>
      </Reveal>
    </section>
  );
}
