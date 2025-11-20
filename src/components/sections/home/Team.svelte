<script lang="ts">
	import { Carousel, Heading, DetailsCard } from 'components/common';
	import { getTranslator } from '$lib/i18n/translator';
	import { type TeamMember, header, members } from 'data/team';

	let t = $derived(getTranslator());
</script>

{#snippet member(item : TeamMember, spotlight : boolean)}
	<DetailsCard
		title={t(item.name)}
		subtitle={t(item.title)}
		details={t(item.bio)}
		background={item.photos}
		glow={spotlight}
	/>
{/snippet}

<section class="team">
	<Heading title={t(header)} />
	<Carousel itemSnippet={member} data={members} expandIfFit={true} />
</section>

<style>
	@reference "style";
	.team :global(.card) { @apply w-full; }
</style>
