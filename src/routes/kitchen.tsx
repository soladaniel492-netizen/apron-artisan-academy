import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { whatsappLink } from "@/lib/site";

import dishJollof from "@/assets/dish-jollof.jpg";
import dishEgusi from "@/assets/dish-egusi.jpg";
import dishSuya from "@/assets/dish-suya.jpg";
import dishSalmon from "@/assets/dish-salmon.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishGrill from "@/assets/dish-grill.jpg";

const dishes = [
  {
    name: "Smoky Party Jollof",
    origin: "Local",
    detail: "Long-grain rice cooked over firewood heat with grilled chicken.",
    img: dishJollof,
  },
  {
    name: "Egusi & Pounded Yam",
    origin: "Local",
    detail: "Melon seed stew with assorted meats and hand-pounded yam.",
    img: dishEgusi,
  },
  {
    name: "Suya Skewers",
    origin: "Local",
    detail: "Yaji-rubbed beef, charcoal grilled, served with onion and pepper.",
    img: dishSuya,
  },
  {
    name: "Seared Salmon, Beurre Blanc",
    origin: "Continental",
    detail: "Crisp-skin salmon with asparagus and a classic butter sauce.",
    img: dishSalmon,
  },
  {
    name: "Hand-Rolled Tagliatelle",
    origin: "Continental",
    detail: "Fresh egg pasta with slow-cooked tomato and basil sugo.",
    img: dishPasta,
  },
  {
    name: "Peri Peri Grill Platter",
    origin: "Fusion",
    detail: "Flame-grilled chicken with plantain and a bright herb salad.",
    img: dishGrill,
  },
];

export const Route = createFileRoute("/kitchen")({
  head: () => ({
    meta: [
      { title: "Our Kitchen — Local to Continental Dishes | Chef Store" },
      {
        name: "description",
        content:
          "From smoky jollof and egusi to seared salmon and hand-rolled pasta — the dishes cooked and taught in the Chef Store kitchen.",
      },
      { property: "og:title", content: "Our Kitchen | Chef Store" },
      {
        property: "og:description",
        content: "Local Nigerian classics and continental plates from our kitchen.",
      },
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
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <p className="text-xs tracking-[0.35em] text-primary uppercase">
              Our Kitchen
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
              From Local Pots to
              <br />
              <span className="italic text-primary">Continental Plates</span>
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Our kitchen runs on two traditions at once: the deep, slow flavours
              of Nigerian cooking and the technique-driven discipline of European
              kitchens. Everything on this page is cooked in-house, served at
              events, and taught in our classes.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((d) => (
              <article key={d.name}>
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover"
                />
                <p className="mt-4 text-[10px] tracking-[0.25em] text-primary uppercase">
                  {d.origin}
                </p>
                <h2 className="mt-1 font-display text-2xl">{d.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-sand">
          <div className="mx-auto max-w-3xl px-6 py-14 text-center">
            <h2 className="font-display text-4xl">Cook it, or let us cook it</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Book a private dinner, an event menu, or a class where we cook the
              dish together from scratch.
            </p>
            <a
              href={whatsappLink(
                "Hello Chef Store, I'd like to talk about your kitchen menu / a private dinner.",
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-olive px-8 py-3 text-xs tracking-[0.2em] text-background uppercase"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Talk to the kitchen
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
