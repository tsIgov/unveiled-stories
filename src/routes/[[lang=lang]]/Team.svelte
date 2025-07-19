<script lang="ts">
	import { Rule } from 'components/common';
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

<section class="w-full px-4">
	<div class="text-center max-w-3xl px-4">
		<h2 class="font-serif text-xl text-light uppercase mb-2">{data.header}</h2>
		<Rule class="min-w-3xs" centerOrnament={true} />
	</div>

	<div class="w-full flex flex-wrap justify-center gap-4">
		{#each data.members as teamMember}
			<TeamMember data={teamMember} />
		{/each}
	</div>
</section>

<style>
	@reference "style";

</style>
