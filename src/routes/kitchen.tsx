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
      {
        name: "Egusi Packs to Go",
        img: egusiPacks.url,
        detail: "Bulk trays prepped for events, parties and weekly meal plans.",
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

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.dishes.map((d, i) => (
                  <Reveal
                    key={d.name}
                    delay={i * 180}
                    className="hover-lift group overflow-hidden rounded-sm border border-border bg-card"
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      <img
                        src={d.img}
                        alt={d.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-clay/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] tracking-[0.25em] text-primary uppercase">
                        {group.course}
                      </p>
                      <h3 className="mt-2 font-display text-2xl">{d.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {d.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="relative overflow-hidden">
          <img
            src={kitchenPass.url}
            alt="Chefs plating on the kitchen pass"
            loading="lazy"
            className="h-[380px] w-full object-cover md:h-[460px]"
          />
          <div className="absolute inset-0 bg-clay/60" />
          <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-center px-6">
            <Reveal>
              <p className="text-[10px] tracking-[0.35em] text-primary uppercase">
                On the pass
              </p>
              <h2 className="mt-3 max-w-xl font-display text-4xl text-clay-foreground md:text-6xl">
                Every plate leaves the pass finished
              </h2>
            </Reveal>
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
