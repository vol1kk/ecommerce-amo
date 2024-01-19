import { useTranslations } from "next-intl";

import Button from "@/components/common/Button";
import {
  Address,
  TAddress,
  AddressFormError,
} from "@/components/client/UserAddress";
import FormButton from "@/components/common/FormButton";

type AddressFormProps = Partial<TAddress> & {
  errors?: AddressFormError | null;
  action: (payload: FormData) => void;
};

export function AddressForm({
  city,
  name,
  phone,
  surname,
  address,
  errors,
  action,
}: AddressFormProps) {
  const t = useTranslations("Forms");

  return (
    <form
      action={action}
      className="grid grid-cols-2 gap-4 lg:grid-cols-1 [&>label>input]:bg-accent"
    >
      <Address.Input
        name={t("name")}
        id="name"
        defaultValue={name}
        hasError={!!errors?.name}
        placeholder={t("placeholder.name")}
      />
      <Address.Input
        id="surname"
        name={t("surname")}
        defaultValue={surname}
        hasError={!!errors?.surname}
        placeholder={t("placeholder.surname")}
      />
      <Address.Input
        id="city"
        name={t("city")}
        defaultValue={city}
        hasError={!!errors?.city}
        placeholder={t("placeholder.city")}
      />
      <Address.Input
        id="address"
        name={t("street")}
        defaultValue={address}
        hasError={!!errors?.address}
        placeholder={t("placeholder.street")}
      />
      <Address.Input
        name={t("postalCode")}
        id="postalCode"
        defaultValue={phone}
        hasError={!!errors?.postalCode}
        placeholder={t("placeholder.postalCode")}
      />
      <Address.Input
        name={t("phone")}
        id="phone"
        defaultValue={phone}
        hasError={!!errors?.phone}
        placeholder={t("placeholder.phone")}
      />
      <FormButton className="col-span-2 lg:col-span-1" />
    </form>
  );
}
