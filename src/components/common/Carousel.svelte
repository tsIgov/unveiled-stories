<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';
	import { swipe, type SwipeCustomEvent } from 'svelte-gestures';

	interface Props {
		class? : string,
		data: T[],
		itemSnippet: Snippet<[T]>
	}

	let { itemSnippet, data, ...others} : Props =$props();
	let currentItem = $state(0);

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


<div class="carousel {others.class}"
	use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' })} onswipe={swipeHandler}>

	{#each data as item, index}
		<button class="item {getNeighbourClasses(index, currentItem)}"
			style="translate:{(index - currentItem) * 100}%;"
			onclick={() => {changeCurrentItem(index)}}>
			{@render itemSnippet(item)}
		</button>
	{/each}

</div>

<style>
	@reference "style";

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

	.carousel {
		@apply grid grid-cols-5 grid-rows-1 justify-items-center-safe items-center-safe;
		@apply max-w-full max-h-full overflow-hidden;
	}

	.item {
		@apply col-start-2 col-end-5 row-start-1 max-h-full;
		@apply ease-out duration-1000 select-none;

		transition-property: --carousel-opacity-left, --carousel-opacity-right, scale, translate, filter;
		mask: linear-gradient(to right,rgba(255,255,255,var(--carousel-opacity-left)), rgba(255,255,255,var(--carousel-opacity-right)));
		scale: 1;
		filter: grayscale(0);
		--carousel-opacity-left: 1;
		--carousel-opacity-right: 1;
	}

	.item.inactive {
		scale: 0.85;
		filter: grayscale(0.75);
	}

	.item.prev {
		--carousel-opacity-left: 0;
		--carousel-opacity-right: 0.5;
	}

	.item.next {
		--carousel-opacity-left: 0.5;
		--carousel-opacity-right: 0;
	}

	.item.distant {
		@apply pointer-events-none;
		--carousel-opacity-left: 0;
		--carousel-opacity-right: 0;
	}

	.item.prev,
	.item.next,
	.item.active {
		cursor: pointer;
	}

	.item.active {
		@apply select-text;
	}

	.item.prev:hover {
		filter: grayscale(0);
		--carousel-opacity-left: 0.2;
		--carousel-opacity-right: 0.7;
	}

	.item.next:hover {
		filter: grayscale(0);
		--carousel-opacity-left: 0.7;
		--carousel-opacity-right: 0.2;
	}

</style>
