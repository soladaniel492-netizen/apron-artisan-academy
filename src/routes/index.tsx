import { useMedia } from "@/lib/media";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Star } from "lucide-react";

import { AnimatedLine } from "@/components/animated-line";
import { CatalogueCard } from "@/components/catalogue-card";
import { PhotoCarousel } from "@/components/photo-carousel";
import { PriceList } from "@/components/price-list";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useProducts } from "@/lib/media";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chef Store | Chef Wears, Uniforms & Chef Accessories" },
      {
        name: "description",
        content:
          "Chef wears, service team uniforms, chef accessories and customized T shirts, made in Abuja with nationwide delivery. Order on WhatsApp.",
      },
      { property: "og:title", content: "Chef Store | Chef Wears & Uniforms" },
      {
        property: "og:description",
        content:
          "Chef jackets, aprons, uniforms and accessories made to order in Abuja. Nationwide delivery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://chefstore.ng/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://chefstore.ng/" }],
  }),
  component: Index,
});

const trends = [
  { name: "Personalised Bib Apron", price: "₦28,000", img: "/images/products/personalised-bib-apron.jpg" },
  { name: "Burgundy Twill Apron", price: "₦30,000", img: "/images/products/burgundy-apron.jpg" },
  { name: "Denim Waist Apron", price: "₦18,000", img: "/images/products/denim-waist-aprons.jpg" },
  { name: "Wait Staff Uniform Set", price: "₦38,000", img: "/images/products/wait-staff-uniform.jpg" },
];

const services = [
  "Chef Wears",
  "Uniforms for Service Team",
  "Chef Accessories",
  "Customized T Shirts",
  "Nationwide Delivery",
];

function Index() {
  const media = useMedia();
  const catalogue = useProducts();
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main id="main-content">
        <section className="overflow-hidden bg-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:py-16">
            <div>
              <p className="hero-eyebrow text-xs tracking-[0.35em] text-primary uppercase">Chef wears · Uniforms · Accessories</p>
              <h1 className="mt-6 font-display text-6xl leading-[0.95] font-bold md:text-7xl">
                <span className="sr-only">Elevate Your Kitchen.</span>
                <AnimatedLine text="Elevate Your" start={0.25} />
                <br />
                <span className="relative inline-block text-primary"><AnimatedLine text="Kitchen." start={0.75} /></span>
              </h1>
              <p className="hero-wipe mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Chef jackets, aprons, service team uniforms and accessories, cut, stitched and branded in Abuja, delivered nationwide.
              </p>
              <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-4">
                <Link to="/catalogue" className="hero-sheen rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase">View Catalogue</Link>
                <a href={whatsappLink("Hello Chef Store, I'd like to place an order.")} target="_blank" rel="noreferrer noopener" className="underline-sweep pb-1 text-xs tracking-[0.2em] uppercase">Order on WhatsApp</a>
              </div>
            </div>
            <div className="relative animate-fade-up">
              <video src={media("/images/videos/ceo-hero.mp4")} autoPlay loop muted playsInline preload="metadata" aria-label="Chef Store founder presenting chef uniforms, aprons and kitchen tools" className="relative mx-auto aspect-[9/12] w-full max-w-md rounded-t-full object-cover shadow-2xl" />
            </div>
          </div>
        </section>
        <section className="overflow-hidden border-y border-border bg-clay py-4"><div className="flex w-max animate-marquee gap-12 pr-12">{[...services, ...services, ...services, ...services].map((s, i) => <span key={`${s}-${i}`} className="flex items-center gap-12 text-[11px] tracking-[0.3em] text-clay-foreground uppercase">{s}<span className="h-1.5 w-1.5 rounded-full bg-primary" /></span>)}</div></section>
        <PhotoCarousel />
        <section className="mx-auto max-w-7xl px-6 py-16">
          <Reveal><h2 className="text-center font-display text-3xl tracking-[0.15em] uppercase">Catalogue</h2><p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted-foreground">Every piece is made to order. Tap any item to send us one WhatsApp message.</p></Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{catalogue.slice(0, 4).map((item, i) => <Reveal key={item.name} delay={i * 170}><CatalogueCard item={item} colorOnHover /></Reveal>)}</div>
        </section>
        <section className="bg-sand"><div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2"><Reveal><video src={media("/images/videos/apron-confidence.mp4")} autoPlay loop muted playsInline preload="metadata" aria-label="Chef Store aprons in use" className="aspect-[9/16] w-full max-w-sm rounded-sm object-cover shadow-xl md:justify-self-center" /></Reveal><Reveal delay={420}><h2 className="mt-4 font-display text-4xl leading-tight font-bold md:text-5xl">The right apron doesn't just complete your look.</h2><a href={whatsappLink("Hello Chef Store, I'd like to order an apron.")} target="_blank" rel="noreferrer noopener" className="mt-7 inline-flex items-center gap-2 rounded-sm bg-clay px-8 py-3 text-xs tracking-[0.2em] text-clay-foreground uppercase"><MessageCircle className="h-4 w-4" />Order yours</a></Reveal></div></section>
        <section className="mx-auto max-w-7xl px-6 py-16"><div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">{trends.map((t, i) => <Reveal key={t.name} delay={i * 170} className="text-center"><img src={media(t.img)} alt={t.name} loading="lazy" className="h-72 w-full object-cover object-top" /><h3 className="mt-4 font-display text-lg">{t.name}</h3><div className="mt-1 flex items-center justify-center gap-1 text-primary">{Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-3 w-3 fill-current" />)}</div><p className="mt-2 text-sm text-muted-foreground">{t.price}</p><a href={whatsappLink(`Hello Chef Store, I'd like to order the ${t.name}.`)} target="_blank" rel="noreferrer noopener" className="mt-3 inline-block border border-foreground px-6 py-2 text-[10px] tracking-[0.2em] uppercase">Order on WhatsApp</a></Reveal>)}</div></section>
        <div className="bg-cream"><PriceList /></div>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2"><Reveal><h2 className="mt-4 font-display text-4xl leading-tight font-bold md:text-5xl">Precision on the plate</h2><Link to="/kitchen" className="mt-7 inline-block rounded-sm bg-teal-deep px-8 py-3 text-xs tracking-[0.2em] text-clay-foreground uppercase">Into our kitchen</Link></Reveal><Reveal><video src={media("/images/videos/plating-kit.mp4")} autoPlay loop muted playsInline preload="metadata" aria-label="Professional chef plating kit" className="aspect-[9/16] w-full max-w-sm rounded-sm object-cover shadow-xl md:justify-self-center" /></Reveal></section>
      </main>
      <SiteFooter />
    </div>
  );
}
