export type Item = {
  id: string;
  category: "men" | "women" | "combo";
  details: ItemDetails;
  image: string;
  name: string;
  brand: string;
  price: number;
};

export type ItemDetails = {
  id: string;
  sizes: string[];
  colors: string[];
  fabric: string;
  pattern: string;
  fit: string;
  neck: string;
  sleeve: string;
  style: string;
  comments: Comment[];
};

type Comment = {
  id: string;
  author: string;
  text: string;
  rating: number;
};
