import { DiscountedItem } from "@/layouts/Home";

export const DiscountedUpper = [
  {
    image: {
      src: "/saving/hawaii.jpg",
      className: "card__hawaii__image",
    },
    content: {
      title: "hawaii_title",
      className: "",
      subtitle: "hawaii_subtitle",
      discount: 50,
    },
    isLimited: false,
  },
  {
    image: {
      src: "/saving/printed.jpg",
      className: "",
    },
    content: {
      title: "printed_title",
      className: "",
      subtitle: "printed_subtitle",
      discount: 40,
    },
    isLimited: true,
  },
  {
    image: {
      src: "/saving/joggers.jpg",
      className: "",
    },
    content: {
      title: "cargo_title",
      className: "card__content--black card__content--right",
      subtitle: "cargo_subtitle",
      discount: 60,
    },
    isLimited: false,
  },
] as const satisfies DiscountedItem[];

export const DiscountedBottom = [
  {
    image: {
      src: "/saving/urban-shirts.jpg",
    },
    content: {
      title: "urban_title",
      subtitle: "urban_subtitle",
      discount: 35,
    },
  },
  {
    image: {
      src: "/saving/oversized-tshirts.jpg",
    },
    content: {
      title: "oversized_title",
      subtitle: "oversized_subtitle",
      discount: 60,
    },
  },
] as const satisfies DiscountedItem[];
