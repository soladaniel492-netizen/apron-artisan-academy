import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { whatsappLink } from "@/lib/site";

import promoTraining from "@/assets/promo-training.jpg";

const courses = [
  {
    title: "Knife Skills Intensive",
    meta: "1 day · Studio kitchen",
    price: "₦45,000",
    body: "Grips, cuts and sharpening drilled until they become muscle memory.",
  },
  {
    title: "Sauce & Stock Foundations",
    meta: "4 weeks · Evenings",
    price: "₦120,000",
    body: "Mother sauces, reductions and seasoning built from scratch each week.",
  },
  {
    title: "Pro Kitchen Bootcamp",
    meta: "8 weeks · Certificate",
    price: "₦320,000",
    body: "Line discipline, mise en place and service rhythm with working chefs.",
  },
  {
    title: "Local Cuisine Masterclass",
    meta: "2 days · Weekend",
    price: "₦75,000",
    body: "Jollof, egusi, suya and soups taught the way our elders cook them.",
  },
];

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Culinary Training & Classes | Maison Tablier" },
      {
        name: "description",
        content:
          "Chef-led culinary training in Abuja: knife skills, sauce foundations, pro kitchen bootcamp and local cuisine masterclasses.",
      },
      { property: "og:title", content: "Culinary Training | Maison Tablier" },
      {
        property: "og:description",
        content: "Hands-on cooking classes taught by working chefs.",
      },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <section className="bg-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.35em] text-primary uppercase">
                Training
              </p>
              <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
                Learn on a Real Line
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Small groups, working chefs, and a kitchen that runs like a
                restaurant. You cook every session — no watching from a stool.
              </p>
            </div>
            <img
              src={promoTraining}
              alt="Chefs teaching in the Maison Tablier kitchen"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((c) => (
              <article key={c.title} className="border border-border bg-card p-8">
                <p className="text-[10px] tracking-[0.25em] text-primary uppercase">
                  {c.meta}
                </p>
                <h2 className="mt-4 font-display text-3xl">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
                <p className="mt-4 text-sm font-medium">{c.price}</p>
                <a
                  href={whatsappLink(`Hello Maison Tablier, I'd like to join: ${c.title}.`)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-2 rounded-sm bg-olive px-6 py-3 text-[11px] tracking-[0.2em] text-background uppercase"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Reserve on WhatsApp
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
