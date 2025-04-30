import { z } from "zod";

export const forgetpasswordSchema = z.object({
  email: z.string().email("Please write valid email"),
});
