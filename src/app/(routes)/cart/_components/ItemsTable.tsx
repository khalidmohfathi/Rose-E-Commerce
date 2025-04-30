"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Loader2, X } from "lucide-react";
import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";

const ItemsTable = () => {
  const { cartItems, deleteCartItem, updateCartItemQuantity } = useCart();
  const [loadingItemId, setLoadingItemId] = useState<string | null>(null);

  const handleIncrement = async (itemId: string, quantity: number) => {
    setLoadingItemId(itemId);
    try {
      await updateCartItemQuantity(itemId, quantity + 1);
      toast.success("Item quantity increased");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update quantity");
    } finally {
      setLoadingItemId(null);
    }
  };

  const handleDecrement = async (itemId: string, quantity: number) => {
    setLoadingItemId(itemId);
    try {
      if (quantity === 1) {
        await deleteCartItem(itemId);
        toast.success("Item removed from cart");
      } else {
        await updateCartItemQuantity(itemId, quantity - 1);
        toast.success("Item quantity decreased");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update quantity");
    } finally {
      setLoadingItemId(null);
    }
  };

  const handleDelete = async (itemId: string) => {
    setLoadingItemId(itemId);
    try {
      await deleteCartItem(itemId);
      toast.success("Item removed from cart");
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove item");
    } finally {
      setLoadingItemId(null);
    }
  };

  return (
    <table className="border-collapse">
      <thead>
        <tr className="text-left">
          {[
            "IMAGE",
            "Product Name",
            "Price",
            "Quantity",
            "Subtotal",
            "Remove",
          ].map((text) => (
            <th key={text} className="py-2 px-4 text-center text-nowrap">
              <div className="border-b-2 pb-2 border-[#DEE2E6] upper text-sm inline-block">
                {text}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item._id} className="text-center">
            <td className="py-4 px-4">
              <div className="border p-1 rounded-2xl inline-block w-30 h-30 relative">
                <Image
                  fill
                  src={item.product.imgCover}
                  alt={item.product.title}
                  className="rounded-2xl"
                />
              </div>
            </td>

            <td className="py-4 px-4">
              <div className="flex justify-center ms-14">
                <div className="flex flex-col items-start w-full text-[#757F95] text-nowrap">
                  <h2 className="text-main font-semibold">
                    {item.product.title.split(" ").splice(0, 2).join(" ")}
                  </h2>
                  <p>
                    Type: {item.product.slug.split("-").splice(0, 2).join("-")}
                  </p>
                  <p>Color: Orange</p>
                </div>
              </div>
            </td>

            <td className="py-4 px-4">${item.product.priceAfterDiscount}</td>

            <td className="py-4 px-4">
              <div className="flex gap-3 justify-center items-center">
                <button
                  onClick={() =>
                    handleIncrement(item.product._id, item.quantity)
                  }
                  disabled={loadingItemId === item.product._id}
                  className="bg-[#FEEDF7] text-primary size-8 rounded-full cursor-pointer flex justify-center items-center disabled:opacity-50"
                >
                  {loadingItemId === item.product._id ? (
                    <Loader2 className="animate-spin size-5" />
                  ) : (
                    <Plus />
                  )}
                </button>

                <div className="text-primary">{item.quantity}</div>

                <button
                  onClick={() =>
                    handleDecrement(item.product._id, item.quantity)
                  }
                  disabled={loadingItemId === item.product._id}
                  className="bg-[#FEEDF7] text-primary size-8 rounded-full cursor-pointer flex justify-center items-center disabled:opacity-50"
                >
                  {loadingItemId === item.product._id ? (
                    <Loader2 className="animate-spin size-5" />
                  ) : (
                    <Minus />
                  )}
                </button>
              </div>
            </td>

            <td className="py-4 px-4">${item.price}</td>

            <td className="py-4 px-4">
              <div className="flex justify-center">
                <button
                  onClick={() => handleDelete(item.product._id)}
                  disabled={loadingItemId === item.product._id}
                  className="border-gray-400 font-semibold cursor-pointer border rounded-full min-w-10 max-w-10 max-h-10 min-h-10 flex justify-center items-center disabled:opacity-50"
                >
                  {loadingItemId === item.product._id ? (
                    <Loader2 className="animate-spin size-5" />
                  ) : (
                    <X />
                  )}
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemsTable;
