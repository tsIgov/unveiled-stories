<script lang="ts">
	import { TextCard } from 'components/cards';
	import { Carousel, Heading } from 'components/common';

	interface Props {
		data: {
			header: string,
			paragraph: string,
			steps: { title : string; text: string }[];
		}
	}

	let { data } : Props = $props();

</script>

{#snippet step({title, text} : {title: string, text: string}, active : boolean )}
	<TextCard {title} {text} glow={active} />
{/snippet}

<section>
	<Heading title={data.header} summary={data.paragraph}/>
	<Carousel itemSnippet={step} data={data.steps} loop={false} />
</section>


<style>
	@reference "style";

	section {
		& :global(.text-card) {
			@apply max-w-xs;
		}

		& :global(.carousel) {
			@apply w-full;
		}
	}
</style>
