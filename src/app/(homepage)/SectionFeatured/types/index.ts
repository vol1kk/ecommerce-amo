export type FeaturedCategory = {
  image: {
    src: string;
    className?: string;
  };

  content: {
    href: string;
    title: string;
    subtitle: string;
    discount: number;
  };
};
