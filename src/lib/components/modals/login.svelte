<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import * as Form from "$lib/components/ui/form/index.js";
	import { loginSchema, type tLoginSchema } from "$lib/schemas/login";
	import { LoaderIcon } from "lucide-svelte";
	import type { HTMLInputTypeAttribute } from "svelte/elements";
	import { defaults, superForm, type Infer } from "sveltekit-superforms";
	import { zod } from "sveltekit-superforms/adapters";
	import Button from "../ui/button/button.svelte";
	import { Input } from "../ui/input";

	interface iFormField {
		label: string;
		name: keyof Infer<tLoginSchema>;
		type?: HTMLInputTypeAttribute;
	}

	const form = superForm(defaults(zod(loginSchema)), {
		validators: zod(loginSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: formData } = form;
</script>

<Dialog.Root>
	<Dialog.Trigger>Open</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Welcome back! Let's get you back in.</Dialog.Title>
			<Dialog.Description>
				Enter your email and password to begin. Click login when you're ready!
			</Dialog.Description>
		</Dialog.Header>

		<form action="">
			{@render formField({ label: "enail", name: "email" })}
			{@render formField({ label: "password", name: "password" })}

			<Button>
				{#if $delayed}
					<LoaderIcon class="size-5 animate-spin" />
				{:else}
					Login
				{/if}
			</Button>
		</form>
	</Dialog.Content>
</Dialog.Root>

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
