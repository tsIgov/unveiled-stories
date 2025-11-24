<script lang="ts">
	import { Heading } from "components/basic"
	import { Carousel, TextCard } from 'components/common';
	import { getTranslator } from '$lib/i18n/translator';

	import { type Chapter, header, summary, chapters } from "data/experinece";

	let t = $derived(getTranslator());

</script>

{#snippet chapter(item : Chapter, spotlight : boolean )}
	<TextCard
		title={t(item.title)}
		text={t(item.text)}
		glow={spotlight}
	/>
{/snippet}

<section id="experience" class="the-experience">
	<Heading title={t(header)} summary={t(summary)}/>
	<Carousel itemSnippet={chapter} data={chapters} />
</section>

<style>
	@reference "style";
	.the-experience :global(.card) { @apply w-full; }
</style>
