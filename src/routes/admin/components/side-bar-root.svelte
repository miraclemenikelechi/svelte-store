<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Calendar from 'lucide-svelte/icons/calendar';
	import House from 'lucide-svelte/icons/house';
	import Inbox from 'lucide-svelte/icons/inbox';
	import Search from 'lucide-svelte/icons/search';
	import Settings from 'lucide-svelte/icons/settings';

	interface iSideBarMenuButton {
		props: Record<string, unknown>;
	}

	const items = [
		{
			title: 'overview',
			url: 'overview',
			icon: House
		},
		{
			title: 'products',
			url: 'products',
			icon: Inbox
		},
		{
			title: 'users',
			url: 'users',
			icon: Calendar
		},
		{
			title: 'orders',
			url: 'orders',
			icon: Search
		},
		{
			title: 'categories',
			url: 'categories',
			icon: Settings
		},
		{
			title: 'store front',
			url: 'store-front',
			icon: Settings
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>admin dashboard</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props }: iSideBarMenuButton)}
									<a href={`/admin/${item.url}`} {...props} onclick={() => console.log('clicked')}>
										<item.icon />
										<span class="capitalize">{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
