import {
  FeaturedCategories,
  HomeSlides,
  NewArrivals,
  Slider,
  SectionArrivals,
  SectionDiscount,
  SectionFeatured,
  SectionTestimonials,
  Testimonials,
} from "@/components/Homepage";

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
