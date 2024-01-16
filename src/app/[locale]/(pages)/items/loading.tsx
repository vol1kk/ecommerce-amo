import Section from "@/components/common/Section";
import { ShopSkeleton } from "@/components/server/Shop";

export default function Loading() {
  return (
    <Section className="[&>div]:justify-center">
      <ShopSkeleton />
    </Section>
  );
}
