<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import * as Table from "$lib/components/ui/table/index.js";
</script>

<section class="main-wrapper">
	<header class="flex items-center justify-between">
		<h2 class="text-3xl font-bold capitalize tracking-tight">users</h2>

		<div class="flex items-center justify-center gap-2">
			<Input placeholder="Search Products..." class="w-[9.25rem] lg:w-[15.5rem]" />
			<Button href="products/add" class="capitalize">add product</Button>
		</div>
	</header>

	<footer>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">Name</Table.Head>
					<Table.Head>Email</Table.Head>
					<Table.Head>Role</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Join Date</Table.Head>
					<Table.Head>Total Spent</Table.Head>
					<Table.Head class="text-right">Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell class="font-medium">INV001</Table.Cell>
					<Table.Cell>miracle.emenike7@outlook.com</Table.Cell>
					<Table.Cell>admin</Table.Cell>
					<Table.Cell>active</Table.Cell>
					<Table.Cell>12/31/23</Table.Cell>
					<Table.Cell>$100.00</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="destructive" size="sm">Ban User</Button>
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
