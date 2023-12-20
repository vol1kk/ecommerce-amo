type TestimonialContent = {
  name: string;
  description: string;
};

export function TestimonialContent({
  name,
  description,
}: TestimonialContent) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-boldColor">{name}</h2>
      <p className="text-justify text-lightColor">{description}</p>
    </div>
  );
}
