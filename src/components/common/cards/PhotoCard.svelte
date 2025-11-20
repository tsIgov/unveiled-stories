<script lang="ts">
	import { Frame } from 'components/basic'
	import { type Photo } from 'data/images';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		image : Photo,
		color: string,
		glow?: boolean,
		class?: ClassValue
	}

	let { image, color, glow = false, ...rest } : Props  = $props();

	let initialized = $state(false);
</script>


<div class="photo-card {rest.class}"
	class:portrait={image.orientation == "portrait"}
	class:landscape={image.orientation == "landscape"}>
	<Frame {color} {glow}>
		<div class="frame-gap">
			<Frame glow={false} {color}>
				<enhanced:img class:initialized={initialized} src={image.src} alt="" decoding="async" loading="eager" onload={() => initialized = true } />
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

			will-change: opacity;
  			transform: translateZ(0);
			opacity: 0;
			@apply transition-opacity duration-500 ease-out;
		}

		.initialized {
			opacity: 1;
		}
	}
</style>
