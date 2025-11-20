<script lang="ts">
	import { type ClassValue } from 'svelte/elements';
	import { type Picture } from 'vite-imagetools';
	import { Frame } from 'components/basic'

	interface Props {
		image : Picture,
		color: string,
		glow?: boolean,
		class?: ClassValue
	}

	let { image, color, glow = false, ...rest } : Props  = $props();
</script>


<div class="photo-card {rest.class}"
	class:portrait={image.img.w < image.img.h}
	class:landscape={image.img.w >= image.img.h}>
	<Frame {color} {glow}>
		<div class="frame-gap">
			<Frame glow={false} {color}>
				<enhanced:img src={image} alt="" decoding="async" loading="eager" />
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

		& :global(.initialized) {
			opacity: 1;
		}
	}
</style>
