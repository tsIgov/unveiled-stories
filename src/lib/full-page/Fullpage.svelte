<script lang="ts">
	import { onMount } from "svelte";
	import { initializeFullPageScrollingContext } from "./FullPageContext";

	const context = initializeFullPageScrollingContext();
	const heightsStore = context.heights;
	const transformationsStore = context.transformations;

	let mounted = false;
	heightsStore.subscribe(ctx => {
		if (mounted)
		for (let i = 0; i< ctx.length; i++) {
			$transformationsStore[i].marginTop = ctx[i];
		}
	});

	let { children } = $props();

	onMount(() => {
		mounted = true;
	});
</script>

<div class="w-full h-svh oveflow-x-hidden overflow-y-scroll snap-y snap-proximity scroll-smooth">
	<p>Total count: {$heightsStore.length}</p>
	{@render children()}

</div>
