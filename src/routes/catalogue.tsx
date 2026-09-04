import ceoVideo from "@/assets/ceo-kitchen-fit.mp4.asset.json";
import { createFileRoute } from "@tanstack/react-router";

import { CatalogueCard } from "@/components/catalogue-card";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { catalogue } from "@/data/catalogue";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue — Chef Aprons & Culinary Items | Chef Store" },
      {
        name: "description",
        content:
          "Browse our apron and culinary item catalogue with photos and prices, and order any piece directly on WhatsApp.",
      },
      { property: "og:title", content: "Catalogue | Chef Store" },
      {
        property: "og:description",
        content: "Aprons, knife rolls, chef whites and kitchen linens — order on WhatsApp.",
      },
    ],
  }),
  component: CataloguePage,
});

function CataloguePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <section className="bg-cream">
          <Reveal className="mx-auto max-w-7xl px-6 py-14 text-center" delay={120}>
            <p className="text-xs tracking-[0.35em] text-primary uppercase">
              Portfolio &amp; Catalogue
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
              Every Piece We Make
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Pick what you like, tap the WhatsApp button, and we'll confirm
              sizing, colour and delivery in the chat.
            </p>
            <a
              href={whatsappLink("Hello Chef Store, please send me your full catalogue.")}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-7 inline-block rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase"
            >
              Chat with us
            </a>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {catalogue.map((item, i) => (
              <Reveal key={item.name} delay={(i % 4) * 160}>
                <CatalogueCard item={item} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-sand">
          <Reveal className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
            <video
              src={ceoVideo.url}
              controls
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Chef Store founder showing kitchen fits"
              className="aspect-[9/16] w-full max-w-sm rounded-sm object-cover md:justify-self-center"
            />
            <div>
              <p className="text-xs tracking-[0.3em] text-primary uppercase">
                From our founder
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-bold">
                Which one are you choosing?
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Your kitchen fit deserves to look as good as it performs. Tell us
                the colour, fabric and branding you want and we'll make it.
              </p>
              <a
                href={whatsappLink("Hello Chef Store, I'd like a custom kitchen fit.")}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-7 inline-block rounded-sm bg-foreground px-8 py-3 text-xs tracking-[0.2em] text-clay-foreground uppercase"
              >
                Customise yours
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
