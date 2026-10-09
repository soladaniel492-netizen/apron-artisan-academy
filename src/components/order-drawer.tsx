import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag, Trash2, X } from "lucide-react";

import { useMedia } from "@/lib/media";
import { useOrderList } from "@/lib/order-list";
import { whatsappLink } from "@/lib/site";

export function OrderDrawer() {
  const { lines, open, setOpen, remove, clear, total, count } = useOrderList();
  const media = useMedia();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  return (
    <div className={`fixed inset-0 z-95 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-clay/45 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your order list"
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-card shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-primary uppercase">
              Your order
            </p>
            <h2 className="mt-1 font-display text-3xl">
              {count === 0 ? "Nothing saved yet" : `${count} item${count > 1 ? "s" : ""}`}
            </h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close order list"
            className="rounded-sm p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-muted-foreground/40" aria-hidden />
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Tap "Add to order" on any piece and it lands here. When you're ready,
                send the whole list to us in one WhatsApp message.
              </p>
              <Link
                to="/catalogue"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-sm border border-foreground px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                Browse the catalogue
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((line) => (
                <li
                  key={line.name}
                  className="flex animate-fade-up items-center gap-4 border-b border-border/60 pb-4"
                >
                  <img
                    src={media(line.img)}
                    alt={line.name}
                    loading="lazy"
                    className="h-20 w-16 shrink-0 rounded-sm object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-xl">{line.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {line.price}
                      {line.qty > 1 ? ` · x${line.qty}` : ""}
                    </p>
                  </div>
                  <button
                    onClick={() => remove(line.name)}
                    aria-label={`Remove ${line.name} from your order`}
                    className="rounded-sm p-2 text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <footer className="border-t border-border px-6 py-5">
            <div className="flex items-baseline justify-between">
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Estimated total
              </span>
              <span className="font-display text-3xl">{total}</span>
            </div>
            <a
              href={whatsappLink(useOrderListMessage())}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Send order on WhatsApp
            </a>
            <button
              onClick={clear}
              className="mt-3 w-full text-[10px] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-destructive"
            >
              Clear the list
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
