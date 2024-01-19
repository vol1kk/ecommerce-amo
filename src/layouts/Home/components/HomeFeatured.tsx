import { useTranslations } from "next-intl";

import cn from "@/utils/cn";
import Link from "@/components/common/Link";
import Section from "@/components/common/Section";
import { FeaturedCategories } from "@/layouts/Home";
import { AbsoluteCard } from "@/components/common/AbsoluteCard";

type SectionFeaturedProps = {
  featured: (typeof FeaturedCategories)[number][];
};

export default function HomeFeatured({ featured }: SectionFeaturedProps) {
  const t = useTranslations("Featured");
  const tg = useTranslations("General");

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
            <p className="text-lg">{t(featured.content.subtitle)}</p>
            <h2>
              <span className="block text-3xl sm:text-2xl sm-x:text-lg">
                {t(featured.content.title)}
              </span>
              {featured.content.discount && (
                <span className="text-sm">
                  {tg("discount", { discount: featured.content.discount })}
                </span>
              )}
            </h2>
            <Link
              href={featured.content.href}
              className="underline underline-offset-4"
            >
              {tg("explore_items")}
            </Link>
          </AbsoluteCard.Content>
        </AbsoluteCard>
      ))}
    </Section>
  );
}
