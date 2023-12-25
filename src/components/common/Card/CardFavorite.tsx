import cn from "@/utils/cn";
import { HeartIcon } from "@/components/common/Icons";
import { toggleFavoriteAction } from "@/components/Favorites";

type CardFavoriteProps = {
  id: string;
  isFavorite: boolean;
};

export async function CardFavorite({ id, isFavorite }: CardFavoriteProps) {
  return (
    <form action={toggleFavoriteAction.bind(undefined, { itemId: id })}>
      <button className="absolute right-4 top-4 rounded-full bg-white p-2">
        <HeartIcon
          className={cn(isFavorite && "fill-red-500 [&>path]:stroke-red-500")}
        />
      </button>
    </form>
  );
}
