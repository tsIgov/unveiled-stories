<script lang="ts">
	import { Carousel, Heading } from 'components/common';
	import { DetailsCard } from 'components/cards';

	import { getTranslator } from '$lib/i18n/translator';

	import { type TeamMember, header, members } from 'data/team';
	import NewCarousel from 'components/common/NewCarousel.svelte';

	let t = $derived(getTranslator());
</script>

{#snippet member(item : TeamMember, active : boolean)}
	<DetailsCard
		title={t(item.name)}
		subtitle={t(item.title)}
		details={t(item.bio)}
		background={item.photos}
		glow={active}
	/>
{/snippet}

<section class="team">
	<Heading title={t(header)} />
	<NewCarousel itemSnippet={member} data={members} expandIfFit={true} />
</section>
