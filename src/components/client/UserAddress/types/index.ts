export type TAddress = {
  id: string;
  name: string;
  city: string;
  phone: string;
  surname: string;
  address: string;
  tags: string[];
  isDefault: boolean;
};

type AddressActionErrorResponse = {
  ok: false;
  errors: Partial<Omit<TAddress, "id">>;
};

type AddressActionSuccessResponse = {
  ok: true;
  data: TAddress;
};

type AddressActionResponse =
  | AddressActionErrorResponse
  | AddressActionSuccessResponse;

export type FormAddressAction = (
  state: AddressActionResponse | null,
  payload: FormData,
) => AddressActionResponse | Promise<AddressActionResponse>;
