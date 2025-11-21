<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { PhotoCard } from 'components/common';

	import { page } from '$app/state';
	import { pushState } from '$app/navigation';
	import { onMount } from "svelte";
	import { useSwipe, type SwipeCustomEvent } from 'svelte-gestures';
	import { ChevronLeftIcon, ChevronRightIcon,XIcon } from '@lucide/svelte';

	interface Props {
		images : Picture[],
		borderColor?: string,
		onclosed?: () => void
	}

	let { images, borderColor, onclosed } : Props = $props();
	let index : number = $state(0);
	let opened = $derived((page.state as Record<string, unknown>)?.galleryOpened ? true : false );
	let initial = $state(true);

	$effect(() => {
		if (opened) {
			document.body.classList.add("overflow-hidden");
			window.addEventListener("keydown", handleKeyDown);
		} else if (!initial) {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", handleKeyDown);
			onclosed?.();
		}
	});

	export function open() {
		index = 0;
		initial = false;
		pushState('', {
			galleryOpened: true
		 });
	}

	function close() {
		history.back();
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
		return () => {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

</script>

	<div class="lightbox-gallery"
		class:opened={opened}
		class:closed={!opened && !initial}
		{...useSwipe(swipeHandler, () => ({
			timeframe: 300,
			minSwipeDistance: 50,
			touchAction: [ "pan-y", "pinch-zoom" ] as unknown as any
		}))}
	>
		<div class="content">
			{#each images as image, i}
				{#if opened || i == 0}
					<PhotoCard
						color={borderColor ?? "var(--color-gold)"}
						image={image}
						class={i == index && opened ? "active" : ""}
						glow={true}  />
				{/if}
			{/each}
		</div>

		<button class="close active"
			onclick={(e) => { e.stopPropagation(); close(); }}>
				<XIcon />
		</button>
		<button class="prev"
			class:active={index != 0}
			onclick={(e) => { e.stopPropagation(); prev(); }}>
				<ChevronLeftIcon />
		</button>
		<button class="next"
			class:active={index != images.length - 1}
			onclick={(e) => { e.stopPropagation(); next(); }}>
				<ChevronRightIcon />
		</button>

	</div>

<style>
	@reference "style";

	.lightbox-gallery {
		@apply invisible;
		@apply fixed top-0 inset-0 z-2000 overflow-hidden;
		@apply bg-neutral-900/95;
		@apply p-8;


		&.opened {
			animation: open 1s ease-in-out 1 forwards;
		}

		&.closed {
			animation: close 1s ease-in-out 1 forwards;

			& :global(.active) {
				@apply opacity-100!;
			}
		}
	}

	.content {
		@apply w-full h-full;
		@apply grid content-center items-center justify-center justify-items-center;
		@apply grid-cols-1 grid-rows-1;

		& > :global(.photo-card) {
			@apply col-start-1 row-start-1;
			@apply transition-opacity duration-1000;
			@apply opacity-100;

			&:global(:not(.active)) {
				@apply opacity-0;
				animation: remove 1s linear 1;
			}
		}
	}

	button {
		@apply absolute w-8 h-8 top-1/2 -translate-y-1/2;
		@apply flex content-center items-center justify-center;
		@apply bg-neutral-800 border-2 border-moonlight-dim rounded-full;
		@apply transition-opacity duration-1000 opacity-100;
		@apply drop-shadow-neutral-900  shadow-md shadow-neutral-900;
		@apply cursor-pointer;

		&:not(.active) {
			@apply opacity-0 cursor-default;
			animation: remove 1s linear 1;
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

	@keyframes open {
		from {
			visibility: visible;
			opacity: 0%;
		}
		to {
			visibility: visible;
			opacity: 100%;
		}
	}

	@keyframes close {
		from {
			visibility: visible;
			opacity: 100%;
		}
		to {
			visibility: hidden;
			opacity: 0%;
		}
	}

</style>
