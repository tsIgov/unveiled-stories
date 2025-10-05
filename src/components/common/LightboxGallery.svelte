<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { onMount } from "svelte";
	import { fade } from "svelte/transition"
	import { PhotoCard } from 'components/cards';

	interface Props {
		images : Picture[],
		borderColor?: string,
		galleryName: string,
		onclose?: () => void,
	}

	let { images, borderColor, galleryName, onclose } : Props = $props();

	let index : number = $state(0);

	function close() {
		if (onclose)
			onclose();
	}

	function next() {
		index = Math.min(index + 1, images.length);
	}

	function prev() {
		index = Math.max(index - 1, 0);
	}

	onMount(() => {
		document.body.classList.add("overflow-hidden");
		return () => document.body.classList.remove("overflow-hidden");
	});

</script>

	<div class="lightbox-gallery" transition:fade>
		<div class="content">
			{#each images as image, i}
				<PhotoCard
					color={borderColor ?? "var(--color-gold)"}
					name={galleryName}
					image={image}
					class={i == index ? "active" : ""}  />
			{/each}
		</div>

		<button class="close" onclick={(e) => { e.stopPropagation(); close(); }}>X</button>
		<button class="prev" class:invisible={index == 0} onclick={(e) => { e.stopPropagation(); prev(); }}>P</button>
		<button class="next" class:invisible={index == images.length - 1} onclick={(e) => { e.stopPropagation(); next(); }}>N</button>
	</div>

<style>
	@reference "style";

	.lightbox-gallery {

		@apply fixed top-0 inset-0 z-[2000] overflow-hidden;
		@apply bg-neutral-900/95;
		@apply p-8;
	}

	.content {
		@apply w-full h-full;
		@apply grid content-center items-center justify-center justify-items-center;
		@apply grid-cols-1 grid-rows-1;

		& > :global(.photo-card) {
			@apply col-start-1 row-start-1;
			@apply transition-[visibility_opacity] duration-[1s] transition-discrete;
			@apply opacity-0 invisible;

			&:global(.active) {
				@apply opacity-100 visible;
			}
		}
	}

	button {
		@apply absolute;
		@apply  w-6 h-6 top-1/2 -translate-y-1/2 bg-[red];

		&.close { @apply right-0 top-0 translate-y-0; }
		&.prev { @apply left-4; }
		&.next { @apply right-4; }
	}

</style>
