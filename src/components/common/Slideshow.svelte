<script lang="ts" generics="T">
	import { onMount } from "svelte";
	import type { Snippet } from 'svelte';
	import { swipe, type SwipeCustomEvent } from 'svelte-gestures';

	interface Props {
		class? : string,
		data: T[],
		slideSnippet: Snippet<[T]>
		timeout: number
	}

	let { data, slideSnippet, timeout, ...others} : Props =$props();
	let slidesCount = $derived(data.length);
	let currentSlide = $state(0);

	let timer = -1;

	onMount(() => {
		changeSlide(0);
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
		const progress = document.getElementById("progress-" + currentSlide);
		if (progress) {
			progress.classList.remove("progress-anim");
			void progress.offsetWidth;
			progress.classList.add("progress-anim");
		}
	});

</script>


<div class="overflow-hidden {others.class}">

	{#each data as slide, index}
		<div class="slide
			{currentSlide == index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}"
			use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' })} onswipe={swipeHandler}>

			{@render slideSnippet(slide)}

		</div>
	{/each}

	<div class="slideshow-nav">
		{#each { length: slidesCount }, slideIndex}
			<button class="group"
				onclick="{() => changeSlide(slideIndex)}"
				tabindex="-1">
				<span class="{currentSlide % slidesCount == slideIndex ? "text-neutral-900" : "text-neutral-900/60" }">
					{String(slideIndex + 1).padStart(2, '0')}
				</span>

				<div id="progress-{slideIndex}" class="progress-line progress-anim
					{currentSlide == slideIndex ? "opacity-100" : "opacity-0"}"
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

	.slide {
		@apply flex absolute top-0 left-0 w-full h-full transition-all transition-discrete duration-[2s];

		& > :global(*) {
			@apply w-full h-full;
		}
	}

	.slideshow-nav {
		@apply absolute p-4 w-full bottom-0 left-0 flex justify-center items-center gap-4;

		& > button {
			@apply flex justify-center items-center rounded-full transition-all cursor-pointer;
			width: calc(var(--slideshow-navigation-height) - 2rem);
			height: calc(var(--slideshow-navigation-height) - 2rem);

			& > span {
				@apply transition-all duration-1000 text-xs group-hover:text-neutral-900;
			}

			& > .progress-line {
				@apply transition-all duration-1000 absolute rounded-full bg-conic from-neutral-900 to-neutral-900/20 from-100% to-100% -z-10;

				top: -2px;
				left: -2px;
				width: calc(var(--slideshow-navigation-height) - 2rem + 4px);
				height: calc(var(--slideshow-navigation-height) - 2rem + 4px);
				mask: radial-gradient(
					transparent calc((var(--slideshow-navigation-height) - 2rem) / 2),
					black calc((var(--slideshow-navigation-height) - 2rem) / 2 + 1px));
			}
		}
	}

	.progress-anim {
		animation-name: progress;
		animation-timing-function: linear;
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
