import { useEffect, useRef } from "react";
import { toast } from "sonner";

import { whatsappLink } from "@/lib/site";

type Nudge = {
  title: string;
  description: string;
  action: { label: string; message: string };
};

const WELCOME: Nudge = {
  title: "Welcome to Chef Store",
  description: "Chef wears, uniforms and training from Abuja, delivered nationwide. We're here if you need help.",
  action: { label: "Say hello", message: "Hello Chef Store, I just visited your website." },
};

const NUDGES: Nudge[] = [
  {
    title: "Need your name on your apron?",
    description: "Free embroidery on every personalised bib apron order this month.",
    action: { label: "Ask us", message: "Hello Chef Store, can I get my name embroidered on an apron?" },
  },
  {
    title: "Kitting out a whole team?",
    description: "Team uniform sets come with bulk pricing and matching branding.",
    action: { label: "Get a quote", message: "Hello Chef Store, I'd like a quote for team uniforms." },
  },
  {
    title: "Nationwide delivery",
    description: "We ship from Abuja to every state, usually within 2 to 4 working days.",
    action: { label: "Check delivery", message: "Hello Chef Store, how soon can you deliver to my location?" },
  },
  {
    title: "Not sure about sizing?",
    description: "Send us your measurements and we'll cut it to fit.",
    action: { label: "Chat with us", message: "Hello Chef Store, I need help with apron/uniform sizing." },
  },
  {
    title: "Culinary training",
    description: "Small classes with working chefs. Seats are limited each intake.",
    action: { label: "Reserve a seat", message: "Hello Chef Store, I'd like to join the next training class." },
  },
  {
    title: "Catering for an event?",
    description: "Local and continental menus, plated or in trays for large gatherings.",
    action: { label: "Plan a menu", message: "Hello Chef Store, I'd like to discuss catering for my event." },
  },
];

const FIRST_DELAY = 4000;
/** 30 seconds apart = at most two messages per minute. */
const INTERVAL = 30000;

/**
 * Gentle customer-service messages: a welcome first, then at most two per minute.
 * Edit WELCOME and NUDGES above to change what customers see.
 */
export function EngagementToasts() {
  const step = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number;

    const show = () => {
      const path = window.location.pathname;
      if (!path.startsWith("/admin") && !path.startsWith("/auth")) {
        const nudge = step.current === 0 ? WELCOME : NUDGES[(step.current - 1) % NUDGES.length]!;
        step.current += 1;
        toast(nudge.title, {
          description: nudge.description,
          duration: 7000,
          action: {
            label: nudge.action.label,
            onClick: () =>
              window.open(whatsappLink(nudge.action.message), "_blank", "noopener,noreferrer"),
          },
        });
      } else {
        toast.dismiss();
      }
      timer = window.setTimeout(show, INTERVAL);
    };

    timer = window.setTimeout(show, FIRST_DELAY);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
