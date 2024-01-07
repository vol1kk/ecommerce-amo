"use client";

import { useFormStatus } from "react-dom";

import Button from "@/components/common/Button";

export function AddressFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="col-span-2 bg-purple-700 text-center font-bold text-white lg:col-auto"
    >
      {pending ? "Loading" : "Submit"}
    </Button>
  );
}
