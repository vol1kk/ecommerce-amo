"use client";

import { useState } from "react";

import Modal from "@/components/common/Modal";
import { CrossIcon } from "@/components/common/Icons";
import { hideDetails } from "@/components/client/UserDetails";
import {
  Address,
  TAddress,
  createAddressAction,
} from "@/components/client/UserAddress";

type AddressesProps = {
  title: string;
  initialAddresses: TAddress[];
};

export default function Addresses({ title, initialAddresses }: AddressesProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [addresses, setAddresses] = useState(initialAddresses);

  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="mb-[1px] text-2xl font-semibold text-boldColor">
          {title}
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-purple-700 p-3 [&>svg>path]:stroke-white"
        >
          <CrossIcon className="rotate-45" width={22} height={22} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
        {addresses.map((address, ind) => (
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
            <Address.Tags tags={["Home"]} isDefault={true} />
            <Address.Actions
              id={address.id}
              isDefault={true}
              setAddresses={setAddresses}
            />
          </Address>
        ))}
      </div>
      <Modal title="Add Address" isOpen={isOpen} setIsOpen={setIsOpen}>
        <Address.Form
          setIsOpen={setIsOpen}
          action={createAddressAction}
          setAddresses={setAddresses}
        />
      </Modal>
    </section>
  );
}
