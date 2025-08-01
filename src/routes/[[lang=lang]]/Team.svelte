<script lang="ts">
	import { Carousel, Rule } from 'components/common';
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
	<div class="text-center max-w-3xl px-4">
		<h2 class="font-serif text-xl text-light uppercase mb-2">{data.header}</h2>
		<Rule class="min-w-3xs" centerOrnament={true} />
	</div>

	<Carousel class="w-full" itemSnippet={member} data={data.members} loop={false} expandMediaQuery="(width >= 54rem)" />

</section>

<style>
	@reference "style";

</style>
