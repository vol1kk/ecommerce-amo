import { Slider } from "@/features/Slider";
import { HomeSlides } from "@/app/(homepage)/Slides";
import { SectionDiscount } from "@/app/(homepage)/SectionDiscount";
import { NewArrivals, SectionArrivals } from "@/app/(homepage)/SectionArrivals";

import {
  FeaturedCategories,
  SectionFeatured,
} from "@/app/(homepage)/SectionFeatured";

import {
  SectionTestimonials,
  Testimonials,
} from "@/app/(homepage)/SectionTestimonials";

export default function Home() {
  return (
    <main className="[&>section]:mb-16">
      <Slider slides={HomeSlides} />
      <SectionFeatured featured={FeaturedCategories} />
      <SectionArrivals arrivals={NewArrivals} />
      <SectionDiscount />
      <SectionTestimonials testimonials={Testimonials} />
    </main>
  );
}
