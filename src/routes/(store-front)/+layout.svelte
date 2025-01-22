<script lang="ts">
	import Header from "$lib/components/header.svelte";

	let { children } = $props();
</script>

<div id="root">
	<Header />
	{@render children()}
</div>
