export const WHATSAPP_NUMBER = "2348012345678";

export const ADDRESS = "Road 16, House 15, Efab Estate, Lokogoma, Abuja";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function orderLink(item: string, price?: string) {
  return whatsappLink(
    `Hello Chef Store, I'd like to order: ${item}${price ? ` (${price})` : ""}.`,
  );
}

export const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/chefstore.ng" },
  { name: "Facebook", href: "https://facebook.com/chefstore.ng" },
  { name: "LinkedIn", href: "https://linkedin.com/company/chefstore-ng" },
  { name: "Threads", href: "https://threads.net/@chefstore.ng" },
] as const;

/**
 * TRAINING PAGE SETTINGS — edit these two things to update the page.
 * 1. TRAINING_FORM_URL: paste your Google Form link here.
 * 2. TRAINING_BANNER: swap the two banner images (any image URL or asset pointer url).
 */
export const TRAINING_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf-chef-store-training-placeholder/viewform";

export const TRAINING_BANNER = {
  eyebrow: "Chef Store Academy",
  title: "Train Like the Line Depends on You",
  subtitle:
    "Small classes. Working chefs. A kitchen that runs at real service pace.",
  ctaLabel: "Register on Google Form",
} as const;
