export type NewArrival = {
  src: string;
  name: string;
  href: string;
};

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

export type DiscountedItem = {
  image: {
    src: string;
    className?: string;
  };

  content: {
    title: string;
    subtitle: string;
    discount: number;
    className?: string;
  };

  isLimited?: boolean;
};

export type Slide = {
  image: {
    src: string;
  };
  content: {
    title: string;
    subtitle: string;
    category: string;
  };
};
