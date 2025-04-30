"use server";

import { RegisterInputs } from "@/components/features/auth/RegisterForm";

export const RegisterAction = async (data: RegisterInputs) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_PUBLIC_BASE_URL}auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error(`${(await res.json()).error}`);
    }

    return await res.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to connect"
    );
  }
};