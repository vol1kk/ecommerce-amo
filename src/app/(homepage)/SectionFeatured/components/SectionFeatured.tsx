import Link from "next/link";

import cn from "@/utils/cn";
import { Section } from "@/components/Section";
import { AbsoluteCard } from "@/components/AbsoluteCard";
import { FeaturedCategory } from "@/app/(homepage)/SectionFeatured";

type SectionFeaturedProps = {
  featured: FeaturedCategory[];
};

export default function SectionFeatured({ featured }: SectionFeaturedProps) {
  return (
    <Section className="flex flex-wrap justify-between gap-6 py-0 xl-max:justify-center">
      {featured.map((featured, i) => (
        <AbsoluteCard key={featured.image.src} className="max-w-[600px]">
          <AbsoluteCard.Image
            src={featured.image.src}
            alt={featured.content.title}
            className={cn("aspect-[1/0.6]", featured.image.className)}
          />
          <AbsoluteCard.Content className="sm-x:left-1/2 sm-x:w-full sm-x:-translate-x-1/2 sm-x:place-content-center sm-x:place-items-center">
            <p className="text-lg">{featured.content.subtitle}</p>
            <h2>
              <span className="block text-3xl sm:text-2xl sm-x:text-lg">
                {featured.content.title}
              </span>
              {featured.content.discount && (
                <span className="text-sm">
                  UP TO {featured.content.discount}% OFF
                </span>
              )}
            </h2>
            <Link
              href={featured.content.href}
              className="underline underline-offset-4"
            >
              Explore Items
            </Link>
          </AbsoluteCard.Content>
        </AbsoluteCard>
      ))}
    </Section>
  );
}
