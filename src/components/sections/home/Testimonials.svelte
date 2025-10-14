<script lang="ts">
	import { Carousel, Heading, SectionBackground } from 'components/common';
	import { MessageCircleMoreIcon } from '@lucide/svelte';
	import { getTranslator } from '$lib/i18n/translator';
	import { type Quote, title, quotes, background } from 'data/testimonials';
	import Card from 'components/cards/Card.svelte';

	let t = $derived(getTranslator());
</script>

{#snippet quote(item : Quote, active: boolean)}
	<Card glow={active}>
		<div class="quote">
			<MessageCircleMoreIcon class="icon" />
			<p class="text">{t(item.quote)}</p>
			<p class="author">{t(item.author)}</p>
		</div>
	</Card>
{/snippet}

<section class="testimonials">
	<SectionBackground portrait={background.portrait} landscape={background.landscape} />
	<Heading title={t(title)} />
	<Carousel itemSnippet={quote} data={quotes} loop={true} />
</section>

<style>
	@reference "style";

	.testimonials > :global(.carousel) {
		@apply w-full;
	}

	.quote {
		@apply w-full h-full p-4 overflow-y-auto;
		@apply flex flex-col gap-4 items-center justify-center-safe;

		& > :global(*) {
			@apply flex-none;
		}

		& > :global(.icon) {
			@apply w-8 h-8 text-moonlight;
		}

		& > .text {
			@apply italic text-sm;
		}
	}
</style>
