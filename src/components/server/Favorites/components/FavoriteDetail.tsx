import cn from "@/utils/cn";
import TypographyEqual from "@/components/common/TypographyEqual";

type FavoriteDetailProps = {
  title: string;
  value: string | number | undefined;
};

export default function FavoriteDetail({ title, value }: FavoriteDetailProps) {
  return (
    <TypographyEqual
      title={title}
      value={value || "None"}
      classNameTitle="font-semibold"
      classNameValue={cn(!value && "font-semibold text-red-500")}
    />
  );
}
