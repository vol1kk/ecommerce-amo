"use client";

import { useTranslations } from "next-intl";

import cn from "@/utils/cn";
import Modal from "@/components/common/Modal";
import { useAction } from "@/hooks/useAction";
import {
  Address,
  TAddress,
  updateAddressAction,
} from "@/components/client/UserAddress";

type AddressUpdateProps = {
  address: TAddress;
};

export function AddressUpdate({ address }: AddressUpdateProps) {
  const t = useTranslations("General");

  const {
    modal: [isOpen, setIsOpen],
    form: [errors, formAction],
  } = useAction(updateAddressAction.bind(undefined, address.id));

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
        <Address.Form {...address} action={formAction} errors={errors} />
      </Modal>
    </button>
  );
}
