<script lang="ts">
	import { Rule } from "$lib/components/common";
	import ExpandableCard from "$lib/components/cards/ExpandableCard.svelte";

	interface Props {
		header : string,
		faq: { question : string; answer: string }[];
	}

	let { header, faq } : Props = $props();

	let openedFaq = $state(-1);

	function onToggle(i : number) {
		openedFaq = (openedFaq == i ? -1 : i)
	}
</script>

{#snippet column(min: number, max: number)}
	<div class="column">
		{#each faq as item, i}
			{#if i >= min && i < max}
				<ExpandableCard
					header={item.question}
					content={item.answer}
					expanded={openedFaq == i}
					onclick={() => onToggle(i)}
				/>
			{/if}
		{/each}
	</div>
{/snippet}

<section>
	<div class="text-center max-w-3xl px-4">
		<h2 class="font-serif text-xl text-light uppercase mb-2">{header}</h2>
		<Rule class="min-w-3xs" centerOrnament={true} />
	</div>

	<div class="questions">
		{@render column(0, faq.length / 2)}
		{@render column(faq.length / 2, faq.length)}
	</div>
</section>

<style>
	@reference "style";


	.questions {
		@apply max-w-4xl flex  gap-4;
		@apply flex-col md:flex-row;
	}

	.column {
		@apply space-y-4 basis-0 grow
		@apply max-w-md md:max-w-none;
	}

</style>
