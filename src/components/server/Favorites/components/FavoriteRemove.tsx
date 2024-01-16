import { CrossIcon } from "@/components/common/Icons";
import toggleWishlistAction from "@/components/server/Shop/actions/toggleWishlistAction";

type FavoriteRemoveProps = {
  id: string;
};

export function FavoriteRemove({ id }: FavoriteRemoveProps) {
  return (
    <form action={toggleWishlistAction.bind(undefined, id)}>
      <button type="submit">
        <CrossIcon />
      </button>
    </form>
  );
}
