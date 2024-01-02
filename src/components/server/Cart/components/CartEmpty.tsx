import Link from "@/components/common/Link";
import Button from "@/components/common/Button";
import { SHOP_PAGE } from "@/constants/routes";
import { EmptyCartIcon } from "@/components/common/Icons";

export default function CartEmpty() {
  return (
    <main className="grid flex-1 place-items-center gap-4">
      <EmptyCartIcon />
      <div>
        <h1 className="text-2xl font-bold">Your cart is empty and sad :(</h1>
        <p className="text-center font-semibold text-lightColor">
          Add something to make it happy!
        </p>
      </div>
      <Button className="bg-purple-700 font-bold text-white">
        <Link href={SHOP_PAGE}>Continue Shopping</Link>
      </Button>
    </main>
  );
}
