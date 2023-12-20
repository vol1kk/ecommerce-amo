import assertNever from "@/utils/assertNever";
import { NavbarIcons } from "@/layouts/Sidebar/constants/NavbarCategories";
import { CartIcon, ManIcon, UnisexIcon, WomanIcon } from "@/components/Icons";

const genderClasses = "group-hover:fill-boldColor";

export default function getNavbarIcon(style: NavbarIcons) {
  switch (style) {
    case "woman":
      return <WomanIcon className={genderClasses} />;
    case "man":
      return <ManIcon className={genderClasses} />;
    case "unisex":
      return <UnisexIcon className={genderClasses} />;
    case "cart":
      return <CartIcon className="group-hover:[&>path]:stroke-boldColor" />;
    default:
      assertNever(style);
  }
}
