import Button from "@/components/common/Button";
import { itemStatusAction } from "@/components/server/Shop";
import { SelectedItem } from "@/types";
import { useTranslations } from "next-intl";

type FavoriteToCartProps = {
  selectedItem: SelectedItem;
};

export function FavoriteToCart({ selectedItem }: FavoriteToCartProps) {
  const t = useTranslations("Item");
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
          ? t("cart_unavailable")
          : isInCart
            ? t("cart_remove")
            : t("cart_add")}
      </Button>
    </form>
  );
}
