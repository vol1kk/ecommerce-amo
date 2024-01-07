import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect } from "react";

import cn from "@/utils/cn";
import { deleteAddressAction, TAddress } from "@/components/client/UserAddress";

type AddressActionsProps = {
  id: string | undefined;
  className?: string;
  isDefault: boolean;
  setAddresses: Dispatch<SetStateAction<TAddress[]>>;
};

export function AddressActions({
  id,
  setAddresses,
  isDefault,
  className,
}: AddressActionsProps) {
  const { update } = useSession();
  const t = useTranslations("Account");
  const [state, action] = useFormState(
    deleteAddressAction.bind(undefined, id),
    null,
  );

  useEffect(() => {
    if (state?.ok) {
      update();
      setAddresses(addresses => addresses.filter(a => a.id !== id));
    }
  }, [state]);

  return (
    <div className={cn("flex gap-2 font-semibold", className)}>
      <button
        className={cn(!isDefault && "border-r-[1px] border-[#D9D9D9] px-2")}
      >
        {t("edit")}
      </button>
      {!isDefault && <button>{t("set_default")}</button>}
      <form action={action}>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
