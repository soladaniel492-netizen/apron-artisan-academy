import catClassic from "@/assets/cat-classic.jpg";
import catLeather from "@/assets/cat-leather.jpg";
import catBistro from "@/assets/cat-bistro.jpg";
import catTools from "@/assets/cat-tools.jpg";
import catHat from "@/assets/cat-hat.jpg";
import catLinens from "@/assets/cat-linens.jpg";
import trend1 from "@/assets/trend-1.jpg";
import trend2 from "@/assets/trend-2.jpg";

export type CatalogueItem = {
  name: string;
  price: string;
  category: string;
  detail: string;
  img: string;
};

export const catalogue: CatalogueItem[] = [
  {
    name: "Classic Bib Apron",
    price: "₦28,000",
    category: "Aprons",
    detail: "Heavy charcoal canvas, adjustable strap, deep front pocket.",
    img: catClassic,
  },
  {
    name: "Leather Strap Apron",
    price: "₦52,000",
    category: "Aprons",
    detail: "Tan cotton twill with waxed leather cross-back straps.",
    img: catLeather,
  },
  {
    name: "Bistro Waist Apron",
    price: "₦18,000",
    category: "Aprons",
    detail: "Olive striped linen, twin pockets, service length.",
    img: catBistro,
  },
  {
    name: "Denim Cross-Back",
    price: "₦34,000",
    category: "Aprons",
    detail: "Washed denim with brass rivets, unisex fit.",
    img: trend1,
  },
  {
    name: "Rust Linen Baker Apron",
    price: "₦31,000",
    category: "Aprons",
    detail: "Soft washed linen that only gets better with flour.",
    img: trend2,
  },
  {
    name: "Knife Roll & Tool Set",
    price: "₦68,000",
    category: "Culinary Items",
    detail: "Chef knife, three carved wooden tools, rolled carrier.",
    img: catTools,
  },
  {
    name: "Chef Toque & Jacket",
    price: "₦42,000",
    category: "Culinary Items",
    detail: "Crisp double-breasted jacket with matching toque.",
    img: catHat,
  },
  {
    name: "Kitchen Linen Set",
    price: "₦16,000",
    category: "Culinary Items",
    detail: "Embroidered towels and an insulated oven mitt.",
    img: catLinens,
  },
];
