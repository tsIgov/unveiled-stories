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


<div class="w-full h-svh overflow-hidden {others.class}">

	{#each data as slide, index}
		<div class="flex absolute top-0 left-0 w-full h-full
			*:w-full *:h-full
			transition-all transition-discrete duration-[2s]
			{currentSlide == index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
			"
			use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60 })} onswipe={swipeHandler} >

			{@render slideSnippet(slide)}

		</div>
	{/each}

	<div class="absolute p-4 w-full bottom-0 left-0 flex justify-center items-center gap-4">
		{#each { length: slidesCount }, slideIndex}
			<button class= "group flex justify-center items-center rounded-full transition-all w-[24px] h-[24px] cursor-pointer"
				onclick="{() => changeSlide(slideIndex)}"
				tabindex="-1">
				<span class="transition-all duration-1000 text-xs {currentSlide % slidesCount == slideIndex ? "text-base" : "text-base/60" } group-hover:text-base">
					{String(slideIndex + 1).padStart(2, '0')}
				</span>

				<div id="progress-{slideIndex}" class="transition-all duration-1000 absolute top-[-2px] left-[-2px] w-[28px] h-[28px] rounded-full bg-conic from-base to-base/20 from-100% to-100% progress-anim -z-10
					{currentSlide % 2 == slideIndex ? "opacity-100" : "opacity-0"}"
					style="mask: radial-gradient(14px at center, transparent 12px, black 13px);
						animation-duration: {timeout}ms">
				</div>

			</button>
		{/each}
	</div>

</div>


<style>
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
