<script lang="ts">
	import { page } from '$app/state';
	import { Metadata } from 'components/common';
	import { NavMenu } from 'components/navigation';
	import { Footer } from 'components/sections/shared';

	let { children, data } = $props();

	let viewportHeight = $state(1);
	let scrollY = $state(0);
	let navMenuOpacityThreshold = $derived(viewportHeight / 2);
	let navMenuMinOpacity = $derived(page.data.transparentNavigation ? 0 : 1);
	let navMenuOpacity = $derived(Math.max(navMenuMinOpacity, Math.min(1, scrollY / navMenuOpacityThreshold)));

</script>

<Metadata data={page.data.metadata} />

<svelte:window bind:scrollY={scrollY} bind:innerHeight={viewportHeight} />

<NavMenu currentLang={data.lang} currentRoute={data.route} opacity={navMenuOpacity} reserveSpace={!page.data.transparentNavigation} />
{@render children()}
<Footer />
