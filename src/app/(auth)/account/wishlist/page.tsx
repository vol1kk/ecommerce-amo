import Link from "@/components/common/Link";
import { SHOP_PAGE } from "@/constants/routes";
import Button from "@/components/common/Button";
import { getFavoriteItems } from "@/components/Shop";
import { HeartIcon } from "@/components/common/Icons";
import { FavoriteItem } from "@/components/Favorites";

export default async function Page() {
  const favoriteItems = await getFavoriteItems();
  console.log(favoriteItems);

  let content;
  if (favoriteItems.length === 0) {
    content = (
      <div className="mb-6 grid place-content-center place-items-center gap-6">
        <div className="rounded-full bg-[#F0F9F4] p-8">
          <HeartIcon
            width={80}
            height={80}
            className="[&>path]:stroke-[#28A642]"
          />
        </div>
        <div className="max-w-[500px]">
          <h1 className="mb-2 text-center text-3xl font-bold text-[#3C4242]">
            Your wishlist is empty.
          </h1>
          <p className="text-center text-sm font-semibold text-lightColor">
            You don’t have any products in the wishlist yet. You will find a lot
            of interesting products on our Shop page.
          </p>
        </div>
        <Button className="bg-purple-700 px-8 font-semibold text-white">
          <Link href={SHOP_PAGE}>Continue Shopping</Link>
        </Button>
      </div>
    );
  } else {
    content = (
      <div className="mb-4 grid gap-6">
        {favoriteItems.map(i => (
          <FavoriteItem key={i.id} item={i.item} />
        ))}
      </div>
    );
  }

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold sm-x:text-center">Wishlist</h1>
      {content}
    </section>
  );
}
