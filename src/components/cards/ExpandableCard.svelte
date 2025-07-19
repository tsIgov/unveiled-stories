<script lang="ts">
	import { Rule, ExpandIndicator } from "components/common";

	interface Props {
		class? : string,
		header: string,
		content: string,
		expanded: boolean,
		onclick?: () => void
	}
	let { header, expanded, content, onclick, ...others } : Props  = $props();
</script>


<div class="{others.class}"
	class:expanded={expanded}>

	<Rule class="w-full" />
	<button onclick={() => { if (onclick) onclick()}}>
		<ExpandIndicator class="indicator" expanded={expanded} />
		<h2>{header}</h2>
	</button>
	<div class="content">
		<p>{content}</p>
	</div>
	<Rule class="w-full" />
</div>

<style>
	@reference "style";

	.content {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.5s ease-out;

		& > p {
			@apply px-4 mb-4;
			overflow: hidden;
		}
	}

	.expanded > .content {
		grid-template-rows: 1fr;
	}

	button {
		@apply w-full px-12 py-2 overflow-hidden;
		@apply text-light text-center text-lg;
		@apply cursor-pointer;

		&::before {
			@apply absolute top-1/2 left-0 w-full h-1;
			@apply blur-md bg-gradient-to-r from-light/0 via-light to-light/0 ;
			@apply transition-all duration-150 opacity-0;
			content: "";
		}

		&:hover::before {
			@apply opacity-100;
		}

		& > :global(.indicator) {
			@apply absolute top-0 left-0 w-4 h-full ml-4;
		}
	}

</style>
