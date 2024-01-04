import { Item } from "@/types";
import Link from "@/components/common/Link";
import Button from "@/components/common/Button";
import { CHECKOUT_PAGE } from "@/constants/routes";
import { getSelectedItems } from "@/components/server/Shop";
import TypographyEqual from "@/components/common/TypographyEqual";
import CartEmpty from "@/components/server/Cart/components/CartEmpty";
import CartDelete from "@/components/server/Cart/components/CartDelete";
import CartQuantity from "@/components/server/Cart/components/CartQuantity";
import FavoriteDetail from "@/components/server/Favorites/components/FavoriteDetail";

const shippingFee = 5; // I don't have the fee field, so gotta pretend I have smth
export default async function Page() {
  const items = await getSelectedItems("cart", "bare");

  if (items.length === 0) {
    return <CartEmpty />;
  }

  const canProceed = items.every(i => i.size && i.color);

  const subTotal = items.reduce(
    (acc, selectedItem) =>
      (acc += (selectedItem.item?.price ?? 0) * selectedItem.quantity!),
    0,
  );
  const grandTotal = (subTotal + shippingFee).toFixed(2);

  return (
    <main className="grid flex-1 grid-rows-[1fr,auto]">
      <div>
        <table className="w-full border-collapse text-center">
          <thead className="bg-boldColor font-semibold uppercase tracking-wide text-white md-header:hidden [&_th]:p-5">
            <tr>
              <th className="text-left">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="md-header:flex md-header:justify-center">
            {items.map(selectedItem => {
              const item = selectedItem.item as Item;

              return (
                <tr className="relative [&_td]:p-5" key={item.id}>
                  <td className="flex gap-3 text-left after:absolute after:inset-x-8 after:bottom-2 after:h-[1px] after:rounded-md after:bg-[#BEBCBD]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="aspect-square w-[7rem] rounded-md object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <FavoriteDetail title="Size" value={selectedItem.size} />
                      <FavoriteDetail
                        title="Color"
                        value={selectedItem.color}
                      />
                    </div>
                  </td>
                  <td className="font-bold text-boldColor">${item.price}</td>
                  <td>
                    <CartQuantity
                      id={selectedItem.id}
                      quantity={selectedItem.quantity!}
                    />
                  </td>
                  <td className="font-bold text-boldColor">
                    ${Math.ceil(item.price * selectedItem.quantity!)}
                  </td>
                  <td>
                    <CartDelete id={item.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <section className="grid grid-cols-[1fr,auto] bg-accent [&>div]:p-10">
        <div className="place-self-center bg-[#F3F3F3]">
          <div>
            <div className="mb-4 font-semibold text-boldColor">
              <TypographyEqual
                title="Sub Total"
                classNameValue="place-self-end"
                value={`$${subTotal.toFixed(2)}`}
              />
              <TypographyEqual
                title="Shipping"
                classNameValue="place-self-end"
                value={`$${shippingFee.toFixed(2)}`}
              />
            </div>
            <TypographyEqual
              title="Grand Total"
              value={`$${grandTotal}`}
              className="relative mb-8 place-items-center font-bold text-boldColor after:absolute after:inset-x-0 after:-bottom-4 after:h-[1px] after:rounded-md after:bg-[#BEBCBD]"
            />
          </div>
          <Link href={CHECKOUT_PAGE}>
            <Button className="bg-purple-600 px-12 font-semibold text-white">
              {canProceed ? "Proceed to Checkout" : "Can't"}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
