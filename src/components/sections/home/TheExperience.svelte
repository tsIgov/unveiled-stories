<script lang="ts">
	import { TextCard } from 'components/cards';
	import { Carousel, Heading } from 'components/common';
	import { getTranslator } from '$lib/i18n/translator';

	import { type ExperienceStep, header, summary, steps } from "data/experinece";

	let t = $derived(getTranslator());

</script>

{#snippet step(item : ExperienceStep, active : boolean )}
	<TextCard
		title={t(item.title)}
		text={t(item.text)}
		glow={active}
		backgroundImage={item.background}
	/>
{/snippet}

<section class="the-experience">
	<Heading title={t(header)} summary={t(summary)}/>
	<Carousel itemSnippet={step} data={steps} loop={false} />
</section>


<style>
	@reference "style";

	.the-experience {
		& :global(.text-card) {
			@apply max-w-xs;
		}

		& :global(.carousel) {
			@apply w-full;
		}
	}
</style>
