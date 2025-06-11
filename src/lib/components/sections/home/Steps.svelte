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

<Carousel class="h-[calc(100svh_-_var(--navbar-height)_-2rem)] max-h-[min(30rem,_calc(0.70_*120svw_*1.6))] w-full" itemSnippet={step} data={steps} />
