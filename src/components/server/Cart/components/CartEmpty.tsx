import Link from "@/components/common/Link";
import Button from "@/components/common/Button";
import { SHOP_PAGE } from "@/constants/routes";
import { EmptyCartIcon } from "@/components/common/Icons";
import { useTranslations } from "next-intl";

export default function CartEmpty() {
  const t = useTranslations("Errors");

  return (
    <main className="grid flex-1 place-items-center gap-4 p-6">
      <EmptyCartIcon />
      <div>
        <h1 className="text-2xl font-bold">{t("empty_cart")}</h1>
        <p className="text-center font-semibold text-lightColor">
          {t("empty_cart_subtitle")}
        </p>
      </div>
      <Button className="bg-purple-700 font-bold text-white">
        <Link href={SHOP_PAGE}>{t("empty_cart_back")}</Link>
      </Button>
    </main>
  );
}
