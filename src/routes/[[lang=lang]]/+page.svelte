<script lang="ts">
	import HeroPreview from "./HeroPreview.svelte";
	import Slideshow from "$lib/common/Slideshow.svelte";
	import { type PhotoshootData, theHunt, nocturnalGlow } from "$lib/photoshoots/PhotoshootData";
	import Break from "$lib/common/Break.svelte";

	import test from "$lib/photoshoots/the-hunt/images/background-landscape.jpg?enhanced"
	import test2 from "$lib/photoshoots/the-hunt/images/background-portrait.jpg?enhanced"
	import test3 from "$lib/photoshoots/the-hunt/images/background-portrait.jpg?enhanced"
	import CardOrnament from "$lib/photoshoots/CardOrnament.svelte";

	import Step, { type StepData } from "./Step.svelte";
	import Carousel from "$lib/common/Carousel.svelte";

	let { data } = $props();

</script>

{#snippet slide(photoshoot : PhotoshootData)}
	<HeroPreview data={photoshoot}/>
{/snippet}

{#snippet step(stepData : StepData)}
	<Step class="h-full" data={stepData}/>
{/snippet}

<Slideshow class="w-full h-svh" slideSnippet={slide} data={data.photoshoots} timeout={5000} />
<Break orientation="horizontal" centerOrnament={false} class="w-full" />


<div class="py-4 flex flex-col items-center mx-auto gap-8 h-[calc(100svh_-_5rem)] overflow-hidden">
	<div class="text-center max-w-3xl">
		<h2 class="font-serif text-xl text-light uppercase mb-2 px-4">{data.texts.theExperienceHeader}</h2>
		<p class="text-neutral-900 p-4 text-sm">{data.texts.theExperienceParagraph}</p>
	</div>

	<Carousel class="grow h-0 max-h-[min(30rem,_calc(0.8_*100svw_*1.6))] w-full" itemSnippet={step} data={data.steps} />

</div>






