import Slider from "@/components/common/Slider";
import {
  Home,
  HomeSlides,
  NewArrivals,
  Testimonials,
  DiscountedUpper,
  DiscountedBottom,
  FeaturedCategories,
} from "@/layouts/Home";

export default function Page() {
  return (
    <Home>
      <Slider slides={HomeSlides} />
      <Home.Featured featured={FeaturedCategories} />
      <Home.Arrivals arrivals={NewArrivals} />
      <Home.Discounts triples={DiscountedUpper} doubles={DiscountedBottom} />
      <Home.Testimonials testimonials={Testimonials} />
    </Home>
  );
}