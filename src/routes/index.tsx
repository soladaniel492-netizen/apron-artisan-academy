import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Star } from "lucide-react";

import { CatalogueCard } from "@/components/catalogue-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { catalogue } from "@/data/catalogue";
import { whatsappLink } from "@/lib/site";

import heroChef from "@/assets/hero-chef.jpg";
import promoTraining from "@/assets/promo-training.jpg";
import dishJollof from "@/assets/dish-jollof.jpg";
import dishSalmon from "@/assets/dish-salmon.jpg";
import dishSuya from "@/assets/dish-suya.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import trend1 from "@/assets/trend-1.jpg";
import trend2 from "@/assets/trend-2.jpg";
import trend3 from "@/assets/trend-3.jpg";
import trend4 from "@/assets/trend-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Tablier — Chef Aprons, Culinary Items & Training" },
      {
        name: "description",
        content:
          "Handcrafted chef aprons and culinary items you can order on WhatsApp, plus chef-led culinary training in Abuja.",
      },
      { property: "og:title", content: "Maison Tablier — Chef Aprons & Culinary Craft" },
      {
        property: "og:description",
        content:
          "Handcrafted aprons, culinary items and chef-led training. Order straight from WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const trends = [
  { name: "Denim Cross-Back", price: "₦34,000", img: trend1 },
  { name: "Rust Linen Baker", price: "₦31,000", img: trend2 },
  { name: "Charcoal Service", price: "₦24,000", img: trend3 },
  { name: "Whites & Waist Set", price: "₦58,000", img: trend4 },
];

const kitchenPreview = [
  { name: "Smoky Party Jollof", img: dishJollof },
  { name: "Suya Skewers", img: dishSuya },
  { name: "Seared Salmon", img: dishSalmon },
  { name: "Hand-Rolled Tagliatelle", img: dishPasta },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="bg-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:py-16">
            <div>
              <p className="text-xs tracking-[0.35em] text-primary uppercase">
                Aprons for people who cook
              </p>
              <h1 className="mt-6 font-display text-6xl leading-[0.95] font-bold md:text-7xl">
                Elevate Your
                <br />
                <span className="italic text-primary">Kitchen.</span>
              </h1>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Heavy canvas, waxed leather and washed linen — cut, stitched and
                tested in working kitchens. Plus culinary training that puts them
                to use.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/catalogue"
                  className="rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
                >
                  View Catalogue
                </Link>
                <Link
                  to="/training"
                  className="border-b border-foreground pb-1 text-xs tracking-[0.2em] uppercase"
                >
                  Book Training
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-x-6 top-10 bottom-0 rounded-t-full bg-sand" />
              <img
                src={heroChef}
                alt="Chef wearing a linen Maison Tablier apron"
                width={1408}
                height={1504}
                className="relative mx-auto w-full max-w-md object-cover"
              />
            </div>
          </div>
        </section>

        {/* Catalogue preview */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-center font-display text-3xl tracking-[0.15em] uppercase">
            Catalogue
          </h2>
          <div className="mx-auto mt-2 h-px w-16 bg-primary" />
          <p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted-foreground">
            Aprons and culinary items with prices — tap any piece to order it in
            one WhatsApp message.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {catalogue.slice(0, 4).map((item) => (
              <CatalogueCard key={item.name} item={item} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/catalogue"
              className="inline-block border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
            >
              See the full catalogue
            </Link>
          </div>
        </section>

        {/* Promo */}
        <section className="bg-sand">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-2">
            <img
              src={promoTraining}
              alt="Chefs plating dishes during a culinary session"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
            <div>
              <p className="text-xs tracking-[0.3em] text-primary uppercase">
                Starter Kit
              </p>
              <h2 className="mt-4 font-display text-5xl leading-tight font-bold">
                Apron + Knife Roll
                <br />
                30% Off
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Everything a new cook needs on day one: a cross-back apron, a
                four-piece tool set and a rolled canvas carrier.
              </p>
              <a
                href={whatsappLink(
                  "Hello Maison Tablier, I'd like the Starter Kit (Apron + Knife Roll) at 30% off.",
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-foreground px-8 py-3 text-xs tracking-[0.2em] text-background uppercase"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Order the Kit
              </a>
            </div>
          </div>
        </section>

        {/* Trends */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-center font-display text-3xl tracking-[0.15em] uppercase">
            Worn in the Kitchen
          </h2>
          <div className="mx-auto mt-2 h-px w-16 bg-primary" />
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {trends.map((t) => (
              <article key={t.name} className="text-center">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg">{t.name}</h3>
                <div className="mt-1 flex items-center justify-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.price}</p>
                <a
                  href={whatsappLink(`Hello Maison Tablier, I'd like to order the ${t.name}.`)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-block border border-foreground px-6 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
                >
                  Order on WhatsApp
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Our kitchen preview */}
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-center font-display text-3xl tracking-[0.15em] uppercase">
              Our Kitchen
            </h2>
            <div className="mx-auto mt-2 h-px w-16 bg-primary" />
            <p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted-foreground">
              Local Nigerian classics and continental plates, cooked and taught in
              our own kitchen.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {kitchenPreview.map((d) => (
                <figure key={d.name}>
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="aspect-square w-full object-cover"
                  />
                  <figcaption className="mt-3 font-display text-lg">{d.name}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/kitchen"
                className="inline-block rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase"
              >
                Explore our kitchen
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-4xl">From the Journal</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Recipes, fabric notes and kitchen craft — one letter a month, no
            filler.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <button className="rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase">
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
