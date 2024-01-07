type FavoriteImageProps = {
  src: string;
  alt: string;
};

export function FavoriteImage({ src, alt }: FavoriteImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="aspect-square w-[125px] rounded-md object-cover sm:w-[250px] sm-x:w-[200px]"
    />
  );
}
