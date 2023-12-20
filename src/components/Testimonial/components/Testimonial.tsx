import { ReactNode } from "react";

import cn from "@/utils/cn";
import { TestimonialRating } from "@/components/Testimonial/components/TestimonialRating";
import { TestimonialContent } from "@/components/Testimonial/components/TestimonialContent";

type TestimonialProps = {
  index?: number;
  className?: string;
  children: ReactNode;
};

export default function Testimonial({
  index,
  className,
  children,
}: TestimonialProps) {
  return (
    <div
      className={cn("rounded-lg border-[2px] border-[#BEBCBD] p-2", className)}
      aria-label={`Testimonial ${index}`}
    >
      {children}
    </div>
  );
}

Testimonial.Rating = TestimonialRating;
Testimonial.Content = TestimonialContent;
