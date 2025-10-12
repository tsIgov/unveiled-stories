<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { onMount } from "svelte";
	import { fade } from "svelte/transition"
	import { swipe, type SwipeCustomEvent } from 'svelte-gestures';
	import { ChevronLeftIcon, ChevronRightIcon,XIcon } from '@lucide/svelte';

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
		index = Math.min(index + 1, images.length - 1);
	}

	function prev() {
		index = Math.max(index - 1, 0);
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key == "Escape")
			close();
		if (event.key == "ArrowLeft")
			prev();
		if (event.key == "ArrowRight")
			next();
	}

	function swipeHandler(event: SwipeCustomEvent) {
		if (event.detail.pointerType == "mouse")
			return;

		if (event.detail.direction == "left")
			next();
		else if (event.detail.direction == "right")
			prev();
	}

	onMount(() => {
		document.body.classList.add("overflow-hidden");
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

</script>

	<div class="lightbox-gallery"
		transition:fade
		use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' })} onswipe={swipeHandler}>
		<div class="content">
			{#each images as image, i}
				<PhotoCard
					color={borderColor ?? "var(--color-gold)"}
					name={galleryName}
					image={image}
					class={i == index ? "active" : ""}  />
			{/each}
		</div>

		<button class="close"
			onclick={(e) => { e.stopPropagation(); close(); }}>
				<XIcon />
		</button>
		<button class="prev"
			class:invisible={index == 0}
			onclick={(e) => { e.stopPropagation(); prev(); }}>
				<ChevronLeftIcon />
		</button>
		<button class="next"
			class:invisible={index == images.length - 1}
			onclick={(e) => { e.stopPropagation(); next(); }}>
				<ChevronRightIcon />
		</button>

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
		@apply absolute w-8 h-8 top-1/2 -translate-y-1/2;
		@apply flex content-center items-center justify-center;
		@apply bg-neutral-800 border-2 border-moonlight-dim rounded-full;
		@apply transition-[visibility_opacity] duration-[1s] transition-discrete opacity-100;
		@apply drop-shadow-neutral-900  shadow-md shadow-neutral-900;
		@apply cursor-pointer;

		&.invisible {
			@apply opacity-0 cursor-default;
		}

		&:hover {
			@apply hover-glow;
		}

		& :global(.lucide-icon) {
			@apply w-4 h-4;
		}

		&.close { @apply right-4 top-4 translate-y-0; }
		&.prev { @apply left-4; }
		&.next { @apply right-4; }
	}

</style>
