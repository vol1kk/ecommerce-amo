export type TAddress = {
  id: string;
  name: string;
  city: string;
  phone: string;
  surname: string;
  address: string;
  postalCode: string;
  tags: string[];
  isDefault: boolean;
};

export type AddressFormError = {
  [K in keyof TAddress]?: string;
};
