import cn from "@/utils/cn";
import { Section } from "@/components/Section";
import { ArrowIcon } from "@/components/Icons";
import { AbsoluteCard } from "@/components/AbsoluteCard";
import {
  DiscountedBottom,
  DiscountedUpper,
} from "@/app/(homepage)/SectionDiscount";

export default function SectionDiscount() {
  return (
    <Section name="Big Saving Zone">
      <div className="grid w-full grid-cols-3 gap-6 lg:grid-cols-1">
        {DiscountedUpper.map(discounted => (
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
                {discounted.content.title}
              </h2>
              <div className="text-sm">
                <h3>{discounted.content.subtitle}</h3>
                {discounted.content.discount && (
                  <span>UP TO {discounted.content.discount}% OFF</span>
                )}
              </div>
              <ArrowIcon className="justify-self-center" />
              <button className="self-end rounded-md border-2 border-white px-4 py-2">
                Shop now
              </button>
            </AbsoluteCard.Content>
          </AbsoluteCard>
        ))}
      </div>
      <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-1">
        {DiscountedBottom.map(discounted => (
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
                {discounted.content.title}
              </h2>
              <div className="text-sm">
                <h3>{discounted.content.subtitle}</h3>
                {discounted.content.discount && (
                  <span>FLAT {discounted.content.discount}% OFF</span>
                )}
              </div>
              <ArrowIcon className="justify-self-center [&>path]:stroke-black" />
              <button className="self-end rounded-md border-2 border-black px-4 py-2">
                Shop now
              </button>
            </AbsoluteCard.Content>
          </AbsoluteCard>
        ))}
      </div>
    </Section>
  );
}
