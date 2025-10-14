<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { Frame } from 'components/common'
	import type { ClassValue } from 'svelte/elements';

	interface base {
		class?: ClassValue,
		style?: string
	}

	interface Props extends base {
		name: string,
		image : Picture,
		color: string,
	}

	let { name, image, color, ...rest } : Props  = $props();

	let el : HTMLElement;

	let orientation = $derived(image.img.w > image.img.h ? "landscape" : "portrait");

</script>


<div class="photo-card {rest.class}" style={rest.style}
	class:portrait={orientation == "portrait"}
	class:landscape={orientation == "landscape"}>
	<Frame {color}>
		<div class="frame-gap">
			<Frame glow={false} {color}>
				<img class="logo" src="/logo.svg" alt="logo" />
				<enhanced:img class="" onload={() => { el.classList.add("loaded") }}
					src={image} alt={name} bind:this={el} />
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
			@apply w-full h-full;
			padding: min(1.5cqb, 0.5rem);
		}

		& :global(.logo) {
			@apply absolute w-full h-full top-0 left-0;
			@apply object-fill -rotate-45;
			@apply select-none;
		}

		& :global(img) {
			@apply w-full h-full;
			@apply min-w-4 min-h-4;
			@apply object-cover;
			@apply select-none;
			@apply transition-opacity opacity-0 duration-1000;

			&:global(.loaded) {
				@apply opacity-100;
			}
		}
	}
</style>
