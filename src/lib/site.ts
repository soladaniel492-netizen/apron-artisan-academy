export const WHATSAPP_NUMBER = "2348012345678";

export const ADDRESS = "Road 16, House 15, Efab Estate, Lokogoma, Abuja";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function orderLink(item: string, price?: string) {
  return whatsappLink(
    `Hello Maison Tablier, I'd like to order: ${item}${price ? ` (${price})` : ""}.`,
  );
}

export const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/maisontablier" },
  { name: "Facebook", href: "https://facebook.com/maisontablier" },
  { name: "LinkedIn", href: "https://linkedin.com/company/maisontablier" },
  { name: "Threads", href: "https://threads.net/@maisontablier" },
] as const;
