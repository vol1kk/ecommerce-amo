import { SHOP_PAGE } from "@/constants/routes";

export const NavbarCategories = [
  {
    name: "Shop",
    icon: "cart",
    href: `${SHOP_PAGE}`,
  },
  {
    name: "Men",
    icon: "man",
    href: `${SHOP_PAGE}/men`,
  },
  {
    name: "Women",
    icon: "woman",
    href: `${SHOP_PAGE}/women`,
  },
  {
    name: "Combos",
    icon: "unisex",
    href: `${SHOP_PAGE}/combos`,
  },
] as const;

export type NavbarIcons = (typeof NavbarCategories)[number]["icon"];
