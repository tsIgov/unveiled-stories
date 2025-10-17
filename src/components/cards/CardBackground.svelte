<script lang="ts">
	import { type Picture } from 'vite-imagetools';

	interface Props {
		portrait: Picture,
		landscape: Picture,
		dim?: boolean,
		alt?: string,
	}

	let { portrait, landscape, dim = true, alt = "background" } : Props = $props();

</script>

<div class="card-background">
	<enhanced:img class="portrait" class:dim={dim} src={portrait} {alt} />
	<enhanced:img class="landscape" class:dim={dim} src={landscape} {alt} />
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
		}

		& :global(.portait) { @apply block landscape-cards:hidden; }
		& :global(.landscape) { @apply hidden landscape-cards:block; }
	}
</style>
