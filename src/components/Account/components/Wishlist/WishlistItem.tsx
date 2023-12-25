import Button from "@/components/common/Button";
import { Item } from "@/types";
import { CrossIcon } from "@/components/common/Icons";
import { toggleFavoriteAction } from "@/components/Shop";

type WishlistItemProps = {
  item: Item;
};

export default function WishlistItem({ item }: WishlistItemProps) {
  return (
    <div className="grid grid-cols-[auto,1fr,auto,auto] place-items-center gap-6 sm:grid-cols-1 sm:place-items-center sm:gap-2">
      <div className="flex items-center gap-4 sm:flex-col">
        <form action={toggleFavoriteAction.bind(undefined, item.id)}>
          <button type="submit">
            <CrossIcon />
          </button>
        </form>
        <img
          src={item.image}
          alt={item.name}
          className="aspect-square w-[125px] rounded-md object-cover sm:w-[250px] sm-x:w-[200px]"
        />
      </div>
      <div className="justify-self-start sm:justify-self-center">
        <h2 className="font-bold">{item.name}</h2>
        <div>
          <span className="font-semibold">Color: </span>
          <span>Blue</span>
        </div>
      </div>
      <span className="font-semibold text-lightColor">$29.00</span>
      <form action="">
        <Button isSubmit className="bg-purple-700 font-semibold text-white">
          Add to Cart
        </Button>
      </form>
    </div>
  );
}
