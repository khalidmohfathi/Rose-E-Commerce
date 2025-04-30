import { z } from "zod";

export const RegisterSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters long" })
    .max(20, { message: "First name must be at most 20 characters long" })
    .regex(/^[a-zA-Z]+$/, { message: "First name must contain only letters" }),
  lastName: z
    .string()
    .min(3, { message: "Last name must be at least 3 characters long" })
    .max(20, { message: "Last name must be at most 20 characters long" })
    .regex(/^[a-zA-Z]+$/, { message: "Last name must contain only letters" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .max(50, { message: "Email must be at most 50 characters long" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one digit" })
    .regex(/[@$!%*?&]/, {
      message: "Password must contain at least one special character",
    }),
  rePassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" })
    .max(15, { message: "Phone number must be at most 15 characters long" }),
  gender: z.enum(["male", "female"]),
});
