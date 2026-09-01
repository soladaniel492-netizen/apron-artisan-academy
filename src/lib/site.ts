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
