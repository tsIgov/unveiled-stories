<script lang="ts">
	import { Heading } from "components/common";
	import { ExpandableCard } from "components/cards";

	interface Props {
		data: {
			header : string,
			questions: { question : string; answer: string }[];
		}
	}

	let { data } : Props = $props();

	let openedFaq = $state(-1);

	function onToggle(i : number) {
		openedFaq = (openedFaq == i ? -1 : i)
	}
</script>

{#snippet column(min: number, max: number)}
	<div class="column">
		{#each data.questions as item, i}
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
	<Heading title={data.header} />

	<div class="questions">
		{@render column(0, data.questions.length / 2)}
		{@render column(data.questions.length / 2, data.questions.length)}
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
