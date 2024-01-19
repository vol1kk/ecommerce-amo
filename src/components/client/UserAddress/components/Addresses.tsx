"use client";

import { ReactNode } from "react";
import { useTranslations } from "next-intl";

import Modal from "@/components/common/Modal";
import { useAction } from "@/hooks/useAction";
import { CrossIcon } from "@/components/common/Icons";
import {
  Address,
  TAddress,
  createAddressAction,
} from "@/components/client/UserAddress";

type AddressesProps = {
  title: string;
  children: ReactNode;
  addresses: TAddress[];
};

export default function Addresses({ title, children }: AddressesProps) {
  const t = useTranslations("Forms");

  const {
    modal: [isOpen, setIsOpen],
    form: [errors, formAction],
  } = useAction<TAddress, keyof TAddress>(createAddressAction);

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
      {children}
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={t("overlay.address_create")}
      >
        <Address.Form action={formAction} errors={errors} />
      </Modal>
    </section>
  );
}
