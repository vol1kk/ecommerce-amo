import { SHOP_PAGE } from "@/constants/routes";
import {
  CartIcon,
  ManIcon,
  UnisexIcon,
  WomanIcon,
} from "@/components/common/Icons";

const genderClasses = "group-hover:fill-boldColor";

export const SidebarCategories = [
  {
    name: "Shop",
    icon: <CartIcon className="group-hover:[&>path]:stroke-boldColor" />,
    href: `${SHOP_PAGE}`,
  },
  {
    name: "Men",
    icon: <ManIcon className={genderClasses} />,
    href: `${SHOP_PAGE}/men`,
  },
  {
    name: "Women",
    icon: <WomanIcon className={genderClasses} />,
    href: `${SHOP_PAGE}/women`,
  },
  {
    name: "Combos",
    icon: <UnisexIcon className={genderClasses} />,
    href: `${SHOP_PAGE}/combos`,
  },
] as const;

export type NavbarIcons = (typeof SidebarCategories)[number]["icon"];
