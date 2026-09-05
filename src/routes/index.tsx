import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Star } from "lucide-react";

import { CatalogueCard } from "@/components/catalogue-card";
import { PhotoCarousel } from "@/components/photo-carousel";
import { PriceList } from "@/components/price-list";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { catalogue } from "@/data/catalogue";
import { whatsappLink } from "@/lib/site";

import ceoHero from "@/assets/ceo-hero.mp4.asset.json";
import apronConfidence from "@/assets/apron-confidence.mp4.asset.json";
import platingKit from "@/assets/plating-kit.mp4.asset.json";
import trend1 from "@/assets/p-personalised.jpg.asset.json";
import trend2 from "@/assets/p-burgundy.jpg.asset.json";
import trend3 from "@/assets/p-denim-waist.jpg.asset.json";
import trend4 from "@/assets/p-waitstaff.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chef Store — Chef Wears, Uniforms & Chef Accessories" },
      {
        name: "description",
        content:
          "Chef wears, service team uniforms, chef accessories and customized t-shirts, made in Abuja with nationwide delivery. Order on WhatsApp.",
      },
      { property: "og:title", content: "Chef Store — Chef Wears & Uniforms" },
      {
        property: "og:description",
        content:
          "Chef jackets, aprons, uniforms and accessories made to order in Abuja. Nationwide delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const trends = [
  { name: "Personalised Bib Apron", price: "₦28,000", img: trend1.url },
  { name: "Burgundy Twill Apron", price: "₦30,000", img: trend2.url },
  { name: "Denim Waist Apron", price: "₦18,000", img: trend3.url },
  { name: "Wait Staff Uniform Set", price: "₦38,000", img: trend4.url },
];

const services = [
  "Chef Wears",
  "Uniforms for Service Team",
  "Chef Accessories",
  "Customized T-Shirts",
  "Nationwide Delivery",
];


function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="overflow-hidden bg-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:py-16">
            <div>
              <p className="hero-eyebrow text-xs tracking-[0.35em] text-primary uppercase">
                Chef wears · Uniforms · Accessories
              </p>
              <h1 className="mt-6 font-display text-6xl leading-[0.95] font-bold md:text-7xl">
                <span className="sr-only">Elevate Your Kitchen.</span>
                <AnimatedLine text="Elevate Your" start={0.25} />
                <br />
                <span className="relative inline-block text-primary">
                  <AnimatedLine text="Kitchen." start={0.75} />
                  <span
                    aria-hidden
                    className="hero-underline absolute -bottom-1 left-0 block h-[3px] w-full bg-primary"
                    style={{ animationDelay: "1.5s" }}
                  />
                </span>
              </h1>
              <p
                className="hero-wipe mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground"
                style={{ animationDelay: "1.35s" }}
              >
                Chef jackets, aprons, service team uniforms and accessories —
                cut, stitched and branded in Abuja, delivered nationwide.
              </p>
              <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:1.7s]">
                <Link
                  to="/catalogue"
                  className="hero-sheen rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:scale-105"
                >
                  View Catalogue
                </Link>
                <a
                  href={whatsappLink("Hello Chef Store, I'd like to place an order.")}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline-sweep pb-1 text-xs tracking-[0.2em] uppercase"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
            <div className="relative animate-fade-up [animation-delay:150ms]">
              <div className="absolute inset-x-6 top-10 bottom-0 animate-float rounded-t-full bg-sand" />
              <video
                src={ceoHero.url}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Chef Store founder presenting chef uniforms, aprons and kitchen tools"
                className="relative mx-auto aspect-[9/12] w-full max-w-md rounded-t-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Services marquee */}
        <section className="overflow-hidden border-y border-border bg-clay py-4">
          <div className="flex w-max animate-marquee gap-12 pr-12">
            {[...services, ...services, ...services, ...services].map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="flex items-center gap-12 text-[11px] tracking-[0.3em] text-clay-foreground uppercase"
              >
                {s}
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </section>

        {/* Carousel */}
        <PhotoCarousel />

        {/* Catalogue preview */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <Reveal>
            <h2 className="text-center font-display text-3xl tracking-[0.15em] uppercase">
              Catalogue
            </h2>
            <div className="mx-auto mt-2 h-px w-16 bg-primary" />
            <p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted-foreground">
              Every piece is made to order — tap any item to send us one WhatsApp
              message.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {catalogue.slice(0, 4).map((item, i) => (
              <Reveal key={item.name} delay={i * 170}>
                <CatalogueCard item={item} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center" delay={420}>
            <Link
              to="/catalogue"
              className="inline-block border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              See the full catalogue
            </Link>
          </Reveal>
        </section>

        {/* Promo — apron film */}
        <section className="bg-sand">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
            <Reveal>
              <video
                src={apronConfidence.url}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Chef Store aprons in use"
                className="aspect-[9/16] w-full max-w-sm rounded-sm object-cover shadow-xl md:justify-self-center"
              />
            </Reveal>
            <Reveal delay={420}>
              <p className="text-xs tracking-[0.3em] text-primary uppercase">
                Made for the line
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold md:text-5xl">
                The right apron doesn't
                <br />
                just complete your look.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                It helps you work with confidence, comfort and control —
                adjustable straps, leather trims, deep pockets and fabric that
                survives real service.
              </p>
              <a
                href={whatsappLink("Hello Chef Store, I'd like to order an apron.")}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-clay px-8 py-3 text-xs tracking-[0.2em] text-clay-foreground uppercase transition-transform duration-300 hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Order yours
              </a>
            </Reveal>
          </div>
        </section>

        {/* Trends */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <Reveal>
            <h2 className="text-center font-display text-3xl tracking-[0.15em] uppercase">
              Worn in the Kitchen
            </h2>
            <div className="mx-auto mt-2 h-px w-16 bg-primary" />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {trends.map((t, i) => (
              <Reveal key={t.name} delay={i * 170} className="text-center">
                <div className="hover-lift overflow-hidden bg-secondary">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="h-72 w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg">{t.name}</h3>
                <div className="mt-1 flex items-center justify-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3 w-3 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.price}</p>
                <a
                  href={whatsappLink(`Hello Chef Store, I'd like to order the ${t.name}.`)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-block border border-foreground px-6 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  Order on WhatsApp
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Price list */}
        <div className="bg-cream">
          <PriceList />
        </div>

        {/* Plating kit */}
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
          <Reveal>
            <p className="text-xs tracking-[0.3em] text-primary uppercase">
              Chef Accessories
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight font-bold md:text-5xl">
              Precision on the plate
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Our professional chef plating kit is made for chefs who believe
              presentation is part of the cooking — tweezers, spoons, brushes and
              moulds in one roll.
            </p>
            <Link
              to="/kitchen"
              className="mt-7 inline-block rounded-sm bg-teal-deep px-8 py-3 text-xs tracking-[0.2em] text-clay-foreground uppercase transition-transform duration-300 hover:scale-105"
            >
              Into our kitchen
            </Link>
          </Reveal>
          <Reveal delay={420}>
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
        </section>

        {/* Newsletter */}
        <section className="bg-clay">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <Reveal>
              <h2 className="font-display text-4xl text-clay-foreground">
                Stay in the loop
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-clay-foreground/75">
                New drops, restocks and price updates — one message a month.
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
                  className="flex-1 border border-clay-foreground/25 bg-transparent px-4 py-3 text-sm text-clay-foreground outline-none transition-colors focus:border-primary"
                />
                <button className="rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:scale-105">
                  Subscribe
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
