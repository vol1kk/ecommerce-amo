import { useTranslations } from "next-intl";

import { deleteAddressAction } from "@/components/client/UserAddress";

type AddressDeleteProps = {
  id: string;
};

export function AddressDelete({ id }: AddressDeleteProps) {
  const t = useTranslations("General");

  return (
    <form action={deleteAddressAction.bind(undefined, id)}>
      <button type="submit" className="text-red-500">
        {t("delete")}
      </button>
    </form>
  );
}
