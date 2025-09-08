<script lang="ts">
	import { Carousel, Heading } from 'components/common';
	import { MessageCircleMoreIcon } from '@lucide/svelte';
	import { getTranslator } from '$lib/i18n/translator';
	import { type Quote, title, quotes } from 'data/testimonials';

	let t = $derived(getTranslator());
</script>

{#snippet quote(item : Quote)}
	<div class="max-w-sm flex flex-col gap-4 items-center p-4">
		<MessageCircleMoreIcon class="w-8 h-8" color="var(--color-moonlight)" />
		<p class="italic text-sm">{t(item.quote)}</p>
		<p>{t(item.author)}</p>
	</div>
{/snippet}

<section>
	<Heading title={t(title)} />
	<Carousel itemSnippet={quote} data={quotes} loop={true} />
</section>

<style>
	@reference "style";

	section > :global(.carousel) {
		@apply w-full;
	}

</style>
