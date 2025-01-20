<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import * as Table from "$lib/components/ui/table/index.js";
	import { cn } from "$lib/utils";

	let showProducts: boolean = $state(true);
</script>

<section class={cn("main-wrapper")}>
	<header class="flex items-center justify-between">
		<h2 class="text-3xl font-bold capitalize tracking-tight">products</h2>

		<div class="flex items-center justify-center gap-2">
			<Input placeholder="Search Products..." class="w-[9.25rem] lg:w-[15.5rem]" />
			<Button href="product/add" class="capitalize">add product</Button>
		</div>
	</header>

	<footer>
		{@render footerTable()}
	</footer>
</section>

<!-- table ui component -->
{#snippet footerTable()}
	{#if showProducts}
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">ID</Table.Head>
					<Table.Head>Image</Table.Head>
					<Table.Head>Name</Table.Head>
					<Table.Head>Category</Table.Head>
					<Table.Head>Sub Category</Table.Head>
					<Table.Head>Price</Table.Head>
					<Table.Head>Stock</Table.Head>
					<Table.Head class="text-right">Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell class="font-medium">INV001</Table.Cell>
					<Table.Cell>
						<img src="" alt="pic goes here..." class="size-10 rounded border border-black" />
					</Table.Cell>
					<Table.Cell>Jordans</Table.Cell>
					<Table.Cell>Shoe</Table.Cell>
					<Table.Cell>Jordan Brands</Table.Cell>
					<Table.Cell>$100.00</Table.Cell>
					<Table.Cell>10</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="destructive" size="sm">Delete</Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	{:else}
		<div class="flex h-[50vh] flex-col items-center justify-center gap-4 rounded-lg bg-white">
			<p class="caption-bottom text-2xl text-muted-foreground">No products found!</p>
			<Button href="products/add" class="text-xs uppercase text-muted">create new product</Button>
		</div>
	{/if}
{/snippet}

<style lang="scss">
	.main-wrapper {
		@extend %main-wrapper;
	}
</style>
