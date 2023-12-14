import { ComponentPropsWithoutRef } from "react";

type CustomProps = {
  isSubmit?: boolean;
};

export type ButtonProps = ComponentPropsWithoutRef<"button"> & CustomProps;
