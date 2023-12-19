export type Item = {
  category: "men" | "women" | "combo";
  details: ItemDetails;
  image: string;
  name: string;
  brand: string;
  price: number;
  isFavorite: boolean;
};

export type ItemDetails = {
  fabric: string;
  pattern: string;
  fit: string;
  neck: string;
  sleeve: string;
  style: string;
};
