import { itemStatusAction } from "@/components/Shop";
import { CrossIcon } from "@/components/common/Icons";

type FavoriteRemoveProps = {
  id: string;
};

export function FavoriteRemove({ id }: FavoriteRemoveProps) {
  return (
    <form
      action={itemStatusAction.bind(undefined, {
        type: "wishlist",
        itemId: id,
      })}
    >
      <button type="submit">
        <CrossIcon />
      </button>
    </form>
  );
}
