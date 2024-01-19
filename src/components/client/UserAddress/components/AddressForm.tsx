import { useTranslations } from "next-intl";

import Input from "@/components/common/Input";
import FormButton from "@/components/common/FormButton";
import { TAddress, AddressFormError } from "@/components/client/UserAddress";

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
      className="grid grid-cols-2 gap-4 lg:grid-cols-1 [&>label>input]:bg-accent [&>label>span]:font-semibold"
    >
      <Input
        id="name"
        defaultValue={name}
        hasError={!!errors?.name}
        placeholder={t("placeholder.name")}
      >
        {t("name")}
      </Input>
      <Input
        id="surname"
        defaultValue={surname}
        hasError={!!errors?.surname}
        placeholder={t("placeholder.surname")}
      >
        <span>{t("surname")}</span>
      </Input>
      <Input
        id="city"
        defaultValue={city}
        hasError={!!errors?.city}
        placeholder={t("placeholder.city")}
      >
        <span>{t("city")}</span>
      </Input>
      <Input
        id="address"
        defaultValue={address}
        hasError={!!errors?.address}
        placeholder={t("placeholder.street")}
      >
        {t("street")}
      </Input>
      <Input
        id="postalCode"
        defaultValue={phone}
        hasError={!!errors?.postalCode}
        placeholder={t("placeholder.postalCode")}
      >
        {t("postalCode")}
      </Input>
      <Input
        id="phone"
        defaultValue={phone}
        hasError={!!errors?.phone}
        placeholder={t("placeholder.phone")}
      >
        {t("phone")}
      </Input>
      <FormButton className="col-span-2 lg:col-span-1" />
    </form>
  );
}
