<script lang="ts">
	interface Props {
		expanded : boolean,
	}

	let { expanded } : Props = $props();
</script>

<span class="expand-indicator"
	class:expanded={expanded}>
	<img class="expand-icon" src="plus.svg" alt="expand" />
	<img class="collapse-icon" src="minus.svg" alt="collapse" />
</span>

<style>
	@reference "style";

	.expand-indicator {
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

		&.expanded {
			& > .expand-icon {
				@apply opacity-0 rotate-90;
			}

			& > .collapse-icon {
				@apply opacity-100;
			}
		}
	}
</style>
