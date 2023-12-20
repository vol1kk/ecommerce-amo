"use client";

import { useState } from "react";

import cn from "@/utils/cn";
import Section from "@/components/common/Section";
import groupByThree from "@/components/Homepage/utils/groupByThree";
import { Testimonial, TTestimonial } from "@/components/common/Testimonial";

type SectionTestimonialsProps = {
  testimonials: TTestimonial[];
};

export default function SectionTestimonials({
  testimonials,
}: SectionTestimonialsProps) {
  const [group, setGroup] = useState(0);
  const groupedTestimonials = groupByThree(testimonials);

  return (
    <Section name="Feedback">
      <div className="flex overflow-hidden">
        {groupedTestimonials.map((testimonials, groupInd) => (
          <div
            key={groupInd}
            style={{ translate: `${-100 * group}%` }}
            aria-label={`Testimonial Group ${groupInd + 1}`}
            className="flex w-full shrink-0 flex-wrap justify-center gap-4 transition-[translate] duration-500 [&>div]:basis-[400px]"
          >
            {testimonials.map((testimonial, testimonialInd) => (
              <Testimonial
                key={testimonialInd}
                index={groupInd * 3 + testimonialInd + 1}
              >
                <div className="mb-4 flex items-center justify-between">
                  <img
                    src={testimonial.pictureSrc}
                    alt={testimonial.name}
                    className="rounded-lg"
                  />
                  <Testimonial.Rating rating={testimonial.rating} />
                </div>

                <Testimonial.Content
                  name={testimonial.name}
                  description={testimonial.description}
                />
              </Testimonial>
            ))}
          </div>
        ))}
      </div>
      <div aria-hidden={true} className="flex gap-2">
        {groupedTestimonials.map((_, ind) => (
          <div
            key={ind}
            onClick={() => setGroup(ind)}
            className={cn(
              "h-3 w-3 cursor-pointer rounded-full bg-gray-300",
              group === ind && "bg-boldColor",
            )}
          />
        ))}
      </div>
    </Section>
  );
}
