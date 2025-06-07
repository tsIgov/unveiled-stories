<script lang="ts">
	import { TextCard } from '$lib/components/cards';
	import { Carousel } from '$lib/components/common';

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


<div class="py-4 flex flex-col items-center mx-auto gap-8 overflow-hidden {others.class}">
	<div class="text-center max-w-3xl">
		<h2 class="font-serif text-xl text-light uppercase mb-2 px-4">{header}</h2>
		<p class="text-neutral-900 p-4 text-sm">{paragraph}</p>
	</div>

	<Carousel class="grow h-0 max-h-[min(30rem,_calc(0.8_*100svw_*1.6))] w-full" itemSnippet={step} data={steps} />
</div>
