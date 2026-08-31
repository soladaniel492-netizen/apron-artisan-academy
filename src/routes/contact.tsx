import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ADDRESS, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Studio Location | Maison Tablier" },
      {
        name: "description",
        content:
          "Visit our studio at Road 16, House 15, Efab Estate, Lokogoma, Abuja, or reach us on WhatsApp, phone and email.",
      },
      { property: "og:title", content: "Contact | Maison Tablier" },
      {
        property: "og:description",
        content: "Studio at Road 16, House 15, Efab Estate, Lokogoma, Abuja.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <section className="bg-cream">
          <div className="mx-auto max-w-3xl px-6 py-14 text-center">
            <p className="text-xs tracking-[0.35em] text-primary uppercase">Contact</p>
            <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">
              Come to the Studio
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Fittings, pickups and class bookings happen at our Lokogoma studio.
              Message ahead so we keep your size ready.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">Details</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>+234 801 234 5678</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>hello@maisontablier.com</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>Mon – Sat, 9am – 6pm</span>
              </li>
            </ul>
            <a
              href={whatsappLink("Hello Maison Tablier, I'd like to visit the studio.")}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-olive px-8 py-3 text-xs tracking-[0.2em] text-background uppercase"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chat on WhatsApp
            </a>

            <form
              className="mt-10 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                required
                placeholder="Your name"
                aria-label="Your name"
                className="w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <textarea
                required
                rows={4}
                placeholder="What do you need?"
                aria-label="Message"
                className="w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <button className="rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase">
                Send message
              </button>
            </form>
          </div>

          <div>
            <h2 className="font-display text-3xl">Find Us</h2>
            <div className="mt-6 overflow-hidden border border-border">
              <iframe
                title="Map to Maison Tablier studio, Road 16 House 15 Efab Estate Lokogoma"
                src="https://www.google.com/maps?q=Efab%20Estate%20Lokogoma%20Abuja&output=embed"
                width="100%"
                height="480"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Efab+Estate+Lokogoma+Abuja"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-block border-b border-foreground pb-1 text-xs tracking-[0.2em] uppercase"
            >
              Open in Google Maps
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
