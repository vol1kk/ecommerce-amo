import cn from "@/utils/cn";

type AbsoluteCardImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function AbsoluteCardImage({
  src,
  alt,
  className,
  ...props
}: AbsoluteCardImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "aspect-square h-full w-full object-cover sm-x:blur-md",
        className,
      )}
      {...props}
    />
  );
}
