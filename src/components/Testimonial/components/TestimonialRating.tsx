import { StarIcon } from "@/components/Icons";

type TestimonialRatingProps = {
  rating: number;
};

export default function TestimonialRating({ rating }: TestimonialRatingProps) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, ind) => {
        const checkedRating = rating - ind;

        return (
          <StarIcon
            fillStyle={
              checkedRating === 0.5
                ? "half"
                : checkedRating > 0
                  ? "full"
                  : "empty"
            }
            key={ind}
          />
        );
      })}
    </div>
  );
}
