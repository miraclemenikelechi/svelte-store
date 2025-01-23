import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email("invalid email address"),
	password: z.string().min(8, "password must be more than 8 characters")
});

export type tLoginSchema = typeof loginSchema;
