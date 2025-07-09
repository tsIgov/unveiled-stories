<script lang="ts">
	import { TextCard } from 'components/cards';
	import { Carousel, Rule } from 'components/common';

	interface Props {
		data: {
			header: string,
			paragraph: string,
			steps: { title : string; text: string }[];
		}
	}

	let { data } : Props = $props();

</script>

{#snippet step({title, text} : {title: string, text: string})}
	<TextCard class="h-full" {title} {text}/>
{/snippet}

<section>
	<div class="text-center max-w-3xl px-4">
		<h2 class="font-serif text-xl text-light uppercase mb-2">{data.header}</h2>
		<p class="text-neutral-900">{data.paragraph}</p>
		<Rule class="w-full mt-4 snap-start" centerOrnament={true} />
	</div>

	<div class="carousel">
		<Carousel class="w-full h-full" itemSnippet={step} data={data.steps} />
	</div>
</section>


<style>
	.carousel {
		overflow-x: hidden;
		width: 100%;
		height: calc(100svh - var(--navbar-height) - 2rem);
		max-height: min(30rem, calc(0.70 * 110svw * 1.6));
	}
</style>
