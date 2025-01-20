<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import { type Icon } from 'lucide-svelte';
	import ShoppingCart from 'lucide-svelte/icons/shopping-cart';
	import { type ComponentType } from 'svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	interface iDashboardCard {
		title: string;
		summary: string;
		amount: string;
		icon: ComponentType<Icon>;
	}

	const dashboardCards: iDashboardCard[] = [
		{
			title: 'total revenue',
			summary: '+50% from last month',
			amount: '$5000',
			icon: ShoppingCart
		},
		{
			title: 'total revenue',
			summary: '+50% from last month',
			amount: '$5000',
			icon: ShoppingCart
		}
	];
</script>

<section class="flex-1 space-y-4 p-8">
	<h2 class="text-3xl font-bold capitalize tracking-tight">dashboard</h2>

	<div class="grid gap-4 md:grid-cols-2">
		{#each dashboardCards as { amount, icon, summary, title }, index (index)}
			{@render dashboardCard({ amount, icon, summary, title })}
		{/each}
	</div>

	{@render dashboardTable()}
</section>

<!-- dashboard card ui component -->
{#snippet dashboardCard({ amount, icon: Icon, summary, title }: iDashboardCard)}
	<Card.Root>
		<Card.Header class="flex flex-row items-center justify-between pb-2">
			<Card.Title class="text-sm font-medium capitalize">{title}</Card.Title>
			<Icon class="text-muted-foreground size-4" />
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">{amount}</div>
			<p class="to-muted-foreground text-xs">{summary}</p>
		</Card.Content>
	</Card.Root>
{/snippet}

<!-- dashboard table ui component -->
{#snippet dashboardTable()}
	<Card.Root>
		<Card.Header>
			<Card.Title class="capitalize">recent orders title</Card.Title>
		</Card.Header>

		<Card.Content>
			<Table.Root>
				<Table.Caption>A list of your recent orders.</Table.Caption>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[100px]">Order</Table.Head>
						<Table.Head>Status</Table.Head>
						<Table.Head>Customer</Table.Head>
						<Table.Head class="text-right">Amount + Shipping</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell class="font-medium">INV001</Table.Cell>
						<Table.Cell>Completed</Table.Cell>
						<Table.Cell>trinity</Table.Cell>
						<Table.Cell class="text-right">$2,500,000.00</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table.Root>
		</Card.Content>
	</Card.Root>
{/snippet}
