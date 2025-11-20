<script lang="ts">
	import { Ruler } from "components/basic";

	interface Props {
		title : string,
		summary?: string,
	}

	let { title, summary} : Props = $props();
</script>

<div class="heading">
	<h2>{title}</h2>
	<p>{summary}</p>
	<Ruler centerOrnament={true} />
</div>

<style>
	@reference "style";

	.heading {
		@apply max-w-3xl px-4;
		@apply text-center;

		& > h2 {
			@apply font-serif text-xl text-moonlight uppercase;
			@apply text-shadow-sm text-shadow-neutral-900;
			@apply mb-2;
		}

		& > :global(.ruler) {
			@apply w-full min-w-3xs mt-4;
		}
	}
</style>
