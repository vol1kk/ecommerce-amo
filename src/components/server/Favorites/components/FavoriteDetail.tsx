import cn from "@/utils/cn";

type FavoriteDetailProps = {
  title: string;
  value: string | number | undefined;
};

export default function FavoriteDetail({ title, value }: FavoriteDetailProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <span className="font-semibold">{title}:</span>
      <span className={cn(!value && "font-semibold text-red-500")}>
        {value || "None"}
      </span>
    </div>
  );
}
