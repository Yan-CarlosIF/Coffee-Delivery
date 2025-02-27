import React, { createContext } from "react";
import { CoffeeItemProps } from "../components/CoffeeItem";

export type CartCoffee = Pick<CoffeeItemProps, "img" | "name"> & {
  quantity: number;
};

type CartCoffeeContextType = {
  cart: CartCoffee[];
  setCart: React.Dispatch<React.SetStateAction<CartCoffee[]>>;
  clearCart: () => void;
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
};

export const CartCoffeesListContext = createContext<CartCoffeeContextType>(
  {} as CartCoffeeContextType
);
