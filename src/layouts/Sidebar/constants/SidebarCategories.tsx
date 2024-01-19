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
    name: "shop",
    icon: <CartIcon className="group-hover:[&>path]:stroke-boldColor" />,
    href: ITEM_PAGE,
  },
  {
    name: "men",
    icon: <ManIcon className={genderClasses} />,
    href: `${ITEM_PAGE}?category=men`,
  },
  {
    name: "women",
    icon: <WomanIcon className={genderClasses} />,
    href: `${ITEM_PAGE}?category=women`,
  },
  {
    name: "combos",
    icon: <UnisexIcon className={genderClasses} />,
    href: `${ITEM_PAGE}?category=combos`,
  },
] as const;
