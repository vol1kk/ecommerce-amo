import React, { ComponentPropsWithoutRef } from "react";
import { User } from "next-auth";

export type SelectedItem = {
  id: string;
  isInWishlist: boolean;
  isInCart: boolean;
  color?: string;
  quantity: number;
  size?: string;
  item: Item;
  itemId: string;
  user?: User;
  userId?: string;
};

export type Item = {
  id: string;
  image: string;
  category: "men" | "women" | "combo";
  name: string;
  brand: string;
  price: number;
  comments: Comment[];
  details: ItemDetails;
  detailsId: string;
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
  item?: Item;
};

type Comment = {
  id: string;
  user: User;
  item: Item;
  text: string;
  rating: number;
  userId: string;
  itemId: string;
};

type CustomButtonProps = {
  isSubmit?: boolean;
};

type ZodError = {
  path: string[];
  message: string;
  minimum?: number;
};

export type ValidationFailed = {
  errors: ZodError[];
  message: string;
  statusCode: number;
};

export type SVGProps = React.SVGProps<SVGSVGElement>;
export type ButtonProps = ComponentPropsWithoutRef<"button"> &
  CustomButtonProps;

export type WithRequired<T, V extends keyof T> = Partial<T> & {
  [K in V]-?: T[V];
};
