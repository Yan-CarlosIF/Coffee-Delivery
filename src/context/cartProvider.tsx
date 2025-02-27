import { useState } from "react";
import { CartCoffeesListContext, CartCoffee } from "./cartProductsList";

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartCoffee[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  
  const clearCart = () => {
    setCart([]);
  };

  const cartState = { cart, setCart, clearCart, paymentMethod, setPaymentMethod };

  return (
    <CartCoffeesListContext.Provider value={cartState}>
      {children}
    </CartCoffeesListContext.Provider>
  );
}

export default CartProvider;
