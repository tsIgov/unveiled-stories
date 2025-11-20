<script lang="ts">
	import { Background } from "components/basic";
	import { Carousel, Heading } from "components/common";
	import { MultipleDetailsCard } from "components/cards/";

	import { getTranslator } from '$lib/i18n/translator';

	import { questions, title, background, type Question } from "data/faq"

	function chunkArray<T>(arr: T[], size: number): T[][] {
		const result: T[][] = [];
		for (let i = 0; i < arr.length; i += size) {
			result.push(arr.slice(i, i + size));
		}
		return result;
	}

	let t = $derived(getTranslator());

	const questionsPerCard = 4;
	let chunkedQuestions = chunkArray(questions, questionsPerCard);
</script>

{#snippet step(item : Question[], active : boolean )}
	<MultipleDetailsCard
		data={item.map(x => ({
			title: t(x.question),
			details: t(x.answer)
		}))}
		slots={questionsPerCard}
		glow={active}/>
{/snippet}

<section class="faq">
	<Background portrait={background.portrait} landscape={background.landscape} dim={true} />
	<Heading title={t(title)} />
	<Carousel itemSnippet={step} data={chunkedQuestions} />
</section>

<style>
	@reference "style";
	.faq :global(.card) { @apply w-full; }
</style>
