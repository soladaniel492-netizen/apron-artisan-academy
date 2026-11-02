import waitstaff from "@/assets/p-waitstaff.jpg.asset.json";
import denimWaist from "@/assets/p-denim-waist.jpg.asset.json";
import teamSet from "@/assets/p-team-set.jpg.asset.json";
import crossback from "@/assets/p-crossback.jpg.asset.json";
import personalised from "@/assets/p-personalised.jpg.asset.json";
import leatherDetails from "@/assets/p-leather-details.jpg.asset.json";
import burgundy from "@/assets/p-burgundy.jpg.asset.json";
import denimRed from "@/assets/denim-red-aprons.jpg.asset.json";

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
    img: personalised.url,
  },
  {
    name: "Burgundy Twill Apron",
    price: "₦30,000",
    category: "Aprons",
    detail:
      "Rich burgundy twill with leather tabs, brass eyelets and a swivel clip.",
    img: burgundy.url,
  },
  {
    name: "Denim Waist Apron",
    price: "₦18,000",
    category: "Aprons",
    detail:
      "Raw denim service length with contrast stitching and twin front pockets.",
    img: denimWaist.url,
  },
  {
    name: "Cross Back Apron",
    price: "₦32,000",
    category: "Aprons",
    detail:
      "Comfortable crossed straps that keep the weight off your neck all shift.",
    img: crossback.url,
  },
  {
    name: "Leather Trim Detail Pack",
    price: "₦12,000",
    category: "Chef Accessories",
    detail:
      "Leather pocket panels, strap tabs and clips to finish a custom apron.",
    img: leatherDetails.url,
  },
  {
    name: "Wait Staff Uniform Set",
    price: "₦38,000",
    category: "Uniforms for Service Team",
    detail:
      "Branded tee with a denim waist apron, styled for service teams.",
    img: waitstaff.url,
  },
  {
    name: "Customized Branded T Shirt",
    price: "₦14,000",
    category: "Customized T Shirts",
    detail:
      "Soft cotton tee printed or embroidered with your restaurant's logo.",
    img: teamSet.url,
  },
  {
    name: "Denim & Twill Bib Set",
    price: "₦34,000",
    category: "Aprons",
    detail:
      "A matched pair of raw denim and deep red twill, both with leather strap tabs.",
    img: denimRed.url,
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
