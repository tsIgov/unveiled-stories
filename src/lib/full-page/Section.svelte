<script lang="ts">
	import { getFullPageScrollingContext } from "./FullPageContext";

	const context = getFullPageScrollingContext();
	let heightsStore = context.heights;
	let transformationsStore = context.transformations;

	let id = $state($heightsStore.length);
	$heightsStore.push(0);
	$transformationsStore.push({
		marginTop: 0,
		snap: false,
		textSize: 16
	})

	let { children } = $props();

</script>

<div class="w-full"
	bind:offsetHeight={$heightsStore[id]}>
	<p>id: {id} mt: {$transformationsStore[id].marginTop} h: {$heightsStore[id]}</p>
	{@render children()}
</div>
