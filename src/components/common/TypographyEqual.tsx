import cn from "@/utils/cn";

type TypographyEqualProps = {
  title: string | number;
  value: string | number;
  className?: string;
  classNameTitle?: string;
  classNameValue?: string;
};

export default function TypographyEqual({
  title,
  value,
  className,
  classNameTitle,
  classNameValue,
}: TypographyEqualProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-2", className)}>
      <span className={cn(classNameTitle)}>{title}</span>
      <span className={cn(classNameValue)}>{value}</span>
    </div>
  );
}
