import { useTranslations } from "next-intl";

import cn from "@/utils/cn";

type AddressTagsProps = {
  tags?: string[];
  isDefault: boolean;
  className?: string;
};

export function AddressTags({ className, tags, isDefault }: AddressTagsProps) {
  const t = useTranslations("Account");

  const tagClasses = "rounded-md border-[1px] border-lightColor px-4 py-1";

  return (
    tags && (
      <div
        className={cn(
          "flex flex-wrap gap-2 text-sm font-bold text-boldColor",
          className,
        )}
      >
        {isDefault && <span className={tagClasses}>{t("default")}</span>}
        {tags.map((tag, ind) => (
          <span key={ind} className={tagClasses}>
            {tag}
          </span>
        ))}
      </div>
    )
  );
}
