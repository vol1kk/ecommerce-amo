import Button from "@/components/common/Button";

type FavoriteToCartProps = {
  id: string;
  isInCart?: boolean;
};

export function FavoriteToCart({ id, isInCart }: FavoriteToCartProps) {
  return (
    <form action="" className="sm:justify-self-stretch">
      <Button
        isSubmit
        className="w-full bg-purple-700 font-semibold text-white"
      >
        {isInCart ? "Item already in cart" : "Add to Cart"}
      </Button>
    </form>
  );
}
