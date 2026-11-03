import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/lib/site";

/** Floating WhatsApp order button — shown on the catalogue page only. */
export function WhatsappFab() {
  return (
    <a
      href={whatsappLink("Hello Chef Store, I saw your catalogue and I'd like to order.")}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with Chef Store on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex items-center md:right-8 md:bottom-8"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-teal-deep/35 motion-reduce:animate-none [animation:ping_2.6s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <span className="mr-0 max-w-0 overflow-hidden rounded-full bg-foreground text-[11px] tracking-[0.2em] whitespace-nowrap text-clay-foreground uppercase opacity-0 transition-all duration-500 group-hover:mr-3 group-hover:max-w-[10rem] group-hover:px-4 group-hover:py-2 group-hover:opacity-100">
        Chat with us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-teal-deep text-clay-foreground shadow-xl transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" aria-hidden />
      </span>
    </a>
  );
}
