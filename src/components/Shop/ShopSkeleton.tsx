import { Card } from "@/components/common/Card";

export default function ShopSkeleton() {
  const items = Array.from({ length: 8 }, (_, ind) => ind);

  return (
    <div className="grid grid-cols-4 gap-4 sm:!grid-cols-1 lg:grid-cols-2">
      {items.map(v => (
        <Card key={v}>
          <div className="h-[370px] w-[280px] animate-pulse rounded-md bg-gray-300" />
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="mb-1 animate-pulse rounded-md bg-gray-300 font-bold">
                <span className="invisible">Name Placeholder</span>
              </h2>
              <h3 className="animate-pulse rounded-md bg-gray-300 text-sm">
                <span className="invisible">Brand Placeholder</span>
              </h3>
            </div>
            <div className="animate-pulse rounded-md bg-gray-300 px-6 py-2 text-sm font-bold">
              <span className="invisible">$69</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
