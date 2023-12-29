"use client";

import React, { useState } from "react";

import { Navbar } from "@/layouts/Sidebar";
import OverlayPortal from "@/components/common/Overlay";
import { HeaderActions, HeaderSearch } from "@/layouts/Header";

export function HeaderBurger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(prev => !prev)}
        className="right-10 z-40 hidden h-[14px] cursor-pointer sm:absolute sm:block [&>span]:absolute [&>span]:h-[2px] [&>span]:w-[20px] [&>span]:bg-boldColor"
      >
        <span className="top-0" />
        <span className="top-1/2 -translate-y-1/2" />
        <span className="bottom-0" />
      </div>
      <OverlayPortal isOpen={isOpen} className="h-full w-full bg-white">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Navbar className="mb-4 !flex-col" />
          <HeaderSearch className="mb-4" />
          <HeaderActions className="grid gap-2" />
        </div>
      </OverlayPortal>
    </>
  );
}
