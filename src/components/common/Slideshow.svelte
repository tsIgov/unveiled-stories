<script lang="ts" generics="T">
	import { onMount } from "svelte";
	import type { Snippet } from 'svelte';
	import { swipe, type SwipeCustomEvent } from 'svelte-gestures';

	interface Props {
		data: T[],
		slideSnippet: Snippet<[T, number]>
		timeout: number,
		paused? : boolean;
	}

	let { data, slideSnippet, timeout, paused = false } : Props =$props();
	let slidesCount = $derived(data.length);
	let currentSlide = $state(0);

	let timer = -1;

	onMount(() => {
		return () => clearInterval(timer);
	});

	function changeSlide(index: number) {
		clearInterval(timer);
		currentSlide = -1;
		currentSlide = index;
		timer = setInterval(() => {
			currentSlide = (currentSlide + 1) % slidesCount;
		}, timeout);
	}

	function swipeHandler(event: SwipeCustomEvent) {
		if (event.detail.pointerType == "mouse")
			return;

		if (event.detail.direction == "left") {
			if (currentSlide == 0)
				changeSlide(slidesCount - 1);
			else
				changeSlide((currentSlide + 1) % slidesCount);
		}

		else if (event.detail.direction == "right")
			changeSlide((currentSlide + 1) % slidesCount);
	}

	$effect(() => {
		if (paused) {
			clearInterval(timer);
		}
		else {
			timer = setInterval(() => {
				currentSlide = (currentSlide + 1) % slidesCount;
			}, timeout);
		}
	});

	$effect(() => {
		const progress = document.getElementById("progress-" + currentSlide);
		if (progress && !paused) {
			progress.classList.remove("running");
			void progress.offsetWidth;
			progress.classList.add("running");
		}
	});

</script>


<div class="slideshow">

	{#each data as slide, index}
		<div class="slide"
			class:active={currentSlide == index}
			use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' })} onswipe={swipeHandler}>

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

				<div id="progress-{slideIndex}" class="progress-line running" class:paused={paused}
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
		@apply flex absolute top-0 left-0 w-full h-full transition-all duration-[2s];

		& > :global(*) {
			@apply w-full h-full;
		}

		&.active {
			@apply opacity-100 pointer-events-auto;
		}

		&:not(.active) {
			@apply opacity-0 pointer-events-none;
			animation: remove 2s linear 1;
		}
	}

	.slideshow-nav {
		@apply absolute p-4 w-full bottom-0 left-0 flex justify-center items-center gap-4;

		& > button {
			@apply flex justify-center items-center rounded-full transition-all cursor-pointer;
			width: calc(var(--slideshow-navigation-height) - 2rem);
			height: calc(var(--slideshow-navigation-height) - 2rem);

			& > span {
				@apply transition-all duration-1000 text-xs;
				@apply text-neutral-100/60;

			}

			&:hover > span,
			&.active > span {
				@apply text-neutral-100;
			}

			& > .progress-line {
				@apply transition-all duration-1000;
				@apply absolute rounded-full bg-conic from-neutral-100 to-neutral-100/20 from-100% to-100% -z-10;
				@apply opacity-0;

				top: -2px;
				left: -2px;
				width: calc(var(--slideshow-navigation-height) - 2rem + 4px);
				height: calc(var(--slideshow-navigation-height) - 2rem + 4px);
				mask: radial-gradient(
					transparent calc((var(--slideshow-navigation-height) - 2rem) / 2),
					black calc((var(--slideshow-navigation-height) - 2rem) / 2 + 1px));
			}

			&.active > .progress-line {
				@apply opacity-100;
			}

			& > .progress-line.running {
				animation-name: progress;
				animation-timing-function: linear;
			}

			& > .progress-line.paused {
				@apply opacity-0;
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
</style>
