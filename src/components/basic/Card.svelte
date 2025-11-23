<script lang="ts">
	import { Frame } from '.'

	import type { ClassValue } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props {
		borderColor?: string,
		glow?: boolean,
		class?: ClassValue,
		children : Snippet
	}

	let {
		borderColor = "var(--color-gold)",
		glow = false,
		children,
		...rest
	} : Props = $props();
</script>


<div class="card {rest.class}">
	<Frame color={borderColor} {glow}}>
		{@render children()}
	</Frame>
</div>


<style>
	@reference "style";

	.card {
		@apply aspect-card landscape-cards:aspect-card-landscape;
		@apply max-w-88 landscape-cards:max-w-136;
	}

</style>
