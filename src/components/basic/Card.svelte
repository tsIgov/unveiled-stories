<script lang="ts">
	import { Frame } from '.'

	import type { ClassValue } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props {
		borderColor?: string,
		class?: ClassValue,
		children : Snippet
	}

	let {
		borderColor = "var(--color-gold)",
		children,
		...rest
	} : Props = $props();
</script>


<div class="card {rest.class}">
	<Frame color={borderColor} glow={true}>
		{@render children()}
	</Frame>
</div>


<style>
	@reference "style";

	.card {
		@apply aspect-card landscape-cards:aspect-card-landscape;
	}

</style>
