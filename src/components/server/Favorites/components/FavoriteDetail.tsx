import cn from "@/utils/cn";
import TypographyEqual from "@/components/common/TypographyEqual";
import { useTranslations } from "next-intl";

type FavoriteDetailProps = {
  title: string;
  value: string | number | undefined;
};

export default function FavoriteDetail({ title, value }: FavoriteDetailProps) {
  const t = useTranslations("General");

  return (
    <TypographyEqual
      title={title}
      value={value || t("not_selected")}
      classNameTitle="font-semibold"
      classNameValue={cn(!value && "font-semibold text-red-500")}
    />
  );
}
