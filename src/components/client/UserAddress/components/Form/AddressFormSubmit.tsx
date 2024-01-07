"use client";

import { useFormStatus } from "react-dom";

import Button from "@/components/common/Button";

type AddressFormSubmitProps = {
  id?: string;
};

export function AddressFormSubmit({ id }: AddressFormSubmitProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      name="id"
      value={id}
      type="submit"
      className="col-span-2 bg-purple-700 text-center font-bold text-white lg:col-auto"
    >
      {pending ? "Loading" : "Submit"}
    </Button>
  );
}
