import cn from "@/utils/cn";
import { ButtonProps } from "@/types";

export default function Button({
  children,
  isSubmit,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={cn("rounded-md bg-accent px-4 py-3", className)}
      {...props}
    >
      {children}
    </button>
  );
}
