"use client";

import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";

import Modal from "@/components/common/Modal";
import { CrossIcon } from "@/components/common/Icons";
import { AddressService } from "@/services/AddressService";
import { hideDetails } from "@/components/client/UserDetails";
import { Address, TAddress } from "@/components/client/UserAddress";
import { useTranslations } from "next-intl";

type AddressesProps = {
  title: string;
  initialAddresses: TAddress[];
};

export default function Addresses({ title, initialAddresses }: AddressesProps) {
  const t = useTranslations("Address");

  const [isOpen, setIsOpen] = useState(false);
  const [addresses, setAddresses] = useState(initialAddresses);

  const { update } = useSession();

  async function handleAddressCreation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const createdAddress = await AddressService.create(
      Object.fromEntries(new FormData(e.currentTarget)),
    );

    setAddresses(prev => [...prev, createdAddress]);
    update().then(() => setIsOpen(false));
  }

  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="mb-[1px] text-2xl font-semibold text-boldColor">
          {title}
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="group rounded-full bg-purple-700 p-3 [&>svg>path]:stroke-white"
        >
          <CrossIcon
            className="rotate-45 transition-transform group-hover:rotate-12"
            width={22}
            height={22}
          />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
        {addresses?.map((address, ind) => (
          <Address key={ind}>
            <h3 className="text-xl font-bold">
              {address.name} {address.surname}
            </h3>
            <div>
              <p>{hideDetails("380961234567", "number")}</p>
              <p>
                {address.address}, {address.city}
              </p>
            </div>
            <Address.Tags tags={["Home"]} isDefault={address.isDefault} />
            <Address.Actions>
              <Address.Delete id={address.id} setAddresses={setAddresses} />
              <Address.Update address={address} setAddresses={setAddresses} />
            </Address.Actions>
          </Address>
        ))}
      </div>
      <Modal title={t("address_create")} isOpen={isOpen} setIsOpen={setIsOpen}>
        <Address.Form t={t} onSubmit={handleAddressCreation} />
      </Modal>
    </section>
  );
}
