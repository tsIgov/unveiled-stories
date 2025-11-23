<script lang="ts">
	import { Heading } from 'components/basic';
	import { Carousel, DetailsCard } from 'components/common';
	import { getTranslator } from '$lib/i18n/translator';
	import { type TeamMember, header, members } from 'data/team';
	import { useMediaQuery } from "$lib/utils/media-queries";

	let t = $derived(getTranslator());

	let mediaQuery = getExpandMediaQuery();
	let expanded = useMediaQuery(mediaQuery);

	function getExpandMediaQuery() {
		// Padding + item gaps + max item size
		const remToFitLandscape = 1.5 * 2 + (members.length - 1) * 1.5 + members.length * 34;
		const remToFitPortrait = 1.5 * 2 + (members.length - 1) * 1.5 + members.length * 22;

		const landscapeMediaQuery = `(height < 40rem) and (orientation: landscape) and (width >= ${remToFitLandscape * 18}px)`;
		const portraitMediaQuery = `((height >= 40rem) or (orientation: portrait)) and (width >= ${remToFitPortrait * 18}px)`;

		const mediaQuery = `(${landscapeMediaQuery}) or (${portraitMediaQuery})`;

		return mediaQuery;
	}
</script>

{#snippet member(item : TeamMember, spotlight : boolean)}
	<DetailsCard
		title={t(item.name)}
		subtitle={t(item.title)}
		details={t(item.bio)}
		background={item.photos}
		alwaysGlow={spotlight}
	/>
{/snippet}

<section class="team">
	<Heading title={t(header)} />

	{#if $expanded}
		<div class="carousel expanded">
			{#each members as m}
				{@render member(m, true)}
			{/each}
		</div>
	{:else}
		<Carousel itemSnippet={member} data={members} />
	{/if}

</section>

<style>
	@reference "style";
	.team :global(.card) { @apply w-full; }

	.expanded {
		@apply w-full flex gap-6;
		@apply justify-center-safe items-center-safe content-center-safe;
	}
</style>
