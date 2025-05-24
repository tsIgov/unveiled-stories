<script lang="ts">
	import NavMenu from '$lib/components/NavMenu.svelte';
	let { children, data } = $props();
</script>

<NavMenu currentLang={data.lang} currentRoute={data.route} />

{@render children()}
