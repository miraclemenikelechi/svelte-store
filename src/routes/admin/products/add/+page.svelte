<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Form from "$lib/components/ui/form/index.js";
	import { Input } from "$lib/components/ui/input";
	import { addProductSchema, type tAddProductSchema } from "$lib/schemas/form-schema.js";
	import Loader from "lucide-svelte/icons/loader";
	import type { HTMLInputTypeAttribute } from "svelte/elements";
	import { filesProxy, superForm, type Infer } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import type { PageData } from "./$types";

	interface iFormField {
		label: string;
		name: keyof Infer<tAddProductSchema>;
		type?: HTMLInputTypeAttribute;
	}

	interface iPreview {
		images: string[];
	}

	let { data }: { data: PageData } = $props();

	const form = superForm(data.form, {
		validators: zodClient(addProductSchema),
		validationMethod: "auto"
	});

	const { delayed, errors, enhance, form: formData } = form;
	const images = filesProxy(form, "images");
	let imagesPreview = $derived(Array.from($images).map((file) => URL.createObjectURL(file)));
</script>

<section class="main-wrapper">
	<header>
		<h2 class="text-3xl font-bold capitalize tracking-tight">add new product</h2>
	</header>

	<footer>
		<form action="" method="POST" enctype="multipart/form-data" use:enhance>
			<Card.Root>
				<Card.Header>
					<Card.Title class="capitalize">product information</Card.Title>
				</Card.Header>

				<Card.Content class="space-y-4">
					{@render formField({ label: "product name", name: "name" })}
					{@render formField({ label: "description", name: "description" })}

					<div class="grid grid-cols-2 gap-4">
						{@render formField({ label: "price", name: "price", type: "number" })}
						{@render formField({ label: "stock", name: "stock", type: "number" })}
					</div>

					<div class="grid grid-cols-2 gap-4">
						{@render formField({ label: "categpry", name: "category", type: "number" })}
						{@render formField({ label: "sub category", name: "subCategory", type: "number" })}
					</div>

					<Form.Field {form} name="images">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Images</Form.Label>
								<input
									{...props}
									bind:files={$images}
									accept="image/png, image/jpeg"
									type="file"
									multiple
								/>
							{/snippet}
						</Form.Control>

						{#if $errors.images}
							{#each $errors.images[0] as error, index (index)}
								<span class="text-red-500">{error}</span>
							{/each}
						{/if}
					</Form.Field>   

					{#if imagesPreview.length}
						{@render preview({ images: imagesPreview })}
					{/if}

					<Button class="w-full">
						{#if $delayed}
							<Loader class="size-5 animate-spin" />
						{:else}
							<span class="capitalize">add product</span>
						{/if}
					</Button>
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

<!-- selected image(s) preview component -->
{#snippet preview({ images }: iPreview)}
	<div class="grid w-fit grid-cols-5 gap-2">
		{#each images as image, index (index)}
			<img src={image} alt="" class="size-20 rounded-md" />
		{/each}
	</div>
{/snippet}

<style lang="scss">
	.main-wrapper {
		@extend %main-wrapper;
	}
</style>
