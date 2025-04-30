import { z } from "zod";

export const checkoutSchema = z.object({
  street: z.string().min(1),
  phone: z
    .string()
    .regex(/^\+201[1250][0-9]{8}$/, "phone must be like +201XXXXXXXXX"),
  city: z.string().min(1),
});
