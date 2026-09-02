export type PriceGroup = {
  group: string;
  items: { name: string; price: string }[];
};

export const chefWearsPricing: PriceGroup[] = [
  {
    group: "Jackets",
    items: [
      { name: "Double-breasted Chef Jacket with removeable buttons", price: "NGN 30,000" },
      { name: "Custom Chef Jacket", price: "NGN 25,000" },
    ],
  },
  {
    group: "Bottoms",
    items: [
      { name: "Combat Trousers", price: "NGN 22,000" },
      { name: "Plain Tailored Pants", price: "NGN 15,000" },
    ],
  },
  {
    group: "Head Wear",
    items: [
      { name: "Skull Cap", price: "NGN 4,000" },
      { name: "Scarf Hat", price: "NGN 4,000" },
    ],
  },
  {
    group: "Neck Wear",
    items: [{ name: "Neckerchief / Cravat", price: "NGN 1,500" }],
  },
];
