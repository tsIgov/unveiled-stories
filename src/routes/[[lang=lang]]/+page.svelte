<script lang="ts">
	import HeroPreview from "$lib/components/HeroPreview.svelte";
	import Slideshow from "$lib/components/Slideshow.svelte";
	import { type PhotoshootData, theHunt, nocturnalGlow } from "$lib/photoshoots/PhotoshootData";

	let { data } = $props();
	let previews = $derived([
		theHunt(data.translator),
		nocturnalGlow(data.translator)
	]);

</script>

{#snippet slide(photoshoot : PhotoshootData)}
	<HeroPreview data={photoshoot}/>
{/snippet}

<Slideshow slideSnippet={slide} data={previews} timeout={5000} />

<div class="h-svh"></div>
<div class="h-svh"></div>
