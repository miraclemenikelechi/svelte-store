import { z } from "zod";

export const addCategorySchema = z.object({
	name: z.string().min(1, "must be more than one character"),

	description: z.string().min(3, "must be more than 3 characters."),

	subCategories: z.string().array().min(1, "must be more than one category")
});

export type tAddCategorySchema = typeof addCategorySchema;
