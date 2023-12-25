import { CrossIcon } from "@/components/common/Icons";
import { toggleFavoriteAction } from "@/components/Favorites";

type FavoriteRemoveProps = {
  id: string;
};

export function FavoriteRemove({ id }: FavoriteRemoveProps) {
  return (
    <form action={toggleFavoriteAction.bind(undefined, id)}>
      <button type="submit">
        <CrossIcon />
      </button>
    </form>
  );
}
