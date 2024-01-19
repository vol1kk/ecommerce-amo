import { ReactNode } from "react";

import { AddressForm } from "@/components/client/UserAddress/components/AddressForm";
import { AddressTags } from "@/components/client/UserAddress/components/common/AddressTags";
import { AddressDelete } from "@/components/client/UserAddress/components/common/AddressDelete";
import { AddressUpdate } from "@/components/client/UserAddress/components/common/AddressUpdate";
import { AddressActions } from "@/components/client/UserAddress/components/common/AddressActions";

type AddressProps = {
  children: ReactNode;
};

export default function Address({ children }: AddressProps) {
  return <div className="grid gap-3 rounded-md bg-accent p-4">{children}</div>;
}

Address.Tags = AddressTags;
Address.Form = AddressForm;
Address.Delete = AddressDelete;
Address.Update = AddressUpdate;
Address.Actions = AddressActions;
