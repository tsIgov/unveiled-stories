<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import type { ClassValue } from 'svelte/elements';
	import { Frame } from 'components/basic'
	import { type Photo } from 'data/images';

	interface Props {
		image : Photo,
		color: string,
		glow?: boolean,
		class?: ClassValue
	}

	let { image, color, glow = false, ...rest } : Props  = $props();

	let img : HTMLImageElement;

	onMount(() => {
		img.decode().finally(() => {
			img.classList.add("initialized")
		});
	});
</script>


<div class="photo-card {rest.class}"
	class:portrait={image.orientation == "portrait"}
	class:landscape={image.orientation == "landscape"}>
	<Frame {color} {glow}>
		<div class="frame-gap">
			<Frame glow={false} {color}>
				<enhanced:img bind:this={img} src={image.src} alt=""  decoding="async" loading="eager" />
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
			opacity: 0.1;
			@apply transition-opacity duration-1000 ease-out;
		}

		& :global(.initialized) {
			opacity: 1;
		}
	}
</style>
