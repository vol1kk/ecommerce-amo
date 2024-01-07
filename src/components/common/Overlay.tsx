"use client";

import { createPortal } from "react-dom";
import { ReactNode, useEffect, useState } from "react";

import cn from "@/utils/cn";

type OverlayProps = {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
};

export default function Overlay({ isOpen, children, className }: OverlayProps) {
  const [overlay, setOverlay] = useState<Element | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    if (!isOpen) document.body.style.overflow = "auto";
  }, [isOpen]);

  useEffect(() => {
    if (isMounted) {
      setOverlay(document.querySelector("#overlay"));
    }
  }, [isMounted]);

  if (overlay && isOpen) {
    return createPortal(
      <div
        role="dialog"
        className={cn(
          !isOpen && "invisible",
          "fixed inset-0 z-30 overflow-y-auto backdrop-blur-md",
          isOpen && className,
        )}
      >
        <div onClick={e => e.stopPropagation()}>{children}</div>
      </div>,
      overlay,
    );
  }

  return null;
}
