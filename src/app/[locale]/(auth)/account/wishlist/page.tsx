import Link from "@/components/common/Link";
import { SHOP_PAGE } from "@/constants/routes";
import Button from "@/components/common/Button";
import { HeartIcon } from "@/components/common/Icons";
import { getSelectedItems } from "@/components/server/Shop";
import { FavoriteItem } from "@/components/server/Favorites";

export default async function Page() {
  const wishlistItem = await getSelectedItems("wishlist", "bare");

  let content;
  if (wishlistItem.length === 0) {
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
        {wishlistItem.map(i => (
          <FavoriteItem key={i.id} selectedItem={i} />
        ))}
      </div>
    );
  }

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold text-boldColor">Wishlist</h1>
      {content}
    </section>
  );
}