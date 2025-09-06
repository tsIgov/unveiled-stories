<script lang="ts">
	import { Rule, ExpandIndicator } from "components/common";

	interface Props {
		header: string,
		content: string,
		expanded: boolean,
		onclick?: () => void
	}
	let { header, expanded, content, onclick } : Props  = $props();
</script>


<div class="expandable-card"
	class:expanded={expanded}>

	<Rule />
	<button onclick={() => { if (onclick) onclick()}}>
		<ExpandIndicator expanded={expanded} />
		<h2>{header}</h2>
	</button>
	<div class="content">
		<p>{content}</p>
	</div>
	<Rule />
</div>

<style>
	@reference "style";

	.expandable-card {

		& > .content {
			display: grid;
			grid-template-rows: 0fr;
			transition: grid-template-rows 0.5s ease-out;

			& > p {
				@apply px-4 mb-4;
				overflow: hidden;
			}
		}

		&.expanded > .content {
			grid-template-rows: 1fr;
		}

		& > button {
			@apply w-full px-12 py-2 overflow-hidden;
			@apply text-moonlight text-center text-lg;
			@apply cursor-pointer hover-glow;

			& > :global(.expand-indicator) {
				@apply absolute top-0 left-0 w-4 h-full ml-4;
			}
		}

		& > :global(.rule) {
			@apply w-full;
		}
	}

</style>
