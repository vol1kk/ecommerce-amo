import { getTranslations } from "next-intl/server";

import { Item } from "@/types";
import Link from "@/components/common/Link";
import Button from "@/components/common/Button";
import { CHECKOUT_PAGE } from "@/constants/routes";
import { ItemService } from "@/services/ItemService";
import TypographyEqual from "@/components/common/TypographyEqual";
import CartEmpty from "@/components/server/Cart/components/CartEmpty";
import CartDelete from "@/components/server/Cart/components/CartDelete";
import CartQuantity from "@/components/server/Cart/components/CartQuantity";
import FavoriteDetail from "@/components/server/Favorites/components/FavoriteDetail";

const shippingFee = 5; // I don't have the fee field, so gotta pretend I have smth
export default async function Page() {
  const items = await ItemService.getSelectedItems("cart");
  const t = await getTranslations("Item");

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
      <div className="mb-12">
        <table className="w-full border-collapse text-center">
          <thead className="bg-boldColor font-semibold uppercase tracking-wide text-white md-header:hidden [&_th]:p-5">
            <tr>
              <th className="text-left">{t("product")}</th>
              <th>{t("price")}</th>
              <th>{t("quantity")}</th>
              <th>{t("subtotal")}</th>
              <th className="font-black">X</th>
            </tr>
          </thead>
          <tbody className="md-header:flex md-header:flex-col md-header:justify-center">
            {items.map(selectedItem => {
              const item = selectedItem.item as Item;

              return (
                <tr
                  className="relative mx-auto w-fit sm-l:last:[&>td]:pb-5 [&_td]:p-5 sm-l:[&_td]:block sm-l:[&_td]:p-2"
                  key={item.id}
                >
                  <td className="flex gap-3 text-left after:absolute after:inset-x-8 after:bottom-2 after:h-[1px] after:rounded-md after:bg-[#BEBCBD] sm-l:flex-col">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="aspect-square w-[7rem] rounded-md object-cover sm-l:w-full"
                    />
                    <div className="sm-l:[&>div]:place-items-center">
                      <h2 className="text-lg font-bold sm-l:mb-2 sm-l:text-center">
                        {item.name}
                      </h2>
                      <FavoriteDetail
                        title={t("size")}
                        value={selectedItem.size}
                      />
                      <FavoriteDetail
                        title={t("color")}
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
                title={t("subtotal")}
                classNameValue="place-self-end"
                value={`$${subTotal.toFixed(2)}`}
              />
              <TypographyEqual
                title={t("shipping")}
                classNameValue="place-self-end"
                value={`$${shippingFee.toFixed(2)}`}
              />
            </div>
            <TypographyEqual
              title={t("summary")}
              value={`$${grandTotal}`}
              classNameValue="place-self-end"
              className="relative mb-8 font-bold text-boldColor after:absolute after:inset-x-0 after:-bottom-4 after:h-[1px] after:rounded-md after:bg-[#BEBCBD]"
            />
          </div>
          <Link href={CHECKOUT_PAGE}>
            <Button
              disabled={!canProceed}
              className="w-full bg-purple-600 px-12 font-semibold text-white disabled:cursor-no-drop"
            >
              {canProceed ? t("checkout_proceed") : t("checkout_unavailable")}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
