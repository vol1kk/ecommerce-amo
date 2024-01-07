import { ReactNode } from "react";

import { AddressForm } from "@/components/client/UserAddress/components/Form/AddressForm";
import { AddressTags } from "@/components/client/UserAddress/components/common/AddressTags";
import { AddressInput } from "@/components/client/UserAddress/components/Form/AddressInput";
import { AddressActions } from "@/components/client/UserAddress/components/common/AddressActions";
import { AddressFormSubmit } from "@/components/client/UserAddress/components/Form/AddressFormSubmit";

type AddressProps = {
  children: ReactNode;
};

export default function Address({ children }: AddressProps) {
  return <div className="grid gap-3 rounded-md bg-accent p-4">{children}</div>;
}

Address.Tags = AddressTags;
Address.Form = AddressForm;
Address.Input = AddressInput;
Address.Actions = AddressActions;
Address.Submit = AddressFormSubmit;
