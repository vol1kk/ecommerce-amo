"use client";

import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";

import { AddressService } from "@/services/AddressService";
import { TAddress } from "@/components/client/UserAddress";

type AddressDeleteProps = {
  id: string;
  setAddresses: Dispatch<SetStateAction<TAddress[]>>;
};

export function AddressDelete({ id, setAddresses }: AddressDeleteProps) {
  const { update } = useSession();

  async function handleAddressDelete() {
    const deletedAddress = await AddressService.deleteById(id);
    setAddresses(addresses =>
      addresses.filter(a => a.id !== deletedAddress.id),
    );

    update();
  }

  return (
    <button
      type="submit"
      className="text-red-500"
      onClick={handleAddressDelete}
    >
      Delete
    </button>
  );
}
