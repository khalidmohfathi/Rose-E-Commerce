import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Please write valid email"),
  password: z.string().min(6, "Password must contain at least 6 characters"),
});
