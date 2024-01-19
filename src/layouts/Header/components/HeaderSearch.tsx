import React from "react";

import cn from "@/utils/cn";
import { SearchIcon } from "@/components/common/Icons";

type HeaderSearchProps = {
  className?: string;
  placeholder: string;
};

export function HeaderSearch({ className, placeholder }: HeaderSearchProps) {
  return (
    <search className={cn("relative w-full", className)}>
      <label className="w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full rounded-md bg-accent px-6 py-3 pl-10 outline-0 placeholder:text-lightColor"
        />
      </label>
    </search>
  );
}
