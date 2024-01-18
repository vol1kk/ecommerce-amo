"use client";

import { FormEvent, useState } from "react";

import { Address, TAddress } from "@/components/client/UserAddress";
import Button from "@/components/common/Button";
import { useTranslations } from "next-intl";

type AddressFormProps = Partial<TAddress> & {
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

export function AddressForm({
  id,
  city,
  name,
  phone,
  surname,
  address,
  onSubmit,
}: AddressFormProps) {
  const t = useTranslations("Forms");
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
        placeholder={t("placeholder.name")}
      />
      <Address.Input
        id="surname"
        name={t("surname")}
        defaultValue={surname}
        placeholder={t("placeholder.surname")}
      />
      <Address.Input
        id="city"
        name={t("city")}
        defaultValue={city}
        placeholder={t("placeholder.city")}
      />
      <Address.Input
        id="address"
        name={t("street")}
        defaultValue={address}
        placeholder={t("placeholder.street")}
      />
      <Address.Input
        name={t("postalCode")}
        id="postalCode"
        defaultValue={phone}
        placeholder={t("placeholder.postalCode")}
      />
      <Address.Input
        name={t("phone")}
        id="phone"
        defaultValue={phone}
        placeholder={t("placeholder.phone")}
      />
      <Button
        name="id"
        value={id}
        type="submit"
        className="col-span-2 bg-purple-700 text-center font-bold text-white lg:col-auto"
      >
        {isSubmitting ? t("submit_pending") : t("submit_allowed")}
      </Button>
    </form>
  );
}
