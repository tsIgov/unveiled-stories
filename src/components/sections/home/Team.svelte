<script lang="ts">
	import { Carousel, Heading } from 'components/common';
	import { DetailsCard } from 'components/cards';

	import { type TeamMember, header, members } from 'data/team';
	import { getTranslator } from '$lib/i18n/translator';

	let t = $derived(getTranslator());
</script>

{#snippet member(item : TeamMember)}
	<DetailsCard
		title={t(item.name)}
		subtitle={t(item.title)}
		details={t(item.bio)}
		background={item.photo}
	/>
{/snippet}

<section class="team">
	<Heading title={t(header)} />
	<Carousel itemSnippet={member} data={members} loop={false} expandMediaQuery="(width >= 54rem)" />
</section>

<style>
	@reference "style";

	.team {
		@apply w-full;

		& > :global(.carousel) {
			@apply w-full;
		}

		& :global(.details-card) {
			@apply max-w-2xs;
		}
	}

</style>
