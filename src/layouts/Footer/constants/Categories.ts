import { FooterCategory } from "@/layouts/Footer/types";

export const HelpCategory = {
  name: "help",
  links: [
    {
      name: "track",
      href: "/",
    },
    {
      name: "refunds",
      href: "/",
    },
    {
      name: "faq",
      href: "/",
    },
    {
      name: "career",
      href: "/",
    },
  ],
} as const satisfies FooterCategory;

export const InfoCategory = {
  name: "more",
  links: [
    {
      name: "terms",
      href: "/",
    },
    {
      name: "privacy",
      href: "/",
    },
    {
      name: "shipping",
      href: "/",
    },
  ],
} as const satisfies FooterCategory;
