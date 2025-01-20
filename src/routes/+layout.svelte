<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import nProgress from 'nprogress';
	import '../app.scss';

	let { children } = $props();

	nProgress.configure({ showSpinner: false });

	beforeNavigate(function (): void {
		nProgress.start();
	});
	afterNavigate(function () {
		nProgress.done();
	});
</script>

{@render children()}
