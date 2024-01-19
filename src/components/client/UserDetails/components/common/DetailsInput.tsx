import { forwardRef, HTMLProps } from "react";

import cn from "@/utils/cn";

type DetailsInputProps = HTMLProps<HTMLInputElement> & { hasError?: boolean };

export const DetailsInput = forwardRef<HTMLInputElement, DetailsInputProps>(
  function DetailsInput({ className, hasError, ...props }, ref) {
    return (
      <label htmlFor={props.name}>
        <input
          ref={ref}
          {...props}
          id={props.name}
          className={cn(
            "w-full rounded-md bg-accent px-4 py-3",
            hasError && "border-2 border-red-500",
            className,
          )}
        />
      </label>
    );
  },
);
