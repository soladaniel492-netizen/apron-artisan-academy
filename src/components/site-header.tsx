import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Catalogue", to: "/catalogue" },
  { label: "Our Kitchen", to: "/kitchen" },
  { label: "Training", to: "/training" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  return (
    <header>
      <div className="bg-clay py-2 text-center text-xs tracking-[0.2em] text-clay-foreground uppercase">
        Free name stitching on every apron · Order on WhatsApp
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Link to="/" className="leading-none">
          <span className="block font-display text-2xl font-bold tracking-wide">
            ChefStore NG
          </span>
          <span className="block text-[10px] tracking-[0.35em] text-muted-foreground uppercase">
            Aprons &amp; Craft
          </span>
        </Link>
        <ul className="hidden items-center gap-8 text-sm tracking-wide md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 text-muted-foreground">
          <Search className="h-5 w-5" aria-hidden />
          <User className="hidden h-5 w-5 sm:block" aria-hidden />
          <Link to="/catalogue" aria-label="Catalogue">
            <ShoppingBag className="h-5 w-5 text-primary" aria-hidden />
          </Link>
        </div>
      </nav>
      <ul className="flex items-center justify-center gap-6 border-t border-border py-3 text-xs tracking-wide md:hidden">
        {links.slice(1).map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
