import { createFileRoute } from "@tanstack/react-router";
import { Heart, Search, ShoppingBag, Star, User } from "lucide-react";

import heroChef from "@/assets/hero-chef.jpg";
import catClassic from "@/assets/cat-classic.jpg";
import catLeather from "@/assets/cat-leather.jpg";
import catBistro from "@/assets/cat-bistro.jpg";
import catTools from "@/assets/cat-tools.jpg";
import promoTraining from "@/assets/promo-training.jpg";
import trend1 from "@/assets/trend-1.jpg";
import trend2 from "@/assets/trend-2.jpg";
import trend3 from "@/assets/trend-3.jpg";
import trend4 from "@/assets/trend-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Tablier — Chef Aprons, Culinary Tools & Training" },
      {
        name: "description",
        content:
          "Shop handcrafted chef aprons and culinary tools, and book hands-on culinary training with working chefs.",
      },
      { property: "og:title", content: "Maison Tablier — Chef Aprons & Culinary Craft" },
      {
        property: "og:description",
        content:
          "Handcrafted aprons, professional culinary tools and chef-led training classes.",
      },
    ],
  }),
  component: Index,
});

const categories = [
  { name: "Classic Bib", price: "$64", img: catClassic },
  { name: "Leather Strap", price: "$118", img: catLeather },
  { name: "Bistro Waist", price: "$42", img: catBistro },
  { name: "Knife & Tools", price: "$156", img: catTools },
];

const trends = [
  { name: "Denim Cross-Back", price: "$78", img: trend1 },
  { name: "Rust Linen Baker", price: "$86", img: trend2 },
  { name: "Charcoal Service", price: "$58", img: trend3 },
  { name: "Whites & Waist Set", price: "$132", img: trend4 },
];

const courses = [
  {
    title: "Knife Skills Intensive",
    meta: "1 day · Studio kitchen",
    body: "Grips, cuts and sharpening drilled until they become muscle memory.",
  },
  {
    title: "Sauce & Stock Foundations",
    meta: "4 weeks · Evenings",
    body: "Mother sauces, reductions and seasoning built from scratch each week.",
  },
  {
    title: "Pro Kitchen Bootcamp",
    meta: "8 weeks · Certificate",
    body: "Line discipline, mise en place and service rhythm with working chefs.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header>
        <div className="bg-clay py-2 text-center text-xs tracking-[0.2em] text-clay-foreground uppercase">
          Free stitching of your name on every apron
        </div>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <a href="#top" className="leading-none">
            <span className="block font-display text-2xl font-bold tracking-wide">
              Maison Tablier
            </span>
            <span className="block text-[10px] tracking-[0.35em] text-muted-foreground uppercase">
              Aprons &amp; Craft
            </span>
          </a>
          <ul className="hidden items-center gap-8 text-sm tracking-wide md:flex">
            {["Aprons", "Tools", "Training", "Journal", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 text-muted-foreground">
            <Search className="h-5 w-5" aria-hidden />
            <User className="hidden h-5 w-5 sm:block" aria-hidden />
            <Heart className="hidden h-5 w-5 sm:block" aria-hidden />
            <ShoppingBag className="h-5 w-5 text-primary" aria-hidden />
          </div>
        </nav>
      </header>

      <main id="top">
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
                <a
                  href="#aprons"
                  className="rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
                >
                  Shop Aprons
                </a>
                <a
                  href="#training"
                  className="border-b border-foreground pb-1 text-xs tracking-[0.2em] uppercase"
                >
                  Book Training
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-x-6 bottom-0 top-10 rounded-t-full bg-sand" />
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

        {/* Categories */}
        <section id="aprons" className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-center font-display text-3xl tracking-[0.15em] uppercase">
            The Apron Collection
          </h2>
          <div className="mx-auto mt-2 h-px w-16 bg-primary" />
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {categories.map((c) => (
              <article key={c.name} className="group">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={700}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.price}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Promo */}
        <section id="tools" className="bg-sand">
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
                href="#tools"
                className="mt-7 inline-block rounded-sm bg-foreground px-8 py-3 text-xs tracking-[0.2em] text-background uppercase"
              >
                Shop the Kit
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
                <button className="mt-3 border border-foreground px-6 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background">
                  Add to Bag
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Training */}
        <section id="training" className="bg-cream">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-center font-display text-3xl tracking-[0.15em] uppercase">
              Culinary Training
            </h2>
            <div className="mx-auto mt-2 h-px w-16 bg-primary" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {courses.map((c) => (
                <article key={c.title} className="border border-border bg-card p-8">
                  <p className="text-[10px] tracking-[0.25em] text-primary uppercase">
                    {c.meta}
                  </p>
                  <h3 className="mt-4 font-display text-2xl">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-block border-b border-foreground pb-1 text-xs tracking-[0.2em] uppercase"
                  >
                    Reserve a seat
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Journal / newsletter */}
        <section id="journal" className="mx-auto max-w-3xl px-6 py-16 text-center">
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

      <footer id="contact" className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl">Maison Tablier</p>
            <p className="mt-3 text-sm opacity-70">
              Aprons, culinary tools and chef-led training. Made for the people
              behind the pass.
            </p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase opacity-60">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>Bib Aprons</li>
              <li>Waist Aprons</li>
              <li>Knife Rolls</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase opacity-60">Learn</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>Knife Skills</li>
              <li>Sauce Foundations</li>
              <li>Pro Bootcamp</li>
              <li>Private Sessions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase opacity-60">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>hello@maisontablier.com</li>
              <li>+234 801 234 5678</li>
              <li>Studio 4, Lagos</li>
            </ul>
          </div>
        </div>
        <p className="border-t border-background/15 py-5 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Maison Tablier. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
