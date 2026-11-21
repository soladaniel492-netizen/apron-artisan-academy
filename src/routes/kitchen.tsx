import { useMedia } from "@/lib/media";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { FoodStrip } from "@/components/food-strip";
import { InstagramWall } from "@/components/instagram-wall";
import { KitchenPass } from "@/components/kitchen-pass";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { whatsappLink } from "@/lib/site";

const menu = [
  { course: "Continental", blurb: "European and Asian technique, precise seasoning and clean plating.", dishes: [
    { name: "Chilli Garlic Stir Fry Noodles", img: "/images/food/dish-noodles.jpg", detail: "Wok tossed noodles with spring onion, tomato and chilli oil." },
    { name: "Herb Roasted Chicken", img: "/images/food/dish-grilled-chicken.jpg", detail: "Marinated drumsticks roasted with garlic, lime and coriander." },
    { name: "Seared Salmon, Beurre Blanc", img: "/images/food/dish-salmon.jpg", detail: "Crisp skin salmon with asparagus and a classic butter sauce." },
    { name: "Hand Rolled Tagliatelle", img: "/images/food/dish-pasta.jpg", detail: "Fresh egg pasta with slow cooked tomato and basil sugo." },
  ]},
  { course: "Local", blurb: "Deep, slow Nigerian flavours cooked the way they are meant to be cooked.", dishes: [
    { name: "Egusi & Assorted Meat", img: "/images/food/local-egusi.jpg", detail: "Melon seed stew simmered with assorted meats, ponmo and shaki." },
    { name: "Efo Riro", img: "/images/food/local-efo-riro.jpg", detail: "Rich spinach stew with peppers, locust bean and assorted cuts." },
    { name: "Jollof, Plantain & Grilled Chicken", img: "/images/food/local-jollof-plantain.jpg", detail: "Smoky party jollof with sweet plantain and peppered chicken." },
    { name: "Party Jollof in the Pan", img: "/images/food/local-jollof-pan.jpg", detail: "Long grain rice cooked over firewood heat with tender beef." },
  ]},
  { course: "Drinks", blurb: "House pours, chilled and made fresh for every service.", dishes: [
    { name: "Chilled Zobo", img: "/images/food/drink-zobo.jpg", detail: "Hibiscus steeped with spice, served over ice with mint." },
    { name: "Chapman", img: "/images/food/drink-chapman.jpg", detail: "The classic Nigerian cooler with citrus and cucumber." },
    { name: "Kunu Aya", img: "/images/food/drink-kunu.jpg", detail: "Tiger nut milk blended with dates, chilled and smooth." },
    { name: "House Fruit Punch", img: "/images/food/drink-punch.jpg", detail: "Pineapple, citrus and mint over ice, made fresh daily." },
  ]},
];

export const Route = createFileRoute("/kitchen")({
  head: () => ({
    meta: [
      { title: "Our Kitchen | Local to Continental Dishes | Chef Store" },
      { name: "description", content: "Discover local Nigerian classics and continental plates cooked in the Chef Store kitchen." },
      { property: "og:title", content: "Our Kitchen | Chef Store" },
      { property: "og:description", content: "Local Nigerian classics and continental plates from our kitchen." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://chefstore.ng/kitchen" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://chefstore.ng/kitchen" }],
  }),
  component: KitchenPage,
});

function KitchenPage() {
  const media = useMedia();
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main id="main-content">
        <section className="relative overflow-hidden bg-cream"><div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32"><p className="text-[10px] tracking-[0.5em] text-primary uppercase">Our Kitchen</p><h1 className="mt-6 font-display text-5xl leading-[1.05] font-bold md:text-7xl">From Local Pots to<br /><span className="text-primary">Continental Plates</span></h1></div></section>
        <FoodStrip />
        <section className="mx-auto max-w-7xl px-6 py-16">{menu.map((group, gi) => <div key={group.course} className={gi > 0 ? "mt-20" : ""}><Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5"><div><p className="text-[10px] tracking-[0.35em] text-teal-deep uppercase">Menu {String(gi + 1).padStart(2, "0")}</p><h2 className="mt-2 font-display text-4xl md:text-5xl">{group.course}</h2></div><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{group.blurb}</p></Reveal><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{group.dishes.map((d, i) => <Reveal key={d.name} delay={i * 160} className="group overflow-hidden rounded-sm bg-card"><div className="relative aspect-[3/4] overflow-hidden"><img src={media(d.img)} alt={d.name} loading="lazy" className="h-full w-full object-cover" /></div><div className="border-t border-border/60 px-5 py-5"><h3 className="font-display text-2xl">{d.name}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.detail}</p></div></Reveal>)}</div></div>)}</section>
        <KitchenPass /><InstagramWall />
        <section className="bg-sand"><div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2"><Reveal><video src={media("/images/videos/plating-kit.mp4")} autoPlay loop muted playsInline preload="metadata" aria-label="Professional chef plating kit" className="aspect-[9/16] w-full max-w-sm rounded-sm object-cover shadow-xl md:justify-self-center" /></Reveal><Reveal><h2 className="font-display text-4xl md:text-5xl">Cook it, or let us cook it</h2><a href={whatsappLink("Hello Chef Store, I'd like to talk about your kitchen menu / plating kit.")} target="_blank" rel="noreferrer noopener" className="mt-7 inline-flex items-center gap-2 rounded-sm bg-teal-deep px-8 py-3 text-xs tracking-[0.2em] text-clay-foreground uppercase"><MessageCircle className="h-4 w-4" />Talk to the kitchen</a></Reveal></div></section>
      </main><SiteFooter />
    </div>
  );
}
