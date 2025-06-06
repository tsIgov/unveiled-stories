<script lang="ts" generics="T">
	import { onMount } from "svelte";
	import type { Snippet } from 'svelte';
	import { swipe, type SwipeCustomEvent } from 'svelte-gestures';

	interface Props {
		class? : string,
		data: T[],
		itemSnippet: Snippet<[T]>
	}

	let { itemSnippet, data, ...others} : Props =$props();
	let itemsCount = $derived(data.length);
	let currentItem = $state(1);

	function getNeighbourClasses(index: number, currentItem : number) {
		let result = "";
		if (index == currentItem)
			result += "active ";
		else
			result += "inactive ";

		if (index + 1 == currentItem)
			result += "prev  ";
		else if (index - 1 == currentItem)
			result += "next ";
		else if (index != currentItem)
			result += "distant ";

		return result;
	}

	function changeCurrentItem(index: number) {
		if (Math.abs(currentItem - index) == 1)
			currentItem = index;
	}

	function swipeHandler(event: SwipeCustomEvent) {
		if (event.detail.pointerType == "mouse")
			return;

		if (event.detail.direction == "left")
			currentItem = Math.min(data.length - 1, currentItem + 1);
		else if (event.detail.direction == "right")
			currentItem = Math.max(0, currentItem - 1);
	}

</script>


<div class="{others.class}"
	use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' })} onswipe={swipeHandler}>

	{#each data as item, index}
		<div class="absolute top-0 left-1/2 h-full ease-out duration-1000 select-none
		carouselItem {getNeighbourClasses(index, currentItem)}"
			style="translate:{(index - currentItem) * 100 - 50}% 0;"
			onclick={() => {changeCurrentItem(index)}}>
			{@render itemSnippet(item)}
		</div>
	{/each}

</div>

<style>
	@property --carousel-opacity-left{
		syntax: "<number>";
		initial-value: 0;
		inherits: false;
	}

	@property --carousel-opacity-right{
		syntax: "<number>";
		initial-value: 0;
		inherits: false;
	}

	.carouselItem {
		transition-property: --carousel-opacity-left, --carousel-opacity-right, scale, translate, filter;
		mask: linear-gradient(to right,rgba(255,255,255,var(--carousel-opacity-left)), rgba(255,255,255,var(--carousel-opacity-right)));
		scale: 1;
		filter: grayscale(0);
		--carousel-opacity-left: 1;
		--carousel-opacity-right: 1;
	}

	.carouselItem.inactive {
		scale: 0.85;
		filter: grayscale(0.75);
	}

	.carouselItem.prev {
		--carousel-opacity-left: 0;
		--carousel-opacity-right: 0.5;
	}

	.carouselItem.next {
		--carousel-opacity-left: 0.5;
		--carousel-opacity-right: 0;
	}

	.carouselItem.distant {
		--carousel-opacity-left: 0;
		--carousel-opacity-right: 0;
	}

	.carouselItem.prev,
	.carouselItem.next,
	.carouselItem.active {
		cursor: pointer;
	}

	.carouselItem.prev:hover {
		filter: grayscale(0);
		--carousel-opacity-left: 0.2;
		--carousel-opacity-right: 0.7;
	}

	.carouselItem.next:hover {
		filter: grayscale(0);
		--carousel-opacity-left: 0.7;
		--carousel-opacity-right: 0.2;
	}
</style>
