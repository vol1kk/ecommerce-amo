import { NewArrival } from "@/layouts/Home";

export const NewArrivals = [
  {
    src: "/new/joggers.jpg",
    name: "joggers",
    href: "/",
  },
  {
    src: "/new/sleeve.jpg",
    name: "full_sleeve",
    href: "/",
  },
  {
    src: "/new/tshirt.jpg",
    name: "active_shirts",
    href: "/",
  },
  {
    src: "/new/urban-shirt.jpg",
    name: "urban_shirts",
    href: "/",
  },
] as const satisfies NewArrival[];

export default NewArrivals;
