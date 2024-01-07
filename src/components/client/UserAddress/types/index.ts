export type TAddress = {
  id?: string;
  name?: string;
  city?: string;
  phone?: string;
  surname?: string;
  address?: string;
};

type AddressActionErrorResponse = {
  ok: false;
  errors: {
    name?: string;
    surname?: string;
    city?: string;
    address?: string;
    phone?: string;
  };
};

type AddressActionSuccessResponse = {
  ok: true;
  data: Partial<TAddress>;
};

export type AddressActionResponse =
  | AddressActionErrorResponse
  | AddressActionSuccessResponse;

export type FormAddressAction = (
  state: AddressActionResponse | null,
  payload: FormData,
) => AddressActionResponse | Promise<AddressActionResponse>;
