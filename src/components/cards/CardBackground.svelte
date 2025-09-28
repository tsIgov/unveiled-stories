<script lang="ts">
	import { type Picture } from 'vite-imagetools';

	interface Props {
		image: Picture,
		dim?: boolean,
		alt?: string,
	}

	let { image, dim = true, alt = "background" } : Props = $props();

</script>

<enhanced:img class="card-background" class:dim={dim} src={image} {alt} />

<style>
	@reference "style";

	.card-background {
		@apply absolute top-0 left-0 w-full h-full;
		@apply bg-neutral-800 object-cover;
		@apply select-none;
	}
</style>
