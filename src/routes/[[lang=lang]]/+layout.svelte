<script lang="ts">
	import { page } from '$app/state';
	import NavMenu from '$lib/navigation/NavMenu.svelte';

	let { children, data } = $props();

	let viewportHeight = $state(1);
	let scrollY = $state(0);
	let navMenuOpacityThreshold = $derived(viewportHeight / 2);
	let navMenuMinOpacity = $derived(page.data.transparentNavigation ? 0 : 1);
	let navMenuOpacity = $derived(Math.max(navMenuMinOpacity, Math.min(1, scrollY / navMenuOpacityThreshold)));

</script>

<NavMenu currentLang={data.lang} currentRoute={data.route} opacity={navMenuOpacity} />

<div class="w-full h-[100svh] oveflow-x-hidden overflow-y-scroll snap-y snap-proximity"
	onscroll={(e) => scrollY = e.currentTarget.scrollTop} bind:offsetHeight={viewportHeight}>
	{@render children()}
</div>

