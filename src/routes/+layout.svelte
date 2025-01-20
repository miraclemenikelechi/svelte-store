<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import nProgress from 'nprogress';
	import '../app.scss'; // global css

	let { children } = $props(); // to render content on the client. must be done.

	/**
	 * nProgress init
	 */
	nProgress.configure({ showSpinner: false });

	beforeNavigate(function (): void {
		nProgress.start();
	});
	afterNavigate(function (): void {
		nProgress.done();
	});
</script>

<!-- render to client -->
{@render children()}
