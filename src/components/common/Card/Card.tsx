import { ReactNode } from "react";

import cn from "@/utils/cn";
import { CardImage } from "@/components/common/Card/CardImage";
import { CardFavorite } from "@/components/common/Card/CardFavorite";

export type CardProps = {
  className?: string;
  children: ReactNode;
};

export default function Card({ children, className }: CardProps) {
  return <div className={cn("grid gap-5", className)}>{children}</div>;
}

Card.Image = CardImage;
Card.Favorite = CardFavorite;
