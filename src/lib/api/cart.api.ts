import { getSession } from "next-auth/react";

export const FetchUserCart = async () => {
  const session = await getSession();
  const token = session?.user.token;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}cart`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data: CartResponse = await response.json();
  return data;
};
