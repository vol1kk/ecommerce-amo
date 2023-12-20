import React from "react";

import cn from "@/utils/cn";
import Button from "@/components/Button";
import { CartIcon, HeartIcon } from "@/components/Icons";
import { HeaderAuthBtn } from "@/layouts/Header/components/HeaderAuthBtn";

type HeaderActionsProps = {
  className?: string;
};

export function HeaderActions({ className }: HeaderActionsProps) {
  return (
    <div className={cn("[&_button]:px-4", className)}>
      <Button className="group">
        <HeartIcon className="fill-transparent transition-[fill] group-hover:fill-red-500 [&>path]:transition-[stroke] group-hover:[&>path]:stroke-red-500" />
      </Button>
      <HeaderAuthBtn />
      <Button>
        <CartIcon />
      </Button>
    </div>
  );
}
