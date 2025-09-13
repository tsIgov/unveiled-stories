<script lang="ts">
	import type { MouseEventHandler } from "svelte/elements";

	import { Frame } from ".";

	interface Props {
		text: string,
		onclick?: MouseEventHandler<HTMLButtonElement> | null,
	}

	let {
		text,
		onclick = null,
	} : Props = $props();
</script>


<button class="primary-button" onclick={onclick}>
	<Frame>
		<span class="hover-glow block">{text}</span>
	</Frame>
</button>


<style>
	@reference "style";

	.primary-button {
		@apply uppercase cursor-pointer;

		& :global(.content) {
			@apply px-4 py-1;
		}
	}
</style>
