<script lang="ts">
	import { Heading } from "components/common";
	import { ExpandableCard } from "components/cards";

	import { getTranslator } from '$lib/i18n/translator';
	import { questions, title } from "data/questions"

	let t = $derived(getTranslator());

	let openedFaq = $state(-1);

	function onToggle(i : number) {
		openedFaq = (openedFaq == i ? -1 : i)
	}
</script>

{#snippet column(min: number, max: number)}
	<div class="column">
		{#each questions as item, i}
			{#if i >= min && i < max}
				<ExpandableCard
					header={t(item.question)}
					content={t(item.answer)}
					expanded={openedFaq == i}
					onclick={() => onToggle(i)}
				/>
			{/if}
		{/each}
	</div>
{/snippet}

<section class="faq">
	<Heading title={t(title)} />

	<div class="questions">
		{@render column(0, questions.length / 2)}
		{@render column(questions.length / 2, questions.length)}
	</div>
</section>

<style>
	@reference "style";

	.questions {
		@apply max-w-4xl flex gap-4;
		@apply flex-col md:flex-row;
	}

	.column {
		@apply space-y-4 basis-0 grow;
		@apply max-w-md md:max-w-none;
	}

</style>
