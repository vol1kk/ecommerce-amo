import { Suspense } from "react";

import Section from "@/components/common/Section";
import { ItemsList, ShopSkeleton } from "@/components/server/Shop";

type PageProps = {
  params: {
    category: string[];
  };
};

export default function Page({ params }: PageProps) {
  const category = params.category?.at(0);

  return (
    <main className="flex-1">
      <Section className="[&>div]:justify-center">
        <Suspense fallback={<ShopSkeleton />}>
          <ItemsList category={category} />
        </Suspense>
      </Section>
    </main>
  );
}
