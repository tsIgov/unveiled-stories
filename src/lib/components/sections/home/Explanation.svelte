<script lang="ts">
	import { TextCard } from '$lib/components/cards';
	import { Carousel, Break } from '$lib/components/common';

	interface Props {
		class? : string;
		header: string,
		paragraph: string,
		steps: { title : string; text: string }[];
	}

	let { header, paragraph, steps, ...others } : Props = $props();

</script>

{#snippet step({title, text} : {title: string, text: string})}
	<TextCard class="h-full" {title} {text}/>
{/snippet}


<div class="w-full min-h-full py-4 flex flex-col justify-around items-center mx-auto gap-8 overflow-hidden {others.class}">
	<div class="text-center max-w-3xl px-4">
		<h2 class="font-serif text-xl text-light uppercase mb-2">{header}</h2>
		<p class="text-neutral-900">{paragraph}</p>
		<Break class="w-full mt-4 snap-start" orientation="horizontal" centerOrnament={true} />
	</div>

	<Carousel class="h-[calc(100svh_-_var(--navbar-height)_-2em)] max-h-[min(30em,_calc(0.70_*120svw_*1.6))] w-full" itemSnippet={step} data={steps} />
</div>
