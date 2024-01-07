import { useTranslations } from "next-intl";

import cn from "@/utils/cn";
import { DiscountedItem } from "@/layouts/Home";
import Section from "@/components/common/Section";
import { ArrowIcon } from "@/components/common/Icons";
import { AbsoluteCard } from "@/components/common/AbsoluteCard";

type HomeDiscountsProps = {
  triples: DiscountedItem[];
  doubles: DiscountedItem[];
};

export default function HomeDiscounts({
  doubles,
  triples,
}: HomeDiscountsProps) {
  const t = useTranslations("Home");

  const shopNow = t("shop_now");

  return (
    <Section name={t("saving_zone")}>
      <div className="grid w-full grid-cols-3 gap-6 lg:grid-cols-1">
        {triples.map(discounted => (
          <AbsoluteCard key={discounted.image.src} className="max-h-[400px]">
            <AbsoluteCard.Image
              src={discounted.image.src}
              alt={discounted.content.title}
              className={cn(discounted.image.className)}
            />
            <AbsoluteCard.Content
              className={cn(
                "top-0 h-full translate-y-0 sm-x:w-full sm-x:place-items-center [&_svg]:stroke-white",
                discounted.content.className,
              )}
            >
              <h2 className="max-w-[140px] text-3xl sm-x:text-center">
                {t("Discounted." + discounted.content.title)}
              </h2>
              <div className="grid text-sm">
                <h3>{t("Discounted." + discounted.content.subtitle)}</h3>
                {discounted.content.discount && (
                  <span>
                    {t("discount", { discount: discounted.content.discount })}
                  </span>
                )}
              </div>
              <div className="self-center justify-self-center p-2">
                <ArrowIcon />
              </div>
              <button className="self-end rounded-md border-2 border-white px-4 py-2">
                {shopNow}
              </button>
            </AbsoluteCard.Content>
          </AbsoluteCard>
        ))}
      </div>
      <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-1">
        {doubles.map(discounted => (
          <AbsoluteCard key={discounted.image.src} className="max-h-[400px]">
            <AbsoluteCard.Image
              src={discounted.image.src}
              alt={discounted.content.title}
            />
            <AbsoluteCard.Content
              className={cn(
                "right-5 top-0 h-full translate-y-0 text-black sm-x:right-0 sm-x:w-full sm-x:place-items-center",
              )}
            >
              <h2 className="max-w-[140px] text-3xl sm-x:text-center">
                {t("Discounted." + discounted.content.title)}
              </h2>
              <div className="text-sm">
                <h3>{t("Discounted." + discounted.content.subtitle)}</h3>
                {discounted.content.discount && (
                  <span>
                    {t("discount", { discount: discounted.content.discount })}
                  </span>
                )}
              </div>
              <div className="self-center justify-self-center p-2">
                <ArrowIcon className="[&>path]:stroke-black" />
              </div>
              <button className="self-end rounded-md border-2 border-black px-4 py-2">
                {shopNow}
              </button>
            </AbsoluteCard.Content>
          </AbsoluteCard>
        ))}
      </div>
    </Section>
  );
}
