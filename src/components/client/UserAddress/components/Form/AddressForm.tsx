"use client";

import { FormEvent, useState } from "react";

import { Address, TAddress } from "@/components/client/UserAddress";
import Button from "@/components/common/Button";
import { useTranslations } from "next-intl";

type AddressFormProps = Partial<TAddress> & {
  t: (key: string) => string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

export function AddressForm({
  t,
  id,
  city,
  name,
  phone,
  surname,
  address,
  onSubmit,
}: AddressFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      onSubmit={async e => {
        setIsSubmitting(true);
        await onSubmit(e);
        setIsSubmitting(false);
      }}
      className="grid grid-cols-2 gap-4 lg:grid-cols-1 [&>label>input]:bg-accent"
    >
      <Address.Input
        name={t("name")}
        id="name"
        defaultValue={name}
        placeholder={t("name_placeholder")}
      />
      <Address.Input
        id="surname"
        name={t("surname")}
        defaultValue={surname}
        placeholder={t("surname_placeholder")}
      />
      <Address.Input
        id="city"
        name={t("city")}
        defaultValue={city}
        placeholder={t("city_placeholder")}
      />
      <Address.Input
        id="address"
        name={t("street")}
        defaultValue={address}
        placeholder={t("street_placeholder")}
      />
      <Address.Input
        name={t("postal")}
        id="postalCode"
        defaultValue={phone}
        placeholder={t("postal_placeholder")}
      />
      <Address.Input
        name={t("phone")}
        id="phone"
        defaultValue={phone}
        placeholder={t("phone_placeholder")}
      />
      <Button
        name="id"
        value={id}
        type="submit"
        className="col-span-2 bg-purple-700 text-center font-bold text-white lg:col-auto"
      >
        {isSubmitting ? t("submit_pending") : t("submit")}
      </Button>
    </form>
  );
}
