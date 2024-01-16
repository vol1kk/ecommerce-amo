"use client";

import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

import cn from "@/utils/cn";
import Modal from "@/components/common/Modal";
import { AddressService } from "@/services/AddressService";
import { Address, TAddress } from "@/components/client/UserAddress";

type AddressUpdateProps = {
  address: TAddress;
  setAddresses: Dispatch<SetStateAction<TAddress[]>>;
};

export function AddressUpdate({ address, setAddresses }: AddressUpdateProps) {
  const t = useTranslations("Account");
  const { update } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  async function handleAddressUpdate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedAddress = await AddressService.update(
      address.id,
      Object.fromEntries(formData),
    );

    setAddresses(addresses =>
      addresses.map(a => (a.id === updatedAddress.id ? updatedAddress : a)),
    );

    update().then(() => setIsOpen(false));
  }

  return (
    <button
      onClick={() => setIsOpen(true)}
      className={cn(
        "border-l-[1px] border-[#D9D9D9] pl-2",
        !address.isDefault && "border-r-[1px] border-[#D9D9D9] pr-2",
      )}
    >
      {t("edit")}
      <Modal title="Edit Address" isOpen={isOpen} setIsOpen={setIsOpen}>
        <Address.Form {...address} onSubmit={handleAddressUpdate} />
      </Modal>
    </button>
  );
}
