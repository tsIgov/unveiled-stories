<script lang="ts">
	import { Carousel, Heading } from 'components/common';
	import { MessageCircleMoreIcon } from '@lucide/svelte';
	import { getTranslator } from '$lib/i18n/translator';
	import { type Quote, title, quotes } from 'data/testimonials';

	let t = $derived(getTranslator());
</script>

{#snippet quote(item : Quote)}
	<div class="quote">
		<MessageCircleMoreIcon class="icon" />
		<p class="text">{t(item.quote)}</p>
		<p class="author">{t(item.author)}</p>
	</div>
{/snippet}

<section class="testimonials">
	<Heading title={t(title)} />
	<Carousel itemSnippet={quote} data={quotes} loop={true} />
</section>

<style>
	@reference "style";

	.testimonials > :global(.carousel) {
		@apply w-full;
	}

	.quote {
		@apply max-w-sm p-4;
		@apply flex flex-col gap-4 items-center;

		& > :global(.icon) {
			@apply w-8 h-8 text-moonlight;
		}

		& > .text {
			@apply italic text-sm;
		}
	}
</style>
