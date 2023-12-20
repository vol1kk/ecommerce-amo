"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import cn from "@/utils/cn";

type OverlayProps = {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
};

export default function OverlayPortal({
  isOpen,
  className,
  children,
}: OverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    if (!isOpen) document.body.style.overflow = "auto";
  }, [isOpen]);

  useEffect(() => {
    if (isMounted) {
      // @ts-ignore
      overlayRef.current = document.querySelector("#overlay");
    }
  }, [isMounted]);

  if (overlayRef.current) {
    return createPortal(
      <div
        role="dialog"
        className={cn(
          !isOpen && "invisible",
          "fixed inset-0 z-30 overflow-y-auto",
          className,
        )}
      >
        {children}
      </div>,
      overlayRef.current,
    );
  }

  return null;
}
