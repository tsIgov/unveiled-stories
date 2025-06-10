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


<div class="py-4 flex flex-col justify-center items-center mx-auto gap-4 overflow-hidden {others.class}">
	<div class="text-center max-w-3xl px-4 space-y-2">
		<h2 class="font-serif text-xl text-light uppercase">{header}</h2>
		<p class="text-neutral-900">{paragraph}</p>
	</div>

	<Break class="w-full max-w-3xl" orientation="horizontal" centerOrnament={true} />

	<Carousel class="grow h-0 max-h-[min(30rem,_calc(0.8_*100svw_*1.6))] w-full" itemSnippet={step} data={steps} />
</div>
