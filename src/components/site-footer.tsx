import { useMedia } from "@/lib/media";
import { Link } from "@tanstack/react-router";
import { AtSign, Facebook, Instagram, Linkedin } from "lucide-react";

import logo from "@/assets/chef-store-logo.jpg.asset.json";
import { Reveal } from "@/components/reveal";
import { ADDRESS, SOCIALS } from "@/lib/site";


const icons = {
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
  Threads: AtSign,
} as const;

export function SiteFooter() {
  const media = useMedia();
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <Reveal delay={0}>
          <img
            src={media(logo.url)}
            alt="Chef Store logo"
            width={56}
            height={56}
            loading="lazy"
            className="h-14 w-14 rounded-sm object-contain"
          />
          <p className="footer-brand mt-3 font-display text-2xl">Chef Store</p>
          <p className="footer-sub mt-3 text-sm opacity-70">
            Chef wears, service team uniforms, chef accessories and customized
            T shirts. Nationwide delivery from Abuja, Nigeria.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = icons[s.name];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.name}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-background/25 leading-none transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:bg-background hover:text-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </Reveal>
        <Reveal delay={140}>
          <h3 className="footer-heading text-xs tracking-[0.25em] uppercase opacity-60">Shop</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>
              <Link className="footer-link inline-block" to="/catalogue">Full Catalogue</Link>
            </li>
            <li>
              <Link className="footer-link inline-block" to="/catalogue">Bib Aprons</Link>
            </li>
            <li>
              <Link className="footer-link inline-block" to="/catalogue">Waist Aprons</Link>
            </li>
            <li>
              <Link className="footer-link inline-block" to="/catalogue">Kitchen Linens</Link>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={260}>
          <h3 className="footer-heading text-xs tracking-[0.25em] uppercase opacity-60">Learn</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>
              <Link className="footer-link inline-block" to="/training">Knife Skills</Link>
            </li>
            <li>
              <Link className="footer-link inline-block" to="/training">Sauce Foundations</Link>
            </li>
            <li>
              <Link className="footer-link inline-block" to="/kitchen">Our Kitchen</Link>
            </li>
            <li>
              <Link className="footer-link inline-block" to="/contact">Private Sessions</Link>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={380}>
          <h3 className="footer-heading text-xs tracking-[0.25em] uppercase opacity-60">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>hello@chefstore.ng</li>
            <li>+234 801 234 5678</li>
            <li>{ADDRESS}</li>
          </ul>
        </Reveal>
      </div>
      <p className="border-t border-background/15 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Chef Store. All rights reserved.
      </p>
    </footer>
  );
}
