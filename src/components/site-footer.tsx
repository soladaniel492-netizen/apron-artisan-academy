import { Link } from "@tanstack/react-router";
import { AtSign, Facebook, Instagram, Linkedin } from "lucide-react";

import { ADDRESS, SOCIALS } from "@/lib/site";

const icons = {
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
  Threads: AtSign,
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <img
            src={logo.url}
            alt="Chef Store logo"
            width={56}
            height={56}
            loading="lazy"
            className="h-14 w-14 rounded-sm object-contain"
          />
          <p className="mt-3 font-display text-2xl">Chef Store</p>
          <p className="mt-3 text-sm opacity-70">
            Chef wears, service team uniforms, chef accessories and customized
            t-shirts. Nationwide delivery from Abuja, Nigeria.
          </p>

          <div className="mt-5 flex items-center gap-4">
            {SOCIALS.map((s) => {
              const Icon = icons[s.name];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.name}
                  className="rounded-sm border border-background/25 p-2 transition-colors hover:bg-background hover:text-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-xs tracking-[0.25em] uppercase opacity-60">Shop</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>
              <Link to="/catalogue">Full Catalogue</Link>
            </li>
            <li>
              <Link to="/catalogue">Bib Aprons</Link>
            </li>
            <li>
              <Link to="/catalogue">Waist Aprons</Link>
            </li>
            <li>
              <Link to="/catalogue">Kitchen Linens</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs tracking-[0.25em] uppercase opacity-60">Learn</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>
              <Link to="/training">Knife Skills</Link>
            </li>
            <li>
              <Link to="/training">Sauce Foundations</Link>
            </li>
            <li>
              <Link to="/kitchen">Our Kitchen</Link>
            </li>
            <li>
              <Link to="/contact">Private Sessions</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs tracking-[0.25em] uppercase opacity-60">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>hello@chefstore.ng</li>
            <li>+234 801 234 5678</li>
            <li>{ADDRESS}</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-background/15 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Chef Store. All rights reserved.
      </p>
    </footer>
  );
}
