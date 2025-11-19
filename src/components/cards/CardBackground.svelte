<script lang="ts">
	import { type Photo } from "data/images";

	interface Props {
		portrait: Photo,
		landscape: Photo,
		dim?: boolean,
		alt?: string,
	}

	let { portrait, landscape, dim = true, alt = "background" } : Props = $props();

</script>

<div class="card-background">
	<enhanced:img class="portrait" class:dim={dim} src={portrait.src} {alt} />
	<enhanced:img class="landscape" class:dim={dim} src={landscape.src} {alt} />
</div>
<style>
	@reference "style";

	.card-background {
		@apply absolute top-0 left-0 w-full h-full;
		@apply bg-neutral-800;

		& :global(img) {
			@apply absolute top-0 left-0 w-full h-full;
			@apply object-cover;
			@apply select-none;

			&:global(.portrait) { @apply block landscape-cards:hidden; }
			&:global(.landscape) { @apply hidden landscape-cards:block; }
		}
	}
</style>
