<script lang="ts">
	import { Frame } from 'components/common'

	import type { Picture } from 'vite-imagetools';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		image : Picture,
		color: string,
		class?: ClassValue,
	}

	let { image, color, ...rest } : Props  = $props();
	let orientation = $derived(image.img.w > image.img.h ? "landscape" : "portrait");

</script>


<div class="photo-card {rest.class}"
	class:portrait={orientation == "portrait"}
	class:landscape={orientation == "landscape"}>
	<Frame {color}>
		<div class="frame-gap">
			<Frame glow={false} {color}>
				<enhanced:img src={image} alt="" />
			</Frame>
		</div>
	 </Frame>
</div>


<style>
	@reference "style";

	.photo-card {
		&.portrait { @apply aspect-card; }
		&.landscape { @apply aspect-card-landscape; }

		@apply max-w-full max-h-full;

		& .frame-gap {
			@apply w-full h-full bg-neutral-800;
			padding: min(1.5cqb, 0.5rem);
		}

		& :global(img) {
			@apply w-full h-full;
			@apply min-w-12 min-h-12;
			@apply object-cover;
			@apply select-none;
		}
	}
</style>
