import { createFileRoute } from "@tanstack/react-router";

import { CatalogueCard } from "@/components/catalogue-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { catalogue } from "@/data/catalogue";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue — Chef Aprons & Culinary Items | Maison Tablier" },
      {
        name: "description",
        content:
          "Browse our apron and culinary item catalogue with photos and prices, and order any piece directly on WhatsApp.",
      },
      { property: "og:title", content: "Catalogue | Maison Tablier" },
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
          <div className="mx-auto max-w-7xl px-6 py-14 text-center">
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
              href={whatsappLink("Hello Maison Tablier, please send me your full catalogue.")}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-7 inline-block rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase"
            >
              Chat with us
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {catalogue.map((item) => (
              <CatalogueCard key={item.name} item={item} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
