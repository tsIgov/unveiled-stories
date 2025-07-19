<script lang="ts">
	interface Props {
		expanded : boolean,
		class? : string
	}

	let { expanded, ...others } : Props = $props();
</script>

<span class="{others.class}"
	class:expanded={expanded}>
	<img class="expand-icon" src="plus.svg" alt="expand" />
	<img class="collapse-icon" src="minus.svg" alt="collapse" />
</span>

<style>
	@reference "style";

	span {
		@apply min-w-4 min-h-4;

		& > .expand-icon,
		& > .collapse-icon {
			@apply absolute left-0 w-full h-full;
			@apply transition-all duration-500;
		}

		& > .expand-icon {
			@apply opacity-100 rotate-0;
		}

		& > .collapse-icon {
			@apply opacity-0;
		}
	}

	span.expanded {
		& > .expand-icon {
			@apply opacity-0 rotate-90;
		}

		& > .collapse-icon {
			@apply opacity-100;
		}
	}
</style>
