import { getServerSession } from "next-auth";

import cn from "@/utils/cn";
import { authOptions } from "@/lib/authOptions";
import { HeartIcon } from "@/components/common/Icons";
import { toggleWishlistAction } from "@/components/server/Favorites";

type CardFavoriteProps = {
  id: string;
  isFavorite: boolean;
};

export async function CardFavorite({ id, isFavorite }: CardFavoriteProps) {
  const session = await getServerSession(authOptions);
  const isAuthed = !!session;

  return (
    <form action={toggleWishlistAction.bind(undefined, id)}>
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
