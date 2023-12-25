import Button from "@/components/common/Button";

type FavoriteToCartProps = {
  id: string;
};

export function FavoriteToCart({ id }: FavoriteToCartProps) {
  return (
    <form action="" className="sm:justify-self-stretch">
      <Button
        isSubmit
        className="w-full bg-purple-700 font-semibold text-white"
      >
        Add to Cart
      </Button>
    </form>
  );
}
