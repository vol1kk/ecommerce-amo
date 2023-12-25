import Link from "@/components/common/Link";
import { SHOP_PAGE } from "@/constants/routes";
import { Card } from "@/components/common/Card";
import Button from "@/components/common/Button";
import { getFavoriteItems, getItems } from "@/components/Shop";

type ItemsListProps = {
  category: string | undefined;
};

export default async function ItemsList({ category }: ItemsListProps) {
  const items = await getItems(category);
  const favoriteItems = await getFavoriteItems();

  if (items.length === 0) {
    return (
      <main className="flex flex-1 flex-col place-content-center font-bold">
        <h2 className="mb-4 text-center text-3xl">No items found</h2>
        <Button className="self-center bg-purple-600 text-white">
          <Link href={SHOP_PAGE}>Continue Shopping</Link>
        </Button>
      </main>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4 sm:!grid-cols-1 lg:grid-cols-2">
      {items.map((item, ind) => (
        <Card key={ind}>
          <div className="relative">
            <Card.Image
              src={item.image}
              alt={item.name}
              href={`${SHOP_PAGE}/${category || "all"}/uuid`}
            />
            <Card.Favorite
              id={item.id}
              isFavorite={favoriteItems.some(i => i.itemId === item.id)}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="mb-1 font-bold">{item.name}</h2>
              <h3 className="text-sm text-lightColor">{item.brand}</h3>
            </div>
            <div className="flex h-fit items-center rounded-md bg-accent px-6 py-2 text-sm font-bold">
              ${item.price}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
