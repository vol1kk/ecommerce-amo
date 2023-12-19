import { FeaturedCategory } from "@/components/Homepage";

const FeaturedCategories: FeaturedCategory[] = [
  {
    image: {
      src: "/featured/card-cozy.jpg",
      className: "card__cozy",
    },
    content: {
      href: "/",
      title: "High Coziness",
      subtitle: "Low Price",
      discount: 50,
    },
  },
  {
    image: {
      src: "/featured/card-summer.jpg",
      className: "card__summer",
    },
    content: {
      href: "/",
      title: "Breezy Summer Style",
      subtitle: "Beyoung Presents",
      discount: 25,
    },
  },
];

export default FeaturedCategories;
