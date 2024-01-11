"use client";

import { Dispatch, FormEvent, SetStateAction } from "react";

import { Address, TAddress } from "@/components/client/UserAddress";

type AddressFormProps = Partial<TAddress> & {
  action?: (payload: FormData) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setAddresses: Dispatch<SetStateAction<TAddress[]>>;
};

export function AddressForm({
  id,
  city,
  name,
  phone,
  action,
  surname,
  address,
  onSubmit,
}: AddressFormProps) {
  return (
    <form
      action={action}
      onSubmit={onSubmit}
      className="grid grid-cols-2 gap-4 lg:grid-cols-1 [&>label>input]:bg-accent"
    >
      <Address.Input
        name="Name"
        id="name"
        defaultValue={name}
        placeholder="Enter Name"
      />
      <Address.Input
        id="surname"
        name="Surname"
        defaultValue={surname}
        placeholder="Enter Surname"
      />
      <Address.Input
        id="city"
        name="City"
        defaultValue={city}
        placeholder="Enter City"
      />
      <Address.Input
        id="address"
        name="Address"
        defaultValue={address}
        placeholder="Enter Address"
      />
      <Address.Input
        name="Postal Code"
        id="postalCode"
        defaultValue={phone}
        placeholder="Enter Postal Code"
      />
      <Address.Input
        name="Phone"
        id="phone"
        defaultValue={phone}
        placeholder="Enter Phone"
      />
      <Address.Submit id={id} />
    </form>
  );
}