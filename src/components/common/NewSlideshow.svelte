<script lang="ts" generics="T">
	import { type Snippet, onMount } from "svelte";

	interface Props {
		data: T[],
		slideSnippet: Snippet<[T, number]>
		timeout: number,
		onchanged? : (item : T, index : number) => void
	}

	let { data, slideSnippet, timeout, onchanged } : Props =$props();
	let slidesCount = $derived(data.length);
	let running = $state(false);

	export function pause() {
		if (!running) return;
		running = false;
		clearTimer();
	}

	export function unpause() {
		if (running) return;

		running = true;
		setTimer();
	}

	let initialized = $state(false);
	onMount(() => {
		initialized = true;
		running = true;
		resetScroll();
		return () => clearTimer();
	});

	$effect(() => {
		onchanged?.(data[currentSlide], currentSlide);
	});

	let track: HTMLElement;
	let slides : HTMLElement[] = [];
	let spacers : { prev: HTMLElement, current: HTMLElement, next: HTMLElement } = {} as any;

	let prevSlide = $state(data.length - 1);
	let currentSlide = $state(0);
	let nextSlide = $state(1);

	function onscroll() {
		clearTimer();
		const width = track.getBoundingClientRect().width;

		const prevRatio = getRatio(spacers.prev, width);
		const currentRatio = getRatio(spacers.current, width);
		const nextRatio = getRatio(spacers.next, width);

		slides[prevSlide].style.opacity = prevRatio.toString();
		slides[currentSlide].style.opacity = currentRatio.toString();
		slides[nextSlide].style.opacity = nextRatio.toString();

		slides[prevSlide].style.visibility = prevRatio == 0 ? "hidden" : "visible";
		slides[currentSlide].style.visibility = currentRatio == 0 ? "hidden" : "visible";
		slides[nextSlide].style.visibility = nextRatio == 0 ? "hidden" : "visible";

		if (prevRatio == 1) {
			nextSlide = currentSlide;
			currentSlide = prevSlide;
			prevSlide = (prevSlide - 1 + data.length) % slidesCount;

			resetScroll(width);
		}
		else if (nextRatio == 1) {
			prevSlide = currentSlide;
			currentSlide = nextSlide;
			nextSlide = (nextSlide + 1) % slidesCount;

			resetScroll(width);
		}

		if (nextRatio == 1 || prevRatio == 1 || currentRatio == 1)
			setTimer();
	}

	function getRatio(spacer: HTMLElement, width: number) {
		const spacerRect = spacer.getBoundingClientRect();

		let ratio = 0;
		if ((spacerRect.left >= 0 && spacerRect.left < width) || spacerRect.right >= 0 && spacerRect.right < width) {
			ratio = (Math.min(spacerRect.right, width) - Math.max(spacerRect.left, 0)) / width;
			ratio = Math.round(ratio * 100) / 100;
		}

		return ratio;
	}

	function resetScroll(width : number = track.getBoundingClientRect().width) {
		track.scrollTo({
			left: width * 2,
			behavior: "instant"
		});
	}

	let timer = -1;
	function clearTimer() {
		clearTimeout(timer);
		running = false;
	}
	function setTimer() {
		clearTimeout(timer);
		timer = setTimeout(() => {
			changeSlide(nextSlide);
		}, timeout);
		running = true;
	}

	function changeSlide(index: number) {
		const width = track.getBoundingClientRect().width;
		nextSlide = index;
		track.scrollBy({
			left: width,
			behavior: "smooth"
		});
	}












</script>


<div bind:this={track} class="slideshow" class:initialized={initialized} {onscroll}>

	<div class="slide-wrapper">
		{#each data as slide, index}
			<div bind:this={slides[index]} class="slide">
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

	<div bind:this={spacers.prev} class="spacer prev"></div>
	<div bind:this={spacers.current} class="spacer current"></div>
	<div bind:this={spacers.next} class="spacer next"></div>

</div>

<style>
	@reference "style";

	:global(:root) {
		--slideshow-navigation-height: 3.5rem;
	}

	.slideshow {

		@apply flex;

		@apply overflow-x-scroll;
		@apply snap-x snap-mandatory scroll-smooth;

		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.slideshow:not(.initialized) {
		& > .spacer.prev { @apply snap-none; }
		& > .slide-wrapper > .slide:first-child { @apply opacity-100 visible; }
	}

	.spacer {
		@apply w-full h-px shrink-0;
		@apply snap-always snap-start;
	}

	.slide-wrapper {
		@apply sticky left-0 w-full h-full shrink-0;
	}

	.slide {
		@apply flex absolute top-0 left-0 w-full h-full;
		opacity: 0;
		visibility: hidden;

		& > :global(*) {
			@apply w-full h-full;
		}
	}

	.slideshow-nav {
		@apply absolute p-4 w-full bottom-0 left-0 flex justify-center items-center gap-4;

		& > button {
			@apply flex justify-center items-center rounded-full cursor-pointer;
			width: calc(var(--slideshow-navigation-height) - 2rem);
			height: calc(var(--slideshow-navigation-height) - 2rem);

			& > span {
				@apply transition-colors duration-200 text-xs;
				@apply text-neutral-100/60;

			}

			&:hover > span,
			&.active > span {
				@apply text-neutral-100;
			}

			& > .progress-line {
				@apply transition-opacity duration-1000;
				@apply absolute rounded-full bg-conic from-neutral-100/80 to-neutral-100/20 from-0% to-0%;
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

</style>
