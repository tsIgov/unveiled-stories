<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { Slider } from 'components/basic';
	import { PhotoCard } from 'components/common';

	import { page } from '$app/state';
	import { pushState } from '$app/navigation';
	import { onMount } from "svelte";
	import { ChevronLeftIcon, ChevronRightIcon,XIcon } from '@lucide/svelte';

	interface Props {
		images : Picture[],
		borderColor?: string,
		onclosed?: () => void
	}

	let { images, borderColor, onclosed } : Props = $props();
	let opened = $derived((page.state as Record<string, unknown>)?.galleryOpened ? true : false );
	let initial = $state(true);
	let slider : Slider;
	let index = $state(0);

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
		initial = false;
		pushState('', {
			galleryOpened: true
		 });
	}

	function close() {
		history.back();
	}

	function next() {
		slider.changeItem(Math.min(index + 1, images.length - 1));
	}

	function prev() {
		slider.changeItem(Math.max(index - 1, 0));
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key == "Escape")
			close();
		if (event.key == "ArrowLeft")
			prev();
		if (event.key == "ArrowRight")
			next();
	}

	onMount(() => {
		return () => {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

</script>

	{#snippet itemSnippet(index : number, distance : number )}
		{#if opened || index == 0}
			<div class="photo-sizer">
				<PhotoCard
					color={borderColor ?? "var(--color-gold)"}
					image={images[index]}
					class={distance == 0 && opened ? "active" : ""}
					glow={distance == 0 && opened}  />
			</div>
		{/if}
	{/snippet}

	<div class="lightbox-gallery"
		class:opened={opened}
		class:closed={!opened && !initial}>

		<Slider bind:this={slider} onchanged={(i) => { index = i; }} itemsCount={images.length} loop={false} {itemSnippet}  />

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

		&.opened {
			animation: open 500ms ease-in-out 1 forwards;
		}

		&.closed {
			animation: close 500ms ease-in-out 1 forwards;

			& :global(.active) {
				@apply opacity-100!;
			}
		}
	}

	.lightbox-gallery > :global(.slider) {
		@apply w-full h-full;

		& .photo-sizer {
			@apply w-full h-full p-8;
			@apply grid content-center items-center justify-center justify-items-center;
			@apply grid-cols-1 grid-rows-1;

			& > :global(.photo-card) {
				@apply transition-opacity duration-1000;
				@apply opacity-100;

				&:global(:not(.active)) {
					@apply opacity-0;
				}
			}
		}

	}

	button {
		@apply absolute w-10 h-10 top-1/2 -translate-y-1/2;
		@apply flex content-center items-center justify-center;
		@apply bg-neutral-800 border-2 border-moonlight-dim rounded-full;
		@apply transition-opacity duration-1000 opacity-80;
		@apply drop-shadow-neutral-900  shadow-md shadow-neutral-900;
		@apply cursor-pointer;

		&:not(.active) {
			@apply opacity-0 cursor-default;
		}

		&:hover {
			@apply hover-glow;
		}

		& :global(.lucide-icon) {
			@apply w-4 h-4;
		}

		&.close {
			@apply right-4 translate-y-0;
			top: calc(max(1rem, (100% - (100svw - 4rem) * 1.6) / 2 - 1rem));
		}
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
