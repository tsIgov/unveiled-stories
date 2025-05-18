<script lang="ts">
	import { onMount } from "svelte";

	import GlowPreview from "$lib/components/GlowPreview.svelte";
	import HuntPreview from "$lib/components/HuntPreview.svelte";

	let i = $state(0);
	onMount(() => {
		const interval = setInterval(() => {
			i = (i + 1) % 2;
		}, 10000);

		return () => clearInterval(interval);
	});
</script>


<div class="w-full h-svh overflow-hidden">
	<GlowPreview class="absolute top-0 left-0 w-full h-full transition-all duration-[2s] {i == 0 ? "opacity-100" : "opacity-0"}"/>
	<HuntPreview class="absolute top-0 left-0 w-full h-full transition-all duration-[2s] {i == 1 ? "opacity-100" : "opacity-0"}"/>

	<div class="absolute p-4 w-full bottom-0 left-0 flex justify-center gap-4">
		<p>01</p>
		<p>02</p>
		<p>03</p>
		<p>04</p>
	</div>
</div>
