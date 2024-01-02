import Link from "@/components/common/Link";
import { NewArrival } from "@/layouts/Home";
import { Card } from "@/components/common/Card";
import Section from "@/components/common/Section";

type SectionArrivalsProps = {
  arrivals: NewArrival[];
};

export default function HomeArrivals({ arrivals }: SectionArrivalsProps) {
  return (
    <Section name="New Arrivals">
      <div className="flex flex-wrap justify-center gap-8">
        {arrivals.map(arrival => (
          <Card key={arrival.name} className="relative">
            <Link href={arrival.href}>
              <Card.Image
                src={arrival.src}
                alt={arrival.name}
                className="h-[260px] w-[260px]"
              />
            </Link>
            <p className="font z-10 justify-self-center text-xl font-bold">
              <Link href={arrival.href}>{arrival.name}</Link>
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}