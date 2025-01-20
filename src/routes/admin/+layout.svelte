<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { Snippet } from "svelte";
	import SidebarRoot from "./components/side-bar-root.svelte";

	interface props {
		children: Snippet;
	}

	let { children }: props = $props();
</script>

<!-- DOM begins here -->
<Sidebar.Provider class="bg-neutral-100">
	<SidebarRoot />
	<!-- #Application -->
	<main class="flex-1">
		<Sidebar.Trigger />
		<!-- children -->
		{@render children?.()}
	</main>
</Sidebar.Provider>
