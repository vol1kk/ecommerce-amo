"use client";

import React, { useState } from "react";
import OverlayPortal from "@/components/Overlay";

export default function HeaderBurger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(prev => !prev)}
        className="right-10 z-40 hidden h-[14px] cursor-pointer md:absolute md:block [&>span]:absolute [&>span]:h-[2px] [&>span]:w-[20px] [&>span]:bg-boldColor"
      >
        <span className="top-0" />
        <span className="top-1/2 -translate-y-1/2" />
        <span className="bottom-0" />
      </div>
      <OverlayPortal isOpen={isOpen}>
        <div className="h-full w-full bg-black">Test</div>
      </OverlayPortal>
    </>
  );
}
