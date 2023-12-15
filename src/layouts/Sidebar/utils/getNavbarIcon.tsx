import { CartIcon, ManIcon, UnisexIcon, WomanIcon } from "@/components/Icons";

export default function getNavbarIcon(style: string) {
  const genderClasses = "group-hover:fill-boldColor";

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
      throw new Error("Unexpected icon");
  }
}
