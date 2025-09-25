<script lang="ts">
	import { Carousel, Heading } from "components/common";

	import { getTranslator } from '$lib/i18n/translator';
	import { questions, title } from "data/questions"
	import Frame from "components/common/Frame.svelte";

	import type { Picture } from 'vite-imagetools';





	import MultipleDetailsCard from "components/cards/MultipleDetailsCard.svelte";
	import bg from "data/photoshoots/nocturnal-glow/images/card-right.jpg?enhanced";
	import background from "data/photoshoots/nocturnal-glow/images/background-landscape.jpg?enhanced";




	let t = $derived(getTranslator());

	let openedFaq = $state(-1);

	function onToggle(i : number) {
		openedFaq = (openedFaq == i ? -1 : i)
	}
</script>

<!-- {#snippet column(min: number, max: number)}
<Frame>
	<div class="column aspect-card w-2xs">
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
</Frame>
{/snippet} -->

{#snippet step(item : any, active : boolean )}
	<MultipleDetailsCard title={questions.map(x => t(x.question))}
		details={questions.map(x => t(x.answer))}
		background={bg} glow={active}/>
{/snippet}

<section class="faq">
	<enhanced:img class="background dim" src={background} alt="background" />

	<Heading title={t(title)} />

	<!-- <div class="questions">
		{@render column(0, questions.length / 2)}
		{@render column(questions.length / 2, questions.length)}
	</div> -->

	<!-- <MultipleDetailsCard title={questions.map(x => t(x.question))}
		details={questions.map(x => t(x.answer))}
		background={bg} /> -->

	<Carousel itemSnippet={step} data={[1, 2, 3]} />


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

	.faq {
		& :global(.carousel) {
			@apply w-full;
		}
	}

</style>
