<script lang="ts">
	import { type Photo } from "data/photos";

	interface Props {
		portrait: Photo,
		landscape: Photo,
		dim?: boolean,
		alt?: string,
	}

	let { portrait, landscape, dim = true, alt = "background" } : Props = $props();

</script>

<div class="card-background">
	<img class="portrait" class:dim={dim} src={portrait.src} {alt} />
	<img class="landscape" class:dim={dim} src={landscape.src} {alt} />
</div>
<style>
	@reference "style";

	.card-background {
		@apply absolute top-0 left-0 w-full h-full;
		@apply bg-neutral-800;

		& > img {
			@apply absolute top-0 left-0 w-full h-full;
			@apply object-cover;
			@apply select-none;

			&.portrait { @apply block landscape-cards:hidden; }
			&.landscape { @apply hidden landscape-cards:block; }
		}
	}
</style>
