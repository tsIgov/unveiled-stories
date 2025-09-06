<script lang="ts">
	import { Carousel, Heading } from 'components/common';
	import { MessageCircleMoreIcon } from '@lucide/svelte';


	interface Props {
		data: {
			header : string,
			quotes: { author : string; quote: string }[];
		}
	}

	let { data } : Props = $props();

</script>

{#snippet quote({author, quote} : {author: string, quote: string})}
	<div class="max-w-sm flex flex-col gap-4 items-center p-4">
		<MessageCircleMoreIcon class="w-8 h-8" color="var(--color-moonlight)" />
		<p class="italic text-sm">{quote}</p>
		<p>{author}</p>
	</div>
{/snippet}

<section>
	<Heading title={data.header} />
	<Carousel itemSnippet={quote} data={data.quotes} loop={true} />
</section>

<style>
	@reference "style";

	section > :global(.carousel) {
		@apply w-full;
	}

</style>
