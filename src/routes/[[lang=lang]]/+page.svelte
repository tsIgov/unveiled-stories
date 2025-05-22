<script lang="ts">
	import HeroPreview from "$lib/components/HeroPreview.svelte";
	import Slideshow from "$lib/components/Slideshow.svelte";
	import { type PhotoshootData, theHunt, nocturnalGlow } from "$lib/photoshoots/PhotoshootData";
</script>

{#snippet slide(photoshoot : PhotoshootData)}
	<HeroPreview data={photoshoot}/>
{/snippet}

<Slideshow slideSnippet={slide} data={[nocturnalGlow, theHunt]} timeout={5000} />
