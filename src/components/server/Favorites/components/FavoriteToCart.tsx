import Button from "@/components/common/Button";
import { itemStatusAction } from "@/components/server/Shop";
import { SelectedItem } from "@/types";

type FavoriteToCartProps = {
  selectedItem: SelectedItem;
};

export function FavoriteToCart({ selectedItem }: FavoriteToCartProps) {
  const { isInCart, itemId, size, color } = selectedItem;

  const canBuy = !!(size && color);
  return (
    <form
      action={itemStatusAction.bind(undefined, { type: "cart", itemId })}
      className="sm:justify-self-stretch"
    >
      <Button
        isSubmit
        disabled={!canBuy}
        className="w-full min-w-[180px] bg-purple-700 font-semibold text-white disabled:cursor-no-drop disabled:bg-purple-800"
      >
        {!canBuy
          ? "Can't add to cart"
          : isInCart
            ? "Remove from Cart"
            : "Add to Cart"}
      </Button>
    </form>
  );
}
