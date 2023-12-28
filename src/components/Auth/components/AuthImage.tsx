type AuthImageProps = {
  src: string;
  alt: string;
};

export function AuthImage({ src, alt }: AuthImageProps) {
  return (
    <img
      aria-hidden
      src={src}
      alt={alt}
      className="aspect-[1/1.02] h-full w-full object-cover"
    />
  );
}
