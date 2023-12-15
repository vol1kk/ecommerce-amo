import { ReactNode } from "react";

import cn from "@/utils/cn";

type AbsoluteCardContentProps = {
  children: ReactNode;
  className?: string;
};

export default function AbsoluteCardContent({
  children,
  className,
}: AbsoluteCardContentProps) {
  return (
    <div
      className={cn(
        "absolute top-1/2 grid -translate-y-1/2 gap-5 p-5 font-bold text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
