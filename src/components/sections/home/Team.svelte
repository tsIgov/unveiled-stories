<script lang="ts">
	import type { MemberData } from 'team';

	interface Props {
		data: {
			header : string,
			members: MemberData[];
		}
	}

	let { data } : Props = $props();

</script>

<section>
	<h2>{data.header}</h2>
</section>

<style>
	@reference "style";

</style>
