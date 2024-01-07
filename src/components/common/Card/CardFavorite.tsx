import cn from "@/utils/cn";
import { HeartIcon } from "@/components/common/Icons";
import { itemStatusAction } from "@/components/server/Shop";

type CardFavoriteProps = {
  id: string;
  isFavorite: boolean;
  isAuthed: boolean;
};

export async function CardFavorite({
  id,
  isFavorite,
  isAuthed,
}: CardFavoriteProps) {
  return (
    <form
      action={itemStatusAction.bind(undefined, {
        type: "wishlist",
        itemId: id,
      })}
    >
      <button
        disabled={!isAuthed}
        className="absolute right-4 top-4 rounded-full bg-white p-2 disabled:cursor-no-drop"
      >
        <HeartIcon
          className={cn(isFavorite && "fill-red-500 [&>path]:stroke-red-500")}
        />
      </button>
    </form>
  );
}
