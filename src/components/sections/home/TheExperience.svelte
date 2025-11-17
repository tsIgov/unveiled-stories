<script lang="ts">
	import { TextCard } from 'components/cards';
	import { Carousel, Heading } from 'components/common';
	import { getTranslator } from '$lib/i18n/translator';

	import { type Chapter, header, summary, chapters } from "data/experinece";

	let t = $derived(getTranslator());

</script>

{#snippet chapter(item : Chapter, active : boolean )}
	<TextCard
		title={t(item.title)}
		text={t(item.text)}
		glow={active}
	/>
		<!-- background={item.background} -->
{/snippet}

<section class="the-experience">
	<Heading title={t(header)} summary={t(summary)}/>
	<Carousel itemSnippet={chapter} data={chapters} />
</section>
