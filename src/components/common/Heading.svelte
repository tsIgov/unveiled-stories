<script lang="ts">
	import { Rule } from ".";

	interface Props {
		title : string,
		summary?: string,
	}

	let { title, summary} : Props = $props();
</script>

<div class="heading">
	<h2>{title}</h2>
	{#if summary}
		<p>{summary}</p>
	{/if}
	<Rule centerOrnament={true} />
</div>

<style>
	@reference "style";

	.heading {
		@apply max-w-3xl px-4;
		@apply text-center;

		& > h2 {
			@apply font-serif text-xl text-moonlight uppercase;
			@apply mb-2;
		}

		& > :global(.rule) {
			@apply w-full min-w-3xs mt-4;
		}
	}
</style>
