"use server";
import { options } from "@/auth";
import { getServerSession } from "next-auth";

export const DeleteCartItem = async (id: string) => {
  const session = await getServerSession(options);
  const token = session?.user.token;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}cart/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data: CartResponse = await response.json();
  return data;
};

export const UpdateCartItemQuantity = async (id: string, quantity: number) => {
  const session = await getServerSession(options);
  const token = session?.user.token;
  const payload = { quantity };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}cart/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const data: CartResponse = await response.json();
  return data;
};

export const AddCartItem = async (id: string, quantity: number = 1) => {
  const session = await getServerSession(options);
  const token = session?.user.token;
  const payload = { product: id, quantity };
  console.log("payload", JSON.stringify(payload));

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}cart`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const data: CartResponse = await response.json();
  return data;
};
