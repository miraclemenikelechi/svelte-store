<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import * as Table from "$lib/components/ui/table/index.js";
</script>

<section class="main-wrapper">
	<header class="flex items-center justify-between">
		<h2 class="text-3xl font-bold capitalize tracking-tight">categories</h2>

		<div class="flex items-center justify-center gap-2">
			<Input placeholder="Search Categories..." class="w-[9.25rem] lg:w-[15.5rem]" />
			<Button href="categories/add" class="capitalize">add category</Button>
		</div>
	</header>

	<footer>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">ID</Table.Head>
					<Table.Head>Name</Table.Head>
					<Table.Head>Number of sub-categories</Table.Head>
					<Table.Head>Description</Table.Head>
					<Table.Head class="text-right">Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell class="font-medium">
						<span>INV001</span>
					</Table.Cell>
					<Table.Cell>
						<div class="flex items-center justify-center gap-1">
							<!-- {@render orderStatus()} -->
							<span>eletronics</span>
						</div>
					</Table.Cell>
					<Table.Cell>5</Table.Cell>
					<Table.Cell>description text</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="destructive" size="sm">delete</Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	</footer>
</section>

<style lang="scss">
	.main-wrapper {
		@extend %main-wrapper;
	}
</style>
