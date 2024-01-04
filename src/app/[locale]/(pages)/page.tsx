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
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Home");

  return (
    <Home>
      <Slider slides={HomeSlides} />
      <Home.Featured featured={FeaturedCategories} />
      <Home.Arrivals arrivals={NewArrivals} />
      <Home.Discounts triples={DiscountedUpper} doubles={DiscountedBottom} />
      <Home.Testimonials tl={t("feedback")} testimonials={Testimonials} />
    </Home>
  );
}
