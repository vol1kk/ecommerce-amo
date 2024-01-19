import { FeaturedCategory } from "@/layouts/Home";

export const FeaturedCategories = [
  {
    image: {
      src: "/featured/card-cozy.jpg",
      className: "card__cozy",
    },
    content: {
      href: "/",
      title: "cozy_title",
      subtitle: "cozy_subtitle",
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
      title: "breezy_title",
      subtitle: "breezy_subtitle",
      discount: 25,
    },
  },
] as const satisfies FeaturedCategory[];
