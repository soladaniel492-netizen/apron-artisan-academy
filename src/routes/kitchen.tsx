import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { whatsappLink } from "@/lib/site";

import platingSet from "@/assets/plating-set.mp4.asset.json";
import platingKit from "@/assets/plating-kit.mp4.asset.json";

const dishes = [
  {
    name: "Smoky Party Jollof",
    origin: "Local",
    detail: "Long-grain rice cooked over firewood heat with grilled chicken.",
  },
  {
    name: "Egusi & Pounded Yam",
    origin: "Local",
    detail: "Melon seed stew with assorted meats and hand-pounded yam.",
  },
  {
    name: "Suya Skewers",
    origin: "Local",
    detail: "Yaji-rubbed beef, charcoal grilled, served with onion and pepper.",
  },
  {
    name: "Seared Salmon, Beurre Blanc",
    origin: "Continental",
    detail: "Crisp-skin salmon with asparagus and a classic butter sauce.",
  },
  {
    name: "Hand-Rolled Tagliatelle",
    origin: "Continental",
    detail: "Fresh egg pasta with slow-cooked tomato and basil sugo.",
  },
  {
    name: "Peri Peri Grill Platter",
    origin: "Fusion",
    detail: "Flame-grilled chicken with plantain and a bright herb salad.",
  },
];

export const Route = createFileRoute("/kitchen")({
  head: () => ({
    meta: [
      { title: "Our Kitchen — Local to Continental Dishes | Chef Store" },
      {
        name: "description",
        content:
          "From smoky jollof and egusi to seared salmon and hand-rolled pasta — the dishes cooked and plated in the Chef Store kitchen.",
      },
      { property: "og:title", content: "Our Kitchen | Chef Store" },
      {
        property: "og:description",
        content: "Local Nigerian classics and continental plates from our kitchen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KitchenPage,
});

function KitchenPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <section className="bg-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
            <div className="animate-fade-up">
              <p className="text-xs tracking-[0.35em] text-primary uppercase">
                Our Kitchen
              </p>
              <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
                From Local Pots to
                <br />
                <span className="text-primary">Continental Plates</span>
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Our kitchen runs on two traditions at once: the deep, slow
                flavours of Nigerian cooking and the technique-driven discipline
                of European kitchens — plated with our own chef tools.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:150ms]">
              <video
                src={platingSet.url}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Chef Store plating set in use"
                className="aspect-[9/16] w-full max-w-sm rounded-sm object-cover shadow-xl md:justify-self-center"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((d, i) => (
              <Reveal
                key={d.name}
                delay={i * 80}
                className="hover-lift group relative overflow-hidden border border-border bg-card p-8"
              >
                <span className="absolute top-0 left-0 h-full w-1 origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />
                <p className="text-[10px] tracking-[0.25em] text-teal-deep uppercase">
                  {d.origin}
                </p>
                <h2 className="mt-2 font-display text-3xl">{d.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-sand">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
            <Reveal>
              <video
                src={platingKit.url}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Professional chef plating kit"
                className="aspect-[9/16] w-full max-w-sm rounded-sm object-cover shadow-xl md:justify-self-center"
              />
            </Reveal>
            <Reveal delay={380}>
              <h2 className="font-display text-4xl md:text-5xl">
                Cook it, or let us cook it
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Book a private dinner, an event menu, or a plating kit of your
                own — tweezers, spoons, brushes and moulds in one roll.
              </p>
              <a
                href={whatsappLink(
                  "Hello Chef Store, I'd like to talk about your kitchen menu / plating kit.",
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-teal-deep px-8 py-3 text-xs tracking-[0.2em] text-clay-foreground uppercase transition-transform duration-300 hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Talk to the kitchen
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
