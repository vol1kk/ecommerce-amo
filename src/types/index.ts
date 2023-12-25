export type SelectedItem = {
  id: string;
  isInWishlist?: boolean;
  isInCart?: boolean;
  color: string;
  quantity: number;
  size: string;
  item: Item;
  itemId: string;
};

export type Item = {
  id: string;
  image: string;
  category: "men" | "women" | "combo";
  name: string;
  brand: string;
  price: number;
  details: ItemDetails;
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
