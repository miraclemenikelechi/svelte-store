<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import { Button } from "./ui/button";
	import { Menu, ShoppingCartIcon } from "lucide-svelte";

	interface iLoggedInPages {
		title: string;
		href: string;
	}

	const loggedInPages: iLoggedInPages[] = [
		{
			title: "profile",
			href: "/me/personal-info"
		},
		{
			title: "order history",
			href: "/me/order-history"
		},
		{
			title: "addresses",
			href: "/me/addresses"
		},
		{
			title: "settings",
			href: "me/settings"
		}
	];
</script>

<header
	class="sticky left-0 top-0 z-50 flex items-center justify-between border-b bg-background p-3 md:px-10"
>
	<a href="/" class="text-2xl font-bold text-primary">TriStore.io</a>

	<section>
		{#if !true}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Avatar.Root>
						<Avatar.Image src="https://github.com/miraclemenikelechi.png" alt="@shadcn" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.GroupHeading>My Account</DropdownMenu.GroupHeading>
						<DropdownMenu.Separator />
						{#each loggedInPages as { title, href }, index (index)}
							{@render loggedInPage({ href, title })}
						{/each}

						{#if true}
							{@render loggedInPage({ href: "/admin", title: "admin dashboard" })}
						{/if}
						<DropdownMenu.Separator />
						{@render loggedInPage({ href: "/", title: "logout" })}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{:else}
			<div class="hidden items-center gap-2 md:flex">
				<Button variant="ghost">Login</Button>
				<Button>Register</Button>
			</div>

			<button
				class="flex size-10 items-center justify-center rounded-full hover:bg-secondary md:hidden"
			>
				<Menu class="size-5" />
			</button>
		{/if}

		{#if !true}
			<button class="relative size-fit">
				<span
					class="absolute bottom-4 left-4 flex size-4 items-center justify-center rounded-full bg-primary text-xs text-white"
				>
					5
				</span>
				<i class="size-8">
					<ShoppingCartIcon />
				</i>
			</button>
		{/if}
	</section>
</header>

{#snippet loggedInPage({ href, title }: iLoggedInPages)}
	<DropdownMenu.Item>
		<!-- snippet child is saying you want to replace the parent{{DropdownMenu.Item}} with custom element{{span}} -->
		{#snippet child({ props })}
			<span {...props}>
				<a {href} class="capitalize">{title}</a>
			</span>
		{/snippet}
	</DropdownMenu.Item>
{/snippet}
