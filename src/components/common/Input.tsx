import { forwardRef, HTMLProps, ReactNode } from "react";

import cn from "@/utils/cn";

type InputProps = HTMLProps<HTMLInputElement> & {
  hasError?: boolean;
  children?: ReactNode;
  classNameLabel?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, name, className, hasError, children, ...props },
  ref,
) {
  return (
    <label htmlFor={id}>
      {children}
      <input
        ref={ref}
        id={id}
        name={name || id}
        className={cn(
          "w-full rounded-md bg-accent px-4 py-3",
          hasError && "border-2 border-red-500",
          className,
        )}
        {...props}
      />
    </label>
  );
});

export default Input;
