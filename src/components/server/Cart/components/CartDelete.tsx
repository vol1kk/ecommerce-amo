import { TrashIcon } from "@/components/common/Icons";
import { itemStatusAction } from "@/components/server/Shop";

type CartDeleteProps = {
  id: string;
};

export default function CartDelete({ id }: CartDeleteProps) {
  return (
    <form
      action={itemStatusAction.bind(undefined, { type: "cart", itemId: id })}
      className="mx-auto"
    >
      <button type="submit">
        <TrashIcon />
      </button>
    </form>
  );
}
