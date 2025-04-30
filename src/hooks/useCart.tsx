"use client";

import { CartContext } from "@/components/Providers/CartProvider/CartProvider";
import { useContext } from "react";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a ModalProvider");
  return context;
}

export default useCart;
