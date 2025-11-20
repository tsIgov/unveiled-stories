<script lang="ts">
	import { Background, Card, Heading } from "components/basic";
	import { Carousel } from 'components/common';

	import { MessageCircleMoreIcon } from '@lucide/svelte';
	import { getTranslator } from '$lib/i18n/translator';

	import { type Quote, title, quotes, background } from 'data/testimonials';

	let t = $derived(getTranslator());
</script>

{#snippet quote(item : Quote, spotlight: boolean)}
	<Card glow={spotlight}>
		<div class="quote">
			<MessageCircleMoreIcon class="icon" />
			<p class="text">{t(item.quote)}</p>
			<p class="author">{t(item.author)}</p>
		</div>
	</Card>
{/snippet}

<section class="testimonials">
	<Background portrait={background.portrait} landscape={background.landscape} dim={true} />
	<Heading title={t(title)} />
	<Carousel itemSnippet={quote} data={quotes} loop={true} />
</section>

<style>
	@reference "style";

	.testimonials :global(.card) { @apply w-full; }

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
			@apply italic text-sm text-center;
		}
	}
</style>
