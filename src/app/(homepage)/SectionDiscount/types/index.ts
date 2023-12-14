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
