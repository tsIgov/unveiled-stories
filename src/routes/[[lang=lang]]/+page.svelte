<script lang="ts">
	import PhotoCard from "$lib/components/PhotoCard.svelte";
	import { state } from "$lib/global-state.svelte.js";
</script>

<PhotoCard />
<h1>{state.lang}</h1>
