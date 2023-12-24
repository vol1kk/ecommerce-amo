import { HeartIcon, OrdersIcon, UserIcon } from "@/components/common/Icons";
import { ACCOUNT_PAGE, ORDERS_PAGE, WISHLIST_PAGE } from "@/constants/routes";

export const AccountCategories = [
  {
    name: "My Info",
    href: ACCOUNT_PAGE,
    icon: <UserIcon />,
  },
  {
    name: "Orders",
    href: ORDERS_PAGE,
    icon: <OrdersIcon />,
  },
  {
    name: "Wishlist",
    href: WISHLIST_PAGE,
    icon: <HeartIcon />,
  },
] as const;
