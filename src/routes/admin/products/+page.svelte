<script lang="ts">
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";

	let showProducts: boolean = $state(true);
</script>

<section class={cn("main-wrapper")}>
	<header class="flex items-center justify-between space-y-2">
		<h2 class="text-3xl font-bold capitalize tracking-tight">products</h2>

		<div class="flex items-center gap-2">
			<Input class="w-[9.25rem] lg:w-[15.5rem]" />
			<Button placeholder="Search Products...">Search</Button>
		</div>
	</header>
</section>

<style lang="scss">
	.main-wrapper {
		@extend %main-wrapper;
	}
</style>
