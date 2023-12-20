import { ReactNode } from "react";

import cn from "@/utils/cn";
import { AbsoluteCardImage } from "@/components/AbsoluteCard/AbsoluteCardImage";
import { AbsoluteCardContent } from "@/components/AbsoluteCard/AbsoluteCardContent";

type AbsoluteCardProps = {
  className?: string;
  children: ReactNode;
};

export default function AbsoluteCard({
  className,
  children,
}: AbsoluteCardProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-md", className)}>
      {children}
    </div>
  );
}

AbsoluteCard.Image = AbsoluteCardImage;
AbsoluteCard.Content = AbsoluteCardContent;
