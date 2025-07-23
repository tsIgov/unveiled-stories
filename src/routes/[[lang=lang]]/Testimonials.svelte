<script lang="ts">
	import { Carousel, Rule } from 'components/common';


	interface Props {
		data: {
			header : string,
			quotes: { author : string; quote: string }[];
		}
	}

	let { data } : Props = $props();

</script>

{#snippet quote({author, quote} : {author: string, quote: string})}
	<div class="w-xs max-w-full flex flex-col gap-4 items-center p-4">
		<img class="w-8 h-8" src="quote.svg" alt="quote">
		<p class="italic text-sm">{quote}</p>
		<p>{author}</p>
	</div>
{/snippet}

<section>
	<div class="text-center max-w-3xl px-4">
		<h2 class="font-serif text-xl text-light uppercase mb-2">{data.header}</h2>
		<Rule class="min-w-3xs" centerOrnament={true} />
	</div>


	<div class="carousel">
		<Carousel class="w-full h-full" itemSnippet={quote} data={data.quotes} />
	</div>

</section>

<style>
	@reference "style";

	.carousel {
		overflow-x: hidden;
		width: 100%;
		height: calc(100svh - var(--navbar-height) - 2rem);
		max-height: min(30rem, calc(0.70 * 110svw * 1.6));
	}
</style>
