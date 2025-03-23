import z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export type loginSchema = z.infer<typeof loginSchema>;
