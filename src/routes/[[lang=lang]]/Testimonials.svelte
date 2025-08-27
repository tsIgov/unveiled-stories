<script lang="ts">
	import { Carousel, Heading } from 'components/common';


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
		<img class="w-8 h-8" src="quote.svg" alt="quote">
		<p class="italic text-sm">{quote}</p>
		<p>{author}</p>
	</div>
{/snippet}

<section>
	<Heading title={data.header} />
	<Carousel class="w-full" itemSnippet={quote} data={data.quotes} loop={true} />
</section>

<style>
	@reference "style";

</style>
