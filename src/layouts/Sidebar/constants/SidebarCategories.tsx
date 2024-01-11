import { ITEM_PAGE } from "@/constants/routes";
import {
  ManIcon,
  CartIcon,
  WomanIcon,
  UnisexIcon,
} from "@/components/common/Icons";

const genderClasses = "group-hover:fill-boldColor";

export const SidebarCategories = [
  {
    name: "Shop",
    icon: <CartIcon className="group-hover:[&>path]:stroke-boldColor" />,
    href: ITEM_PAGE,
  },
  {
    name: "Men",
    icon: <ManIcon className={genderClasses} />,
    href: `${ITEM_PAGE}?category=men`,
  },
  {
    name: "Women",
    icon: <WomanIcon className={genderClasses} />,
    href: `${ITEM_PAGE}?category=women`,
  },
  {
    name: "Combos",
    icon: <UnisexIcon className={genderClasses} />,
    href: `${ITEM_PAGE}?category=combos`,
  },
] as const;

export type NavbarIcons = (typeof SidebarCategories)[number]["icon"];
