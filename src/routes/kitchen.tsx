import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { FoodStrip } from "@/components/food-strip";
import { KitchenPass } from "@/components/kitchen-pass";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { whatsappLink } from "@/lib/site";

import platingKit from "@/assets/plating-kit.mp4.asset.json";
import egusi from "@/assets/local-egusi.jpg.asset.json";
import efoRiro from "@/assets/local-efo-riro.jpg.asset.json";
import jollofPlantain from "@/assets/local-jollof-plantain.jpg.asset.json";
import jollofPan from "@/assets/local-jollof-pan.jpg.asset.json";
import noodles from "@/assets/dish-noodles.jpg.asset.json";
import grilledChicken from "@/assets/dish-grilled-chicken.jpg.asset.json";
import salmon from "@/assets/dish-salmon.jpg.asset.json";
import pasta from "@/assets/dish-pasta.jpg.asset.json";
import zobo from "@/assets/drink-zobo.jpg.asset.json";
import chapman from "@/assets/drink-chapman.jpg.asset.json";
import kunu from "@/assets/drink-kunu.jpg.asset.json";
import punch from "@/assets/drink-punch.jpg.asset.json";

const menu = [
  {
    course: "Continental",
    blurb:
      "European and Asian technique, precise seasoning and clean plating — the dishes we teach and serve.",
    dishes: [
      {
        name: "Chilli Garlic Stir-Fry Noodles",
        img: noodles.url,
        detail: "Wok-tossed noodles with spring onion, tomato and chilli oil.",
      },
      {
        name: "Herb Roasted Chicken",
        img: grilledChicken.url,
        detail: "Marinated drumsticks roasted with garlic, lime and coriander.",
      },
      {
        name: "Seared Salmon, Beurre Blanc",
        img: salmon.url,
        detail: "Crisp-skin salmon with asparagus and a classic butter sauce.",
      },
      {
        name: "Hand-Rolled Tagliatelle",
        img: pasta.url,
        detail: "Fresh egg pasta with slow-cooked tomato and basil sugo.",
      },
    ],
  },
  {
    course: "Local",
    blurb:
      "Deep, slow Nigerian flavours cooked the way they are meant to be cooked.",
    dishes: [
      {
        name: "Egusi & Assorted Meat",
        img: egusi.url,
        detail: "Melon seed stew simmered with assorted meats, ponmo and shaki.",
      },
      {
        name: "Efo Riro",
        img: efoRiro.url,
        detail: "Rich spinach stew with peppers, locust bean and assorted cuts.",
      },
      {
        name: "Jollof, Plantain & Grilled Chicken",
        img: jollofPlantain.url,
        detail: "Smoky party jollof plated with sweet plantain and peppered chicken.",
      },
      {
        name: "Party Jollof in the Pan",
        img: jollofPan.url,
        detail: "Long-grain rice cooked over firewood heat with tender beef.",
      },
    ],
  },
  {
    course: "Drinks",
    blurb: "House pours, chilled and made fresh for every service.",
    dishes: [
      {
        name: "Chilled Zobo",
        img: zobo.url,
        detail: "Hibiscus steeped with spice, served over ice with mint.",
      },
      {
        name: "Chapman",
        img: chapman.url,
        detail: "The classic Nigerian cooler with citrus and cucumber.",
      },
      {
        name: "Kunu Aya",
        img: kunu.url,
        detail: "Tiger nut milk blended with dates, chilled and smooth.",
      },
      {
        name: "House Fruit Punch",
        img: punch.url,
        detail: "Pineapple, citrus and mint over ice — made fresh daily.",
      },
    ],
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
        <section className="relative overflow-hidden bg-cream">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
            <p className="animate-fade-up text-[10px] tracking-[0.5em] text-primary uppercase">
              Our Kitchen
            </p>
            <h1 className="mt-6 animate-fade-up font-display text-5xl leading-[1.05] font-bold [animation-delay:200ms] md:text-7xl">
              From Local Pots to
              <br />
              <span className="text-primary">Continental Plates</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl animate-fade-up text-sm leading-relaxed text-muted-foreground [animation-delay:500ms]">
              Two traditions in one kitchen: the deep, slow flavours of Nigerian
              cooking and the technique-driven discipline of European service —
              plated with our own chef tools.
            </p>
            <div className="mx-auto mt-10 h-px w-24 animate-fade-up bg-primary [animation-delay:800ms]" />
          </div>
        </section>

        <FoodStrip />

        <section className="mx-auto max-w-7xl px-6 py-16">
          {menu.map((group, gi) => (
            <div key={group.course} className={gi > 0 ? "mt-20" : ""}>
              <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
                <div>
                  <p className="text-[10px] tracking-[0.35em] text-teal-deep uppercase">
                    Menu {String(gi + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-4xl md:text-5xl">
                    {group.course}
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {group.blurb}
                </p>
              </Reveal>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.dishes.map((d, i) => (
                  <Reveal
                    key={d.name}
                    delay={i * 160}
                    className="group overflow-hidden rounded-sm bg-card shadow-[0_1px_0_0_var(--color-border)] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={d.img}
                        alt={d.name}
                        loading="lazy"
                        className="h-full w-full scale-[1.12] object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.28]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-clay/90 via-clay/20 to-transparent" />
                      <div className="absolute inset-0 bg-primary/25 opacity-0 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-100" />
                      <div className="absolute right-4 bottom-0 left-4 translate-y-2 pb-5 transition-transform duration-700 ease-out group-hover:translate-y-0">
                        <p className="text-[9px] tracking-[0.35em] text-clay-foreground/70 uppercase">
                          {group.course}
                        </p>
                        <h3 className="mt-2 font-display text-2xl leading-tight text-clay-foreground">
                          {d.name}
                        </h3>
                      </div>
                    </div>
                    <div className="border-t border-border/60 px-5 py-5">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {d.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </section>

        <KitchenPass />



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
