"use client";
import useEffectAfterAuth from "@/hooks/useEffectAfterAuth";
import {
  AddCartItem,
  DeleteCartItem,
  UpdateCartItemQuantity,
} from "@/lib/actions/cart.action";
import { FetchUserCart } from "@/lib/api/cart.api";
import React, { createContext, PropsWithChildren, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../AuthProvider/AuthProvider";

interface CartContextType {
  cartItems: CartItem[];
  cart: Cart | null;
  numberOfCartItems: number;
  deleteCartItem: (id: string) => void;
  updateCartItemQuantity: (id: string, quantity: number) => void;
  addCartItem: (id: string, quantity?: number) => void;
  getUserCartItemsData: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cart, setCart] = useState<Cart | null>(null);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const { user } = useAuth();

  const getUserCartItemsData = async () => {
    const data = await FetchUserCart();
    setCart(data.cart);
    setCartItems(data.cart.cartItems);
    setNumberOfCartItems(data.numOfCartItems);
  };

  const withAuthCheck = async (callback: () => void | Promise<void>) => {
    if (!user) {
      toast.error("Please login first to perform this action.");
      return;
    }
    await callback();
  };

  const deleteCartItem = async (id: string) => {
    await withAuthCheck(async () => {
      const data = await DeleteCartItem(id);
      setCart(data.cart);
      setCartItems(data.cart.cartItems);
      setNumberOfCartItems(data.numOfCartItems);
    });
  };

  const updateCartItemQuantity = async (id: string, quantity: number) => {
    await withAuthCheck(async () => {
      const data = await UpdateCartItemQuantity(id, quantity);
      setCart(data.cart);
      setCartItems(data.cart.cartItems);
      setNumberOfCartItems(data.numOfCartItems);
    });
  };

  const addCartItem = async (id: string, quantity: number = 1) => {
    await withAuthCheck(async () => {
      try {
        const data = await AddCartItem(id, quantity);
        if (!data || data.error) {
          toast.error("Item is sold out");
          return;
        }
        setCart(data.cart);
        setCartItems(data.cart.cartItems);
        setNumberOfCartItems(data.numOfCartItems);
        toast.success("Product added successfully");
      } catch (error) {
        console.error("Add to cart error:", error);
        toast.error("Failed to add item to cart. Please try again.");
      }
    });
  };

  useEffectAfterAuth({
    fn: () => {
      getUserCartItemsData();
    },
  });

  return (
    <CartContext.Provider
      value={{
        cartItems,
        numberOfCartItems,
        cart,
        deleteCartItem,
        updateCartItemQuantity,
        addCartItem,
        getUserCartItemsData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
