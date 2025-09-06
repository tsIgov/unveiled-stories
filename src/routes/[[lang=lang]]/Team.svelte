<script lang="ts">
	import { Carousel, Heading } from 'components/common';
	import type { MemberData } from 'team';
	import TeamMember from './TeamMember.svelte';

	interface Props {
		data: {
			header : string,
			members: MemberData[];
		}
	}

	let { data } : Props = $props();

</script>

{#snippet member(data : MemberData)}
	<TeamMember data={data} />
{/snippet}

<section class="w-full">
	<Heading title={data.header} />

	<Carousel itemSnippet={member} data={data.members} loop={false} expandMediaQuery="(width >= 54rem)" />

</section>

<style>
	@reference "style";

	section > :global(.carousel) {
		@apply w-full;
	}

</style>
