import Section from "@/components/Section";
import { Clothing } from "@/constants/clothing";
import { Card } from "@/components/Card";
import Button from "@/components/Button";
import Link from "next/link";
import { HeartIcon } from "@/components/Icons";

type PageProps = {
  params: {
    category: string[];
  };
};

export default function Page({ params }: PageProps) {
  const category = params.category?.at(0);

  const filteredItems = Clothing.filter(i =>
    category ? i.category === category : true,
  );

  if (filteredItems.length === 0) {
    return (
      <main className="flex flex-1 flex-col place-content-center font-bold">
        <h2 className="mb-4 text-center text-3xl"> No items found</h2>
        <Button className="self-center bg-[#8A33FD] text-white">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <Section className="[&>div]:justify-center">
        <div className="grid grid-cols-4 gap-4 sm:!grid-cols-1 lg:grid-cols-2">
          {filteredItems.map((item, ind) => (
            <Card key={ind}>
              <div className="relative">
                <Card.Image
                  src={item.image}
                  alt={item.name}
                  href="/shop/category/uuid"
                />
                <Card.Favorite />
              </div>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h2 className="mb-1 font-bold">{item.name}</h2>
                  <h3 className="text-sm text-lightColor">{item.brand}</h3>
                </div>
                <div className="flex h-fit items-center rounded-md bg-accent px-6 py-2 text-sm font-bold">
                  ${item.price}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
