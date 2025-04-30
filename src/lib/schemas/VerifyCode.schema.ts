import { z } from "zod";

export const verifyCodeSchema = z.object({
    resetCode: z
    .string()
    .min(6, { message: "Code must be at least 6 characters long" })
    .max(6, { message: "Code must be at most 6 characters long" }),
});
