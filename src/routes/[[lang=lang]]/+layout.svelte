<script lang="ts">
	import NavMenu from '$lib/navigation/NavMenu.svelte';
	let { children, data } = $props();
</script>

<NavMenu currentLang={data.lang} currentRoute={data.route} />

{@render children()}
