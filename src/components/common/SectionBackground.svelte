<script lang="ts">
	import { type Photo } from 'data/images';

	interface Props {
		landscape: Photo,
		portrait: Photo,
		alt?: string,
	}

	let { landscape, portrait, alt = "background" } : Props = $props();
</script>

<enhanced:img class="section-background dim portrait" src={portrait.src} {alt} />
<enhanced:img class="section-background dim landscape" src={landscape.src} {alt} />

<style>
	@reference "style";

	.section-background {
		@apply absolute top-0 left-0 w-full h-full;
		@apply bg-neutral-800 object-cover;
		@apply select-none;

		&.portrait {
			@apply landscape:hidden;
		}

		&.landscape{
			@apply portrait:hidden;
		}
	}
</style>
