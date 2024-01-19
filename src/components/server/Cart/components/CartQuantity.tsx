"use client";

import { useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce";
import { ItemService } from "@/services/ItemService";

type CartQuantityProps = {
  id: string;
  quantity: number;
};

export default function CartQuantity({
  id,
  quantity: initialQuantity,
}: CartQuantityProps) {
  const [localQuantity, setLocalQuantity] = useState(initialQuantity);
  const debouncedQuantity = useDebounce(localQuantity);

  useEffect(() => {
    if (debouncedQuantity >= 1 && Number.isFinite(debouncedQuantity)) {
      (async function quantityUpdate() {
        await ItemService.updateSelectedItem(id, {
          quantity: debouncedQuantity,
        });
      })();
    }
  }, [debouncedQuantity, id]);

  const decreaseQuantity = () =>
    setLocalQuantity(prev => (prev > 1 ? prev - 1 : prev));
  const increaseQuantity = () => setLocalQuantity(prev => (prev += 1));

  return (
    <form className="flex items-center justify-center">
      <div className="rounded-lg bg-accent [&>button]:px-4 [&>button]:py-2">
        <button
          type="button"
          onClick={decreaseQuantity}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="mx-2 inline-block font-semibold">{localQuantity}</span>
        <button
          type="button"
          onClick={increaseQuantity}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </form>
  );
}
