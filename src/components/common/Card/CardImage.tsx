import cn from "@/utils/cn";
import Link from "@/components/common/Link";

type CardImageProps = {
  src: string;
  alt: string;
  href?: string;
  className?: string;
};

export function CardImage({
  src,
  alt,
  href,
  className,
  ...props
}: CardImageProps) {
  const classes = cn("rounded-md object-cover", className);

  if (href) {
    return (
      <Link href={href}>
        <img src={src} alt={alt} className={classes} {...props} />
      </Link>
    );
  }

  return <img src={src} alt={alt} className={classes} {...props} />;
}
