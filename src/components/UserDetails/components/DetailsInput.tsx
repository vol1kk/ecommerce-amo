import { HTMLProps } from "react";

import cn from "@/utils/cn";

type DetailsInputProps = HTMLProps<HTMLInputElement>;

export default function DetailsInput({
  className,
  ...props
}: DetailsInputProps) {
  return (
    <label htmlFor={props.name}>
      <input
        className={cn("w-full rounded-md bg-accent px-4 py-3", className)}
        {...props}
      />
    </label>
  );
}
