import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ClipboardList, MessageCircle } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BannerCarousel } from "@/components/banner-carousel";
import { ScrollGrow, ScrollShape } from "@/components/scroll-grow";
import { Reveal } from "@/components/reveal";
import { TRAINING_BANNER, TRAINING_FORM_URL, whatsappLink } from "@/lib/site";

import ceoKitchenFit from "@/assets/ceo-kitchen-fit.mp4.asset.json";
import teamSet from "@/assets/p-team-set.jpg.asset.json";
import waitstaff from "@/assets/p-waitstaff.jpg.asset.json";
import personalised from "@/assets/p-personalised.jpg.asset.json";

/** Swap these two images to change the training banner. */
const bannerSlides = [
  { img: teamSet.url, alt: "Chef Store service team uniforms" },
  { img: waitstaff.url, alt: "Chef Store wait staff aprons" },
] as const;

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

const steps = [
  { n: "01", t: "Pick a class", d: "Choose the track that matches where you are." },
  { n: "02", t: "Fill the form", d: "Register through the Google Form — takes two minutes." },
  { n: "03", t: "Get your slot", d: "We confirm on WhatsApp with dates and kit list." },
  { n: "04", t: "Cook every session", d: "You are on the line from day one, never on a stool." },
];

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Culinary Training & Classes | Chef Store" },
      {
        name: "description",
        content:
          "Chef-led culinary training in Abuja: knife skills, sauce foundations, pro kitchen bootcamp and local cuisine masterclasses. Register online.",
      },
      { property: "og:title", content: "Culinary Training | Chef Store" },
      {
        property: "og:description",
        content: "Hands-on cooking classes taught by working chefs in Abuja.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        {/* Banner carousel */}
        <BannerCarousel
          slides={bannerSlides}
          className="h-[460px] md:h-[600px]"
        >
          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
            <p className="animate-fade-up text-[11px] tracking-[0.4em] text-primary uppercase">
              {TRAINING_BANNER.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl animate-fade-up font-display text-5xl leading-[0.95] font-bold text-clay-foreground md:text-7xl">
              {TRAINING_BANNER.title}
            </h1>
            <p className="mt-5 max-w-md animate-fade-up text-sm leading-relaxed text-clay-foreground/80">
              {TRAINING_BANNER.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={TRAINING_FORM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:scale-105"
              >
                <ClipboardList className="h-4 w-4" aria-hidden />
                {TRAINING_BANNER.ctaLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
              </a>
              <a
                href={whatsappLink("Hello Chef Store, I'd like details on your training classes.")}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-sm border border-clay-foreground/40 px-7 py-4 text-[11px] tracking-[0.2em] text-clay-foreground uppercase transition-colors duration-300 hover:bg-clay-foreground/10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </BannerCarousel>

        {/* Scroll-driven statement type + shapes */}
        <section className="relative overflow-hidden bg-cream py-24 md:py-36">
          <ScrollShape
            speed={0.28}
            spin={0.05}
            className="top-10 -left-16 h-64 w-64 rounded-full border border-primary/40"
          />
          <ScrollShape
            speed={-0.22}
            className="top-40 right-6 h-40 w-40 bg-teal-bright/25 md:h-64 md:w-64"
          />
          <ScrollShape
            speed={0.4}
            spin={0.12}
            className="bottom-8 left-1/3 h-24 w-24 rotate-45 border-2 border-teal-deep/40"
          />

          <div className="relative mx-auto max-w-7xl px-6">
            <ScrollGrow from={0.55} swipe={-220}>
              <p className="font-display text-6xl leading-[0.9] font-bold md:text-[8rem]">
                Heat.
              </p>
            </ScrollGrow>
            <ScrollGrow from={0.6} swipe={200} className="md:pl-40">
              <p className="font-display text-6xl leading-[0.9] font-bold text-primary md:text-[8rem]">
                Repetition.
              </p>
            </ScrollGrow>
            <ScrollGrow from={0.5} swipe={-160} rotate={2} className="md:pl-16">
              <p className="font-display text-6xl leading-[0.9] font-bold text-teal-deep md:text-[8rem]">
                Confidence.
              </p>
            </ScrollGrow>
            <Reveal className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground">
              Every class is built on the same loop — you cook it, we correct it,
              you cook it again until your hands know it without you thinking.
            </Reveal>
          </div>
        </section>

        {/* Courses */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Reveal>
            <p className="text-[10px] tracking-[0.35em] text-primary uppercase">
              Classes
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Choose Your Track
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {courses.map((c, i) => (
              <Reveal
                key={c.title}
                as="article"
                delay={i * 90}
                className="hover-lift group relative overflow-hidden border border-border bg-card p-8"
              >
                <span className="absolute -top-10 -right-6 font-display text-[7rem] text-foreground/[0.04] transition-transform duration-700 group-hover:-translate-y-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[10px] tracking-[0.25em] text-primary uppercase">
                  {c.meta}
                </p>
                <h3 className="mt-4 font-display text-3xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
                <p className="mt-4 text-sm font-medium">{c.price}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={TRAINING_FORM_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:scale-105"
                  >
                    <ClipboardList className="h-4 w-4" aria-hidden />
                    Register
                  </a>
                  <a
                    href={whatsappLink(`Hello Chef Store, I'd like to join: ${c.title}.`)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-sm bg-teal-deep px-6 py-3 text-[11px] tracking-[0.2em] text-clay-foreground uppercase transition-transform duration-300 hover:scale-105"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    WhatsApp
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How it works + video */}
        <section className="relative overflow-hidden bg-clay py-16 text-clay-foreground md:py-24">
          <ScrollShape
            speed={-0.3}
            className="top-16 right-1/4 h-52 w-52 rounded-full bg-primary/15 blur-2xl"
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <ScrollGrow from={0.7} swipe={-80}>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  How It Works
                </h2>
              </ScrollGrow>
              <ol className="mt-8 space-y-6">
                {steps.map((s, i) => (
                  <Reveal
                    key={s.n}
                    as="li"
                    delay={i * 100}
                    className="flex gap-5 border-b border-clay-foreground/15 pb-5"
                  >
                    <span className="font-display text-2xl text-primary">{s.n}</span>
                    <div>
                      <p className="text-sm tracking-[0.18em] uppercase">{s.t}</p>
                      <p className="mt-1 text-sm text-clay-foreground/70">{s.d}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
            <Reveal className="justify-self-center">
              <video
                src={ceoKitchenFit.url}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Chef Store founder in a kitchen fit"
                className="aspect-[9/16] w-full max-w-sm rounded-sm object-cover shadow-2xl"
              />
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <ScrollShape
            speed={0.25}
            spin={0.08}
            className="-top-6 left-8 h-32 w-32 rotate-12 border border-primary/40"
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <ScrollGrow from={0.6} swipe={120}>
                <h2 className="font-display text-4xl leading-[0.95] font-bold md:text-6xl">
                  Seats fill fast.
                  <span className="block text-primary">Register today.</span>
                </h2>
              </ScrollGrow>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Registration runs through our Google Form so we can plan stations,
                kits and aprons for every intake.
              </p>
              <a
                href={TRAINING_FORM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:scale-105"
              >
                <ClipboardList className="h-4 w-4" aria-hidden />
                Open Registration Form
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
              </a>
            </div>
            <Reveal className="hover-lift overflow-hidden">
              <img
                src={personalised.url}
                alt="Personalised Chef Store bib apron with embroidered name"
                loading="lazy"
                className="h-[420px] w-full object-cover object-top"
              />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
