import Button from "@/components/Button";
import { CartIcon, HeartIcon, UserIcon } from "@/components/Icons";
import React from "react";
import cn from "@/utils/cn";

type HeaderActionsProps = {
  className?: string;
};

export default function HeaderActions({ className }: HeaderActionsProps) {
  return (
    <div className={cn("[&_button]:px-4", className)}>
      <Button className="group">
        <HeartIcon className="fill-transparent transition-[fill] group-hover:fill-red-500 [&>path]:transition-[stroke] group-hover:[&>path]:stroke-red-500" />
      </Button>
      <Button>
        <UserIcon />
      </Button>
      <Button>
        <CartIcon />
      </Button>
    </div>
  );
}
