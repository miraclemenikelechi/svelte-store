<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import * as Table from "$lib/components/ui/table/index.js";
	import { CheckCircleIcon, Clipboard, ClockIcon, TruckIcon } from "lucide-svelte";
	import type { PageData } from "./$types";

	type tStatus = "processing" | "delivered" | "shipped";

	let { data }: { data: PageData } = $props();
	let status: tStatus = $state("processing");

	function handleCopyToClipboard(text: string): void {
		navigator.clipboard.writeText(text);
	}
</script>

<section class="main-wrapper">
	<header class="flex items-center justify-between">
		<h2 class="text-3xl font-bold capitalize tracking-tight">orders</h2>

		<form class="flex items-center justify-center gap-2">
			<Input placeholder="Search orders..." class="w-[9.25rem] lg:w-[15.5rem]" />
			<Button type="submit" class="capitalize">search</Button>
		</form>
	</header>

	<footer>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">Order ID</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Customer</Table.Head>
					<Table.Head>Amount + Shipping</Table.Head>
					<Table.Head>Date</Table.Head>
					<Table.Head class="text-right">Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell class="font-medium">
						<div class="flex items-center justify-center gap-2">
							<span>INV001</span>
							<button onclick={() => handleCopyToClipboard("INV001")}>
								<Clipboard class="size-4" />
							</button>
						</div>
					</Table.Cell>
					<Table.Cell>
						<div class="flex items-center justify-center gap-1">
							{@render orderStatus()}
							<span>{status}</span>
						</div>
					</Table.Cell>
					<Table.Cell>miraclemenikelechi</Table.Cell>
					<Table.Cell>$5,000.00</Table.Cell>
					<Table.Cell>12/31/23</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="destructive" size="sm">to shipped</Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	</footer>
</section>

{#snippet orderStatus()}
	<i>
		{#if status === "delivered"}
			<CheckCircleIcon class="size-4 text-green-500" />
		{:else if status === "processing"}
			<ClockIcon class="size-4 text-yellow-500" />
		{:else if status === "shipped"}
			<TruckIcon class="size-4 text-red-500" />
		{/if}
	</i>
{/snippet}

<style lang="scss">
	.main-wrapper {
		@extend %main-wrapper;
	}
</style>
