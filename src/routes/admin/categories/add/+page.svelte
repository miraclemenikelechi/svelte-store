<script lang="ts">
	import type { PageData } from "./$types";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Form from "$lib/components/ui/form/index.js";
	import { addCategorySchema, type tAddCategorySchema } from "$lib/schemas/form-schema";
	import { superForm, type Infer } from "sveltekit-superforms";
	import type { HTMLInputTypeAttribute } from "svelte/elements";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { Input } from "$lib/components/ui/input";

	interface iFormField {
		label: string;
		name: keyof Infer<tAddCategorySchema>;
		type?: HTMLInputTypeAttribute;
	}

	let { data }: { data: PageData } = $props();

	const form = superForm(data.form, {
		validators: zodClient(addCategorySchema),
		dataType: "json"
	});

	const { delayed, errors, enhance, form: formData } = form;
</script>

<section class="main-wrapper">
	<header>
		<h2 class="text-3xl font-bold capitalize tracking-tight">add new category</h2>
	</header>

	<footer>
		<form action="" method="POST">
			<Card.Root>
				<Card.Header>
					<Card.Title class="capitalize">category information</Card.Title>
				</Card.Header>

				<Card.Content class="space-y-4">
					<div class="grid grid-cols-2 gap-4">
						{@render formField({ label: "category name", name: "name" })}
						{@render formField({ label: "category description", name: "description" })}
					</div>

					{@render formField({ label: "sub categories", name: "subCategory" })}
				</Card.Content>
			</Card.Root>
		</form>
	</footer>
</section>

<!-- form field ui component -->
{#snippet formField({ label, name, type = "text" }: iFormField)}
	<Form.Field {form} {name}>
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="capitalize">{label}</Form.Label>
				<Input {type} {...props} bind:value={$formData[name]} />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
{/snippet}

<style lang="scss">
	.main-wrapper {
		@extend %main-wrapper;
	}
</style>
