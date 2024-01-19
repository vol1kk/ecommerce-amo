import { TrashIcon } from "@/components/common/Icons";
import { toggleCartAction } from "@/components/server/Cart";

type CartDeleteProps = {
  id: string;
};

export default function CartDelete({ id }: CartDeleteProps) {
  return (
    <form action={toggleCartAction.bind(undefined, id)} className="mx-auto">
      <button type="submit">
        <TrashIcon />
      </button>
    </form>
  );
}
