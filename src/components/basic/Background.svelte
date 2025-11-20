<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	interface Props {
		portrait: Picture,
		landscape: Picture,
		dim?: boolean,
		forCard?: boolean,
		alt?: string,
	}

	let { portrait, landscape, dim = true, forCard = false, alt = "background" } : Props = $props();

</script>

<div class="background">
	<enhanced:img class="portrait" class:dim={dim} class:cardbg={forCard} src={portrait} {alt} decoding="async" loading="eager" />
	<enhanced:img class="landscape" class:dim={dim} class:cardbg={forCard} src={landscape} {alt} decoding="async" loading="eager" />
</div>
<style>
	@reference "style";

	.background {
		@apply absolute w-full h-full;
		@apply bg-neutral-800;
	}

	.portrait,
	.landscape {
		@apply absolute w-full h-full;
		@apply object-cover;
		@apply select-none;
	}

	.portrait.cardbg { @apply block landscape-cards:hidden; }
	.landscape.cardbg { @apply hidden landscape-cards:block; }

	.portrait:not(.cardbg) { @apply landscape:hidden; }
	.landscape:not(.cardbg) { @apply portrait:hidden; }
</style>
