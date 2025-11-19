<script lang="ts" generics="T">
	import { onMount } from "svelte";
	import type { Snippet } from 'svelte';
	import { type SwipeCustomEvent, type TouchAction, useSwipe } from 'svelte-gestures';

	interface Props {
		data: T[],
		slideSnippet: Snippet<[T, number]>
		timeout: number,
		onchanged? : (item : T, index : number) => void
	}

	let { data, slideSnippet, timeout, onchanged } : Props =$props();
	let slidesCount = $derived(data.length);
	let currentSlide = $state(0);
	let running = $state(false);

	let timer = -1;

	onMount(() => {
		unpause();
		return () => clearInterval(timer);
	});

	export function pause() {
		if (!running) return;

		running = false;
		clearInterval(timer);
	}

	export function unpause() {
		if (running) return;

		running = true;
		timer = setInterval(() => {
			currentSlide = (currentSlide + 1) % slidesCount;
			onchanged?.(data[currentSlide], currentSlide);
		}, timeout);
	}

	function changeSlide(index: number) {
		clearInterval(timer);
		if (index == currentSlide && running) {
			var pl = document.getElementById(`progress-line-${currentSlide}`);
			if (pl) {
				pl.classList.remove('running');
				pl.offsetHeight;
				pl.classList.add('running');
			}
		}
		else {
			currentSlide = index;
			onchanged?.(data[currentSlide], currentSlide);
		}
		timer = setInterval(() => {
			currentSlide = (currentSlide + 1) % slidesCount;
			onchanged?.(data[currentSlide], currentSlide);
		}, timeout);
	}

	function swipeHandler(event: SwipeCustomEvent) {
		if (event.detail.pointerType == "mouse")
			return;

		if (event.detail.direction == "left")
			changeSlide((currentSlide + 1) % slidesCount);

		else if (event.detail.direction == "right")
			if (currentSlide == 0)
				changeSlide(slidesCount - 1);
			else
				changeSlide((currentSlide - 1));
	}

</script>


<div class="slideshow"
	{...useSwipe(swipeHandler, () => ({
		timeframe: 300,
		minSwipeDistance: 50,
		touchAction: [ "pan-y", "pinch-zoom" ] as unknown as any
	}))}>

	{#each data as slide, index}
		<div class="slide" class:active={currentSlide == index}>
			{@render slideSnippet(slide, index)}
		</div>
	{/each}

	<div class="slideshow-nav">
		{#each { length: slidesCount }, slideIndex}
			<button
				class:active={currentSlide == slideIndex}
				onclick="{() => changeSlide(slideIndex)}"
				tabindex="-1">
				<span>{String(slideIndex + 1).padStart(2, '0')}</span>

				<div
					id="progress-line-{slideIndex}"
					class="progress-line"
					class:running={slideIndex == currentSlide && running}
					style="animation-duration: {timeout}ms">
				</div>

			</button>
		{/each}
	</div>

</div>

<style>
	@reference "style";

	:global(:root) {
		--slideshow-navigation-height: 3.5rem;
	}

	.slideshow {
		@apply overflow-hidden;
	}

	.slide {
		@apply flex absolute top-0 left-0 w-full h-full transition-none duration-[2s];
		will-change: opacity, transform;
		transform: translateZ(0) scale(1.0);

		& > :global(*) {
			@apply w-full h-full;
		}

		&.active {
			@apply opacity-100;
			@apply pointer-events-auto;
		}

		&:not(.active) {
			@apply opacity-100 translate-x-[calc(100%_-_1px)];
			@apply pointer-events-none;
			animation: remove 2s linear 1;
		}
	}

	.slideshow-nav {
		@apply absolute p-4 w-full bottom-0 left-0 flex justify-center items-center gap-4;

		& > button {
			@apply flex justify-center items-center rounded-full cursor-pointer;
			width: calc(var(--slideshow-navigation-height) - 2rem);
			height: calc(var(--slideshow-navigation-height) - 2rem);

			& > span {
				@apply transition-colors duration-1000 text-xs;
				@apply text-neutral-100/60;

			}

			&:hover > span,
			&.active > span {
				@apply text-neutral-100;
			}

			& > .progress-line {
				@apply transition-opacity duration-1000;
				@apply absolute rounded-full bg-conic from-neutral-100 to-neutral-100/20 from-0% to-0% -z-10;
				@apply opacity-0;

				top: -2px;
				left: -2px;
				width: calc(var(--slideshow-navigation-height) - 2rem + 4px);
				height: calc(var(--slideshow-navigation-height) - 2rem + 4px);
				mask: radial-gradient(
					transparent calc((var(--slideshow-navigation-height) - 2rem) / 2),
					black calc((var(--slideshow-navigation-height) - 2rem) / 2 + 1px));

				&.running {
					@apply opacity-100;
					animation-name: progress;
					animation-timing-function: linear;
				}
			}
		}
	}

	@keyframes progress {
		from {
			--tw-gradient-to-position: 0%;
			--tw-gradient-from-position: 0%;
		}
		to {
			--tw-gradient-to-position: 100%;
			--tw-gradient-from-position: 100%;
		}
	}

	@keyframes remove {
		from {
			visibility: visible;
		}
		to {
			visibility: hidden;
		}
	}
</style>
