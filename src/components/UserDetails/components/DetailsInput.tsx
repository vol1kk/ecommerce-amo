import { forwardRef, HTMLProps } from "react";

import cn from "@/utils/cn";

type DetailsInputProps = HTMLProps<HTMLInputElement>;

const DetailsInput = forwardRef<HTMLInputElement, DetailsInputProps>(
  function DetailsInput({ className, ...props }, ref) {
    return (
      <label htmlFor={props.name}>
        <input
          ref={ref}
          {...props}
          id={props.name}
          className={cn("w-full rounded-md bg-accent px-4 py-3", className)}
        />
      </label>
    );
  },
);

export default DetailsInput;
