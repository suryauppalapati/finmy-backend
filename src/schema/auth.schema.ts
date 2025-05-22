import { z } from "zod";

const signInSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email("Invalid email format"),
  password: z.string({ required_error: "Password is required" }).min(6, "Password must be at least 6 characters"),
});

const signUpSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .max(15, { message: "First name must be less than 15 characters" }),
  lastName: z
    .string({ required_error: "Last name is required" })
    .max(15, { message: "Last name must be less than 15 characters" }),
  email: z.string({ required_error: "Email is required" }).email("Invalid email format"),
  password: z.string({ required_error: "Password is required" }).min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string({ required_error: "Confirm Password is required" }),
});

export { signInSchema, signUpSchema };
