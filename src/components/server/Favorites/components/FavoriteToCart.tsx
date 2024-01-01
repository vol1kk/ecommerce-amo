import Button from "@/components/common/Button";
import { itemStatusAction } from "@/components/server/Shop";

type FavoriteToCartProps = {
  id: string;
  isInCart?: boolean;
};

export function FavoriteToCart({ id, isInCart }: FavoriteToCartProps) {
  return (
    <form
      action={itemStatusAction.bind(undefined, { type: "cart", itemId: id })}
      className="sm:justify-self-stretch"
    >
      <Button
        isSubmit
        className="w-full min-w-[180px] bg-purple-700 font-semibold text-white"
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </Button>
    </form>
  );
}
