import { ReactNode } from "react";

import cn from "@/utils/cn";
import { CardImage } from "@/components/Card/CardImage";
import { CardFavorite } from "@/components/Card/CardFavorite";

export type CardProps = {
  className?: string;
  children: ReactNode;
};

export default function Card({ children, className }: CardProps) {
  return <div className={cn("grid gap-5", className)}>{children}</div>;
}

Card.Image = CardImage;
Card.Favorite = CardFavorite;
