<script lang="ts">
	import { type Photo } from "data/images";

	interface Props {
		portrait: Photo,
		landscape: Photo,
		dim?: boolean,
		forCard?: boolean,
		alt?: string,
	}

	let { portrait, landscape, dim = true, forCard = false, alt = "background" } : Props = $props();

</script>

<div class="card-background">
	<enhanced:img class="portrait" class:dim={dim} class:cardbg={forCard} src={portrait.src} {alt} decoding="async" loading="eager" />
	<enhanced:img class="landscape" class:dim={dim} class:cardbg={forCard} src={landscape.src} {alt} decoding="async" loading="eager" />
</div>
<style>
	@reference "style";

	.card-background {
		@apply absolute inset-0;
		@apply bg-neutral-800;
	}

	.portrait,
	.landscape {
		@apply absolute inset-0;
		@apply object-cover;
		@apply select-none;
	}

	.portrait.cardbg { @apply block landscape-cards:hidden; }
	.landscape.cardbg { @apply hidden landscape-cards:block; }

	.portrait:not(.cardbg) { @apply landscape:hidden; }
	.landscape:not(.cardbg) { @apply portrait:hidden; }
</style>
