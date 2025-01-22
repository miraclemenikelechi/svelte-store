<script lang="ts">
	import type { PageData } from "./$types";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Form from "$lib/components/ui/form/index.js";
	import { addCategorySchema, type tAddCategorySchema } from "$lib/schemas/form-schema";
	import { superForm, type Infer } from "sveltekit-superforms";
	import type { HTMLInputTypeAttribute } from "svelte/elements";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { Input } from "$lib/components/ui/input";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { X } from "lucide-svelte";

	interface iFormField {
		label: string;
		name: keyof Infer<tAddCategorySchema>;
		type?: HTMLInputTypeAttribute;
	}

	let { data }: { data: PageData } = $props();
	let subCategoryInput = $state("");

	const form = superForm(data.form, {
		validators: zodClient(addCategorySchema),
		dataType: "json"
	});

	const { delayed, errors, enhance, form: formData } = form;

	function handleCategoryInputChange(event: Event): void {
		let input = event.target as HTMLInputElement;
		const categoryValue = input.value;

		if (categoryValue.endsWith(" ")) {
			const value = categoryValue.trim();

			if (value && !$formData.subCategories.includes(value)) {
				$formData.subCategories = [...$formData.subCategories, value];
				input.value = "";
				event.preventDefault();
			}
		}
	}

	function removeSubCategory(subCategoryIndex: number): void {
		$formData.subCategories = $formData.subCategories.filter(
			(_, index) => index !== subCategoryIndex
		);
	}
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

					{@render subCategoryFormField()}
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

<!-- sub category input field -->
{#snippet subCategoryFormField()}
	<Form.Field {form} name="subCategories">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="capitalize">sub categories</Form.Label>
				{#if $formData.subCategories.length}
					{@render subCategoryBadge()}
				{/if}
				<Input
					{...props}
					bind:value={subCategoryInput}
					placeholder="type product sub-category and press space to add."
					oninput={handleCategoryInputChange}
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
{/snippet}

<!-- sub category badge ui -->
{#snippet subCategoryBadge()}
	<div>
		{#each $formData.subCategories as subCategory, index (index)}
			<Badge class="">
				<div class="flex items-center justify-center">
					<span>{subCategory}</span>
					<button type="button" class="size-4" onclick={() => removeSubCategory(index)}>
						<X class="hover:text-red-500" />
					</button>
				</div>
			</Badge>
		{/each}
	</div>
{/snippet}

<style lang="scss">
	.main-wrapper {
		@extend %main-wrapper;
	}
</style>
