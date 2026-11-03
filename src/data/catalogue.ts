
export type CatalogueItem = {
  name: string;
  price: string;
  category: string;
  detail: string;
  img: string;
  /** Wide items take two columns on the four column catalogue grid. */
  wide?: boolean;
};

export const catalogue: CatalogueItem[] = [
  {
    name: "Personalised Bib Apron",
    price: "₦28,000",
    category: "Aprons",
    detail:
      "Tan cotton twill, adjustable straps with metal clips, embroidered with your name.",
    img: "/images/other/personalised-bib-apron.jpg",
  },
  {
    name: "Burgundy Twill Apron",
    price: "₦30,000",
    category: "Aprons",
    detail:
      "Rich burgundy twill with leather tabs, brass eyelets and a swivel clip.",
    img: "/images/other/burgundy-apron.jpg",
  },
  {
    name: "Denim Waist Apron",
    price: "₦18,000",
    category: "Aprons",
    detail:
      "Raw denim service length with contrast stitching and twin front pockets.",
    img: "/images/other/denim-waist-aprons.jpg",
  },
  {
    name: "Cross Back Apron",
    price: "₦32,000",
    category: "Aprons",
    detail:
      "Comfortable crossed straps that keep the weight off your neck all shift.",
    img: "/images/other/cross-back-apron.jpg",
  },
  {
    name: "Leather Trim Detail Pack",
    price: "₦12,000",
    category: "Chef Accessories",
    detail:
      "Leather pocket panels, strap tabs and clips to finish a custom apron.",
    img: "/images/other/leather-trim-details.jpg",
  },
  {
    name: "Wait Staff Uniform Set",
    price: "₦38,000",
    category: "Uniforms for Service Team",
    detail:
      "Branded tee with a denim waist apron, styled for service teams.",
    img: "/images/other/wait-staff-uniform.jpg",
  },
  {
    name: "Customized Branded T Shirt",
    price: "₦14,000",
    category: "Customized T Shirts",
    detail:
      "Soft cotton tee printed or embroidered with your restaurant's logo.",
    img: "/images/other/team-uniform-set.jpg",
  },
  {
    name: "Denim & Twill Bib Set",
    price: "₦34,000",
    category: "Aprons",
    detail:
      "A matched pair of raw denim and deep red twill, both with leather strap tabs.",
    img: "/images/products/denim-red-aprons.jpg",
  },
  {
    name: "Nitrous Oxide Cream Charger",
    price: "₦25,000",
    category: "Chef Accessories",
    detail:
      "Stainless steel siphon with a set of cream charger cartridges, for silky whipped creams, mousses and espumas.",
    img: "/img/tool-cream-charger.jpg",
    wide: true,
  },
  {
    name: "Oven Safe Silicone Molds",
    price: "₦7,000 to ₦15,000",
    category: "Kitchen Tools",
    detail:
      "Food grade silicone molds for muffins, loaves and fluted cakes. Non stick, easy release and safe at high oven temperatures.",
    img: "/img/tool-silicone-molds.jpg",
    wide: true,
  },
];

/** Products that span two columns on the catalogue grid (matched by name, so database rows widen too). */
export const WIDE_PRODUCT_NAMES = new Set([
  "Nitrous Oxide Cream Charger",
  "Oven Safe Silicone Molds",
]);
