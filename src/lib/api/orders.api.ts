"use server"
import { options } from "@/auth";
import { getServerSession } from "next-auth";

export const fetchAllOrders = async () => {
  const session = await getServerSession(options);
  const token = session?.user.token;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}orders?sort=-createdAt`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  const orders: Order[] = data.orders;
  return orders;
};

export const fetchSpecificOrder = async (id: string) => {
  const session = await getServerSession(options);
  const token = session?.user.token;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}orders?_id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  const order: Order[] = data.orders;
  if (order.length === 1) return order[0];
  else return null;
};
