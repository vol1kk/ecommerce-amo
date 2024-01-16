"use client";

import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import cn from "@/utils/cn";
import Modal from "@/components/common/Modal";
import {
  Address,
  TAddress,
  deleteAddressAction,
  updateAddressAction,
} from "@/components/client/UserAddress";

type AddressActionsProps = {
  address: TAddress;
  className?: string;
  setAddresses: Dispatch<SetStateAction<TAddress[]>>;
};

export function AddressActions({
  address,
  className,
  setAddresses,
}: AddressActionsProps) {
  const { update } = useSession();
  const t = useTranslations("Account");

  const [isOpen, setIsOpen] = useState(false);

  const [deleteState, deleteAction] = useFormState(
    deleteAddressAction.bind(undefined, address.id),
    null,
  );

  const [updateState, updateAction] = useFormState(updateAddressAction, null);

  useEffect(() => {
    if (deleteState?.ok) {
      setAddresses(addresses =>
        addresses.filter(a => a.id !== deleteState.data.id),
      );
    }

    if (updateState?.ok) {
      setAddresses(addresses =>
        addresses.map(a =>
          a.id === updateState.data.id ? updateState.data : a,
        ),
      );
    }

    if (deleteState?.ok || updateState?.ok) {
      update();
      setIsOpen(false);
    }
  }, [deleteState, updateState]);

  return (
    <>
      <div className={cn("flex gap-2 font-semibold", className)}>
        <form action={deleteAction} className="flex">
          <button type="submit">Delete</button>
        </form>
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            "border-l-[1px] border-[#D9D9D9] pl-2",
            !address.isDefault && "border-r-[1px] border-[#D9D9D9] pr-2",
          )}
        >
          {t("edit")}
        </button>
        {/* TODO: Make this not goofy */}
        {/*{!address.isDefault && (*/}
        {/*  <form action={updateAction}>*/}
        {/*    <button*/}
        {/*      name="setDefault"*/}
        {/*      value={JSON.stringify({*/}
        {/*        id: address.id,*/}
        {/*        isDefault: !address.isDefault,*/}
        {/*      })}*/}
        {/*      type="submit"*/}
        {/*    >*/}
        {/*      {t("set_default")}*/}
        {/*    </button>*/}
        {/*  </form>*/}
        {/*)}*/}
      </div>
      <Modal title="Edit Address" isOpen={isOpen} setIsOpen={setIsOpen}>
        <Address.Form {...address} action={updateAction} />
      </Modal>
    </>
  );
}
