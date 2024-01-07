export { default as Addresses } from "@/components/client/UserAddress/components/Addresses";
export { default as Address } from "@/components/client/UserAddress/components/common/Address";
export { createAddressAction } from "@/components/client/UserAddress/actions/createAddressAction";
export { deleteAddressAction } from "@/components/client/UserAddress/actions/deleteAddressAction";

export type {
  TAddress,
  FormAddressAction,
  AddressActionResponse,
} from "@/components/client/UserAddress/types";
