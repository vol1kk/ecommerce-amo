"use client";

import { HeartIcon } from "@/components/Icons";

export default function CardFavorite() {
  return (
    <button
      onClick={() => console.log("change isFavorite to true")}
      className="absolute right-4 top-4 rounded-full bg-white p-2"
    >
      <HeartIcon />
    </button>
  );
}
