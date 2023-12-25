import { Item } from "@/types";
import {
  FavoriteImage,
  FavoriteRemove,
  FavoriteToCart,
} from "@/components/Favorites";

type WishlistItemProps = {
  item: Item;
};

export default function FavoriteItem({ item }: WishlistItemProps) {
  return (
    <div className="grid grid-cols-[auto,1fr,auto,auto] place-items-center gap-6 border-b-2 pb-4 sm:grid-cols-1 sm:gap-2">
      <div className="flex items-center gap-4 sm:flex-col">
        <FavoriteRemove id={item.id} />
        <FavoriteImage src={item.image} alt={item.name} />
      </div>
      <div className="justify-self-start sm:justify-self-center">
        <h2 className="font-bold">{item.name}</h2>
        <div>
          <div>
            <span className="font-semibold">Color: </span>
            <span>Blue</span>
          </div>
        </div>
      </div>
      <span className="font-semibold">${item.price}</span>
      <FavoriteToCart id={item.id} />
    </div>
  );
}
