<script lang="ts">
	import { Frame } from 'components/common'
	import type { ClassValue } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props {
		borderColor?: string,
		glow?: boolean,
		class?: ClassValue,
		orientation?: "landscape" | "portrait",
		children : Snippet
	}

	let {
		borderColor = "var(--color-gold)",
		glow = true,
		children,
		orientation = "portrait",
		...rest
	} : Props = $props();
</script>


<div class="card {rest.class}"
	class:portrait={orientation == "portrait"}
	class:landscape={orientation == "landscape"}>
	<Frame color={borderColor} {glow}>
		{@render children()}
	</Frame>
</div>


<style>
	@reference "style";

	.card {
		&.portrait {
			@apply aspect-card;
			@apply max-w-xs;
		}

		&.landscape {
			 @apply aspect-card-landscape;
			 @apply max-h-80;
		}
	}

</style>
