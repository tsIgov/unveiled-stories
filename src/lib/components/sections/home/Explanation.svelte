<script lang="ts">
	import { TextCard } from '$lib/components/cards';
	import { Carousel, Break } from '$lib/components/common';

	interface Props {
		header: string,
		paragraph: string,
		steps: { title : string; text: string }[];
	}

	let { header, paragraph, steps } : Props = $props();

</script>

{#snippet step({title, text} : {title: string, text: string})}
	<TextCard class="h-full" {title} {text}/>
{/snippet}


<div class="text-center max-w-3xl px-4">
	<h2 class="font-serif text-xl text-light uppercase mb-2">{header}</h2>
	<p class="text-neutral-900">{paragraph}</p>
	<Break class="w-full mt-4 snap-start" orientation="horizontal" centerOrnament={true} />
</div>

<div class="carousel">
	<Carousel class="w-full h-full" itemSnippet={step} data={steps} />
</div>


<style>
	.carousel {
		overflow-x: hidden;
		width: 100%;
		height: calc(100svh - var(--navbar-height) - 2rem);
		max-height: min(30rem, calc(0.70 * 110svw * 1.6));
	}
</style>
