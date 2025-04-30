"use server";

import { options } from "@/auth";
import { CheckoutFormInputs } from "@/hooks/useCheckout";
import { getServerSession } from "next-auth";

export const PayAction = async (data:CheckoutFormInputs, paymentMethod: string) => {
  const session = await getServerSession(options);
  const token = session?.user.token;
  let apiURL = `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}orders`;
  if (paymentMethod == "card") {
    apiURL = apiURL + `/checkout?url=${process.env.NEXT_PUBLIC_BASE_URL}`;
  }
  const res = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({
      shippingAddress: {
        ...data,
        lat: "String",
        long: "String",
      },
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  
  return await res.json();
};
