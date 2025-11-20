<script lang="ts">
	import type { MouseEventHandler } from "svelte/elements";
	import { Frame } from ".";

	interface Props {
		text: string,
		glow? : boolean,
		onclick?: MouseEventHandler<HTMLButtonElement>,
	}

	let {
		text,
		glow = true,
		onclick,
	} : Props = $props();
</script>


<button class="primary-button" {onclick}>
	<Frame {glow}>
		<span>{text}</span>
	</Frame>
</button>


<style>
	@reference "style";

	.primary-button {
		@apply uppercase cursor-pointer;

		& span {
			@apply block hover-glow px-4 py-1;
			@apply text-shadow-sm text-shadow-neutral-900;
		}
	}
</style>
