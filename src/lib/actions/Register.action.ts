"use server";
import { z } from "zod";
import { RegisterSchema } from "../schemas/Register.schema";

type RegisterInputs = z.infer<typeof RegisterSchema>;

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
    return res;
  } catch (error) {
    throw error;
  }
};
