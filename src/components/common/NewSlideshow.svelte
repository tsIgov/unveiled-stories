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

	export function pause() {
		if (!running) return;
		running = false;
		clearTimer();
	}

	export function unpause() {
		if (running) return;

		running = true;
		resetTimer();
	}

	let initialized = $state(false);
	let running = $state(false);
	let currentSlide = $state(0);

	let observer : IntersectionObserver;
	let track: HTMLElement;
	let prevSpacer : HTMLElement;
	let nextSpacer : HTMLElement;


	onMount(() => {
		const options = {
			root: track,
			threshold: [ 0.501, 1 ]
		};
		observer =  new IntersectionObserver((e) => {
			e.forEach(entry => { intersected(entry); });
		}, options);

		observer.observe(prevSpacer);
		observer.observe(nextSpacer);

		resetScroll();
		initialized = true;
		resetTimer();

		return () => {
			clearTimer();
			observer.disconnect();}
	});

	$effect(() => {
		onchanged?.(data[currentSlide], currentSlide);
	});


	function resetScroll(width : number = track.getBoundingClientRect().width) {
		track.scrollTo({
			left: width * 2,
			behavior: "instant"
		});
	}

	let timer = -1;
	function clearTimer() {
		clearInterval(timer);
		running = false;
	}
	function resetTimer() {
		clearInterval(timer);
		timer = setInterval(() => {
			changeSlide((currentSlide + 1) % slidesCount);
		}, timeout);
		running = true;
	}



	function changeSlide(index: number) {
		currentSlide = index;
		resetTimer();
	}

	function intersected(entry : IntersectionObserverEntry) {
		if (!initialized) return;

		if (entry.target == prevSpacer && entry.isIntersecting) {
			if (entry.intersectionRatio == 1)
				resetScroll(entry.boundingClientRect.width);
			else {
				currentSlide = (currentSlide - 1 + data.length) % slidesCount;
				resetTimer();
			}

			return;
		}

		if (entry.target == nextSpacer && entry.isIntersecting) {
			if (entry.intersectionRatio == 1)
				resetScroll(entry.boundingClientRect.width);
			else {
				currentSlide = (currentSlide + 1) % slidesCount;
				resetTimer();
			}
			return;
		}
	}

</script>

<div bind:this={track} class="slideshow" class:initialized={initialized}>

	<div class="slide-wrapper">
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

	<div bind:this={prevSpacer} class="spacer prev"></div>
	<div class="spacer current"></div>
	<div bind:this={nextSpacer} class="spacer next"></div>

</div>

<style>
	@reference "style";

	:global(:root) {
		--slideshow-navigation-height: 3.5rem;
	}

	.slideshow {

		@apply flex;

		@apply overflow-x-scroll;
		@apply snap-x snap-mandatory scroll-auto;

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
		@apply transition-opacity ease-in-out duration-1000;
		@apply opacity-0 pointer-events-none;

		&.active {
			@apply opacity-100 pointer-events-auto;
		}

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
