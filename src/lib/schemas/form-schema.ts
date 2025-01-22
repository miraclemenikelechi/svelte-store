import { z } from "zod";

export const addProductSchema = z.object({
	name: z.string().min(1, "must be more than one character."),

	description: z.string().min(3, "must be more than 3 characters."),

	category: z.number().positive(),

	subCategory: z.string().min(1, "must be more than one character."),

	price: z.number().positive(),

	stock: z.number().nonnegative(),

	images: z
		.instanceof(File, { message: "please upload (an image or) images of the product" })
		.refine((file) => file.size < 500_000, "file must not be more than 500KB")
		.array()
});

export type tAddProductSchema = typeof addProductSchema;

export const addCategorySchema = z.object({
	name: z.string().min(1, "must be more than one character"),

	description: z.string().min(3, "must be more than 3 characters."),

	subCategories: z.string().array().min(1, "must be more than one category")
});

export type tAddCategorySchema = typeof addCategorySchema;
