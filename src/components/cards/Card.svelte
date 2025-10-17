<script lang="ts">
	import { Frame } from 'components/common'

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
		glow = true,
		children,
		...rest
	} : Props = $props();
</script>


<div class="card {rest.class}">
	<Frame color={borderColor} {glow}>
		{@render children()}
	</Frame>
</div>


<style>
	@reference "style";

	.card {
		@apply aspect-card landscape-cards:aspect-card-landscape;
	}

</style>
