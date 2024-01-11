import { HTMLProps } from "react";
import cn from "@/utils/cn";

type AddressInputProps = {
  name: string;
  classNameLabel?: string;
} & HTMLProps<HTMLInputElement>;

export function AddressInput({
  id,
  type,
  name,
  className,
  classNameLabel,
  ...props
}: AddressInputProps) {
  return (
    <label className={classNameLabel}>
      <span className="font-semibold text-boldColor">{name}</span>
      <input
        type={type}
        name={id}
        id={id}
        className={cn("block w-full rounded-md bg-accent px-4 py-2", className)}
        {...props}
      />
    </label>
  );
}