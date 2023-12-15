import { DiscountedItem } from "@/components/Homepage";

export const DiscountedUpper: DiscountedItem[] = [
  {
    image: {
      src: "/saving/hawaii.jpg",
      className: "card__hawaii__image",
    },
    content: {
      title: "Hawaiian Shirts",
      subtitle: "Dress up in summer vibe",
      discount: 50,
    },
    isLimited: false,
  },
  {
    image: {
      src: "/saving/printed.jpg",
    },
    content: {
      title: "Printed T-Shirts",
      subtitle: "New Designs Every Weak",
      discount: 40,
    },
    isLimited: true,
  },
  {
    image: {
      src: "/saving/joggers.jpg",
    },
    content: {
      title: "Cargo Joggers",
      className: "card__content--black card__content--right",
      subtitle: "Move with style & comfort",
      discount: 60,
    },
    isLimited: false,
  },
];

export const DiscountedBottom: DiscountedItem[] = [
  {
    image: {
      src: "/saving/urban-shirts.jpg",
    },
    content: {
      title: "Urban Shirts",
      subtitle: "Live in Comfort",
      discount: 35,
    },
  },
  {
    image: {
      src: "/saving/oversized-tshirts.jpg",
    },
    content: {
      title: "Oversized T-Shirts",
      subtitle: "Street Style Icon",
      discount: 60,
    },
  },
];
