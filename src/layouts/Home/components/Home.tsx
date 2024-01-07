import { ReactNode } from "react";

import HomeArrivals from "@/layouts/Home/components/HomeArrivals";
import HomeFeatured from "@/layouts/Home/components/HomeFeatured";
import HomeDiscounts from "@/layouts/Home/components/HomeDiscounts";
import HomeTestimonials from "@/layouts/Home/components/HomeTestimonials";

export default function Home({ children }: { children: ReactNode }) {
  return <main className="[&>section]:mb-16">{children}</main>;
}

Home.Arrivals = HomeArrivals;
Home.Discounts = HomeDiscounts;
Home.Featured = HomeFeatured;
Home.Testimonials = HomeTestimonials;
