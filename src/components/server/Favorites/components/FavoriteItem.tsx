import { Item, SelectedItem } from "@/types";
import Link from "@/components/common/Link";
import { ITEM_PAGE } from "@/constants/routes";
import {
  FavoriteImage,
  FavoriteRemove,
  FavoriteToCart,
} from "@/components/server/Favorites";
import cn from "@/utils/cn";
import FavoriteDetail from "@/components/server/Favorites/components/FavoriteDetail";

type WishlistItemProps = {
  selectedItem: SelectedItem;
};

export default function FavoriteItem({ selectedItem }: WishlistItemProps) {
  const item = selectedItem.item as Item;

  return (
    <div className="grid grid-cols-[auto,1fr,auto,auto] place-items-center gap-6 border-b-2 pb-4 sm:grid-cols-1 sm:gap-2">
      <div className="flex items-center gap-4 sm:flex-col">
        <FavoriteRemove id={item.id} />
        <Link href={ITEM_PAGE + `/${item.id}`}>
          <FavoriteImage src={item.image} alt={item.name} />
        </Link>
      </div>
      <div className="justify-self-start sm:justify-self-center">
        <h2 className="text-xl font-bold">
          <Link href={ITEM_PAGE + `/${item.id}`}>{item.name}</Link>
        </h2>
        <div className="w-fit text-sm sm:mx-auto">
          <FavoriteDetail title="Size" value={selectedItem.size} />
          <FavoriteDetail title="Color" value={selectedItem.color} />
        </div>
      </div>
      <span className="font-semibold">${item.price}</span>
      <FavoriteToCart selectedItem={selectedItem} />
    </div>
  );
}
