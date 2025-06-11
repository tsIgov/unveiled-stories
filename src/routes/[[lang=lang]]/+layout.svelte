<script lang="ts">
	import { page } from '$app/state';
	import NavMenu from '$lib/components/navigation/NavMenu.svelte';
	import { Fullpage } from '$lib/full-page';

	let { children, data } = $props();

	let offsetHeight = $state(1);
	let scrollY = $state(0);
	let navMenuOpacityThreshold = $derived(offsetHeight / 2);
	let navMenuMinOpacity = $derived(page.data.transparentNavigation ? 0 : 1);
	let navMenuOpacity = $derived(Math.max(navMenuMinOpacity, Math.min(1, scrollY / navMenuOpacityThreshold)));

</script>

<NavMenu currentLang={data.lang} currentRoute={data.route} opacity={navMenuOpacity} />

<Fullpage
	bind:scrollY={scrollY} bind:offsetHeight={offsetHeight}>
	{@render children()}
</Fullpage>

