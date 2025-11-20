<script lang="ts">
	import { PlusIcon, MinusIcon } from '@lucide/svelte';

	interface Props {
		expanded : boolean,
	}

	let { expanded } : Props = $props();
</script>

<span class="expand-indicator"
	class:expanded={expanded}>
	<PlusIcon class="expand-icon" />
	<MinusIcon class="collapse-icon" />
</span>

<style>
	@reference "style";

	.expand-indicator {
		@apply min-w-4 min-h-4;

		& > :global(.expand-icon),
		& > :global(.collapse-icon) {
			@apply absolute left-0 w-full h-full;
			@apply transition-all duration-500;
			@apply text-moonlight;
		}

		& > :global(.expand-icon) {
			@apply opacity-100 rotate-0;
		}

		& > :global(.collapse-icon) {
			@apply opacity-0;
		}

		&.expanded {
			& > :global(.expand-icon) {
				@apply opacity-0 rotate-90;
			}

			& > :global(.collapse-icon) {
				@apply opacity-100;
			}
		}
	}
</style>
