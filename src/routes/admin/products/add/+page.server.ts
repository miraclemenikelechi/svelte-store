import { addProductSchema } from "$lib/schemas/add-product";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function () {
	return { form: await superValidate(zod(addProductSchema)) };
};
