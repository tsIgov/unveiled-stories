<script lang="ts">
	import { type Picture } from 'vite-imagetools';

	interface Props {
		landscape: Picture,
		portrait: Picture,
		alt?: string,
	}

	let { landscape, portrait, alt = "background" } : Props = $props();

</script>

<enhanced:img class="section-background dim portrait" src={portrait} {alt} />
<enhanced:img class="section-background dim landscape" src={landscape} {alt} />

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
