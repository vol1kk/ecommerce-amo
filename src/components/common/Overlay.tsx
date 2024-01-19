"use client";

import { createPortal } from "react-dom";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import cn from "@/utils/cn";

type OverlayProps = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

export default function Overlay({
  isOpen,
  children,
  className,
  setIsOpen,
}: OverlayProps) {
  const [overlay, setOverlay] = useState<Element | null>(null);

  const handleKeyDown = useCallback(
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    },
    [setIsOpen],
  );

  useEffect(() => setOverlay(document.querySelector("#overlay")), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("keydown", handleKeyDown);
    }
    if (!isOpen) {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("keydown", handleKeyDown);
    }
  }, [handleKeyDown, isOpen]);

  if (overlay && isOpen) {
    return createPortal(
      <div
        role="dialog"
        onClick={() => setIsOpen(false)}
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
