import { ReactNode } from "react";

import cn from "@/utils/cn";

type SectionProps = {
  name?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({
  name,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("mx-auto max-w-screen-xl p-4", className)}
      {...props}
    >
      {name && (
        <h2 className="relative mb-10 pl-4 text-xl font-bold before:absolute before:left-0 before:h-full before:w-[5px] before:rounded-md before:bg-purple-700">
          {name}
        </h2>
      )}

      <div className="flex flex-wrap justify-center gap-8">{children}</div>
    </section>
  );
}
