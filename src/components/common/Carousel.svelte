<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';
	import { swipe, type SwipeCustomEvent } from 'svelte-gestures';
  	import { useMediaQuery } from '$lib/utils/media-queries';


	interface Props {
		class? : string,
		data: T[],
		loop: boolean,
		expandMediaQuery?: string,
		itemSnippet: Snippet<[T]>
	}

	let { itemSnippet, data, loop, expandMediaQuery, ...others} : Props =$props();
	let expanded = useMediaQuery(expandMediaQuery);

	let currentItem = $state(0);
	let count = $derived(loop ? Math.ceil(5 / data.length) * data.length : data.length);

	function getNeighbourClasses(index: number, currentItem : number) {
		const dist = distance(index, currentItem);

		let result = "";
		if (dist == 0)
			result += "active ";
		else if (dist == 1)
			result += "neighbour ";
		else if (dist == 2)
			result += "distant ";
		else
			result += "far ";

		result += direction(index)

		return result;
	}

	function distance(a: number, b: number) {
		if (loop) {
			const d1 = Math.abs(a - b);
			const d2 = count - d1;
			return Math.min(d1, d2);
		}
		else {
			return Math.abs(a - b);
		}
	}

	function direction(index: number) {
		if (loop) {
			const dist = distance(index, currentItem);
			if (index < currentItem) {
				if (currentItem - index == dist)
					return "left";
				else
					return "right";
			}
			if (index > currentItem) {
				if (index - currentItem == dist)
					return "right";
				else
					return "left"
			}
		}
		else {
			if (index < currentItem) return "left";
			if (index > currentItem) return "right";
		}

		return "";
	}

	function changeCurrentItem(index: number) {
		if (distance(currentItem, index) == 1)
			currentItem = index;
	}

	function swipeHandler(event: SwipeCustomEvent) {
		if (event.detail.pointerType == "mouse")
			return;

		if (event.detail.direction == "left")
			currentItem++;
		else if (event.detail.direction == "right")
			currentItem--;

		if (loop) {
			if (currentItem == -1) currentItem = count - 1;
			if (currentItem == count) currentItem = 0;
		}
		else
			currentItem = Math.max(0, Math.min(count - 1, currentItem));
	}

</script>

{#if $expanded}
	<div class="list {others.class}">
		{#each data as item}
			<div class="item" >
				{@render itemSnippet(item)}
			</div>
		{/each}
	</div>
{:else}
	<div class="carousel {others.class}"
		use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' })} onswipe={swipeHandler}>

		{#each { length: count }, index}
			<button class="item {getNeighbourClasses(index, currentItem)}"
				onclick={() => {changeCurrentItem(index)}}>
				{@render itemSnippet(data[index % data.length])}
			</button>
		{/each}
	</div>
{/if}

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

	.list {
		@apply flex content-center-safe justify-center-safe gap-4 px-4;
	}

	.carousel {
		@apply grid grid-cols-5 grid-rows-1 justify-items-center-safe items-center-safe;
		@apply max-w-full max-h-full overflow-hidden;

		& > .item {
			@apply col-start-2 col-end-5 row-start-1 max-h-full;
			@apply ease-out duration-1000;
			@apply select-none;

			transition-property: --carousel-opacity-left, --carousel-opacity-right, scale, translate, filter;
			mask: linear-gradient(to right,rgba(255,255,255,var(--carousel-opacity-left)), rgba(255,255,255,var(--carousel-opacity-right)));
			scale: 1;
			filter: grayscale(0);
			--carousel-opacity-left: 1;
			--carousel-opacity-right: 1;

			&.left {
				--direction: -1;
				--carousel-opacity-left: 0;
				--carousel-opacity-right: 0.5;
			}
			&.right {
				--direction: 1;
				--carousel-opacity-left: 0.5;
				--carousel-opacity-right: 0;
			}

			&.active {
				@apply select-auto;
				translate: 0%;
			}
			&:not(.active) {
				scale: 0.85;
				filter: grayscale(0.75);

				& > :global(*) {
					@apply pointer-events-none;
				}
			}
			&.neighbour {
				@apply cursor-pointer;
				translate: calc(var(--direction) * 100%);
			}
			&.distant {
				translate: calc(var(--direction) * 200%);
				--carousel-opacity-left: 0;
				--carousel-opacity-right: 0;
			}
			&.far {
				@apply hidden;
				translate: calc(var(--direction) * 200%);
				--carousel-opacity-left: 0;
				--carousel-opacity-right: 0;
			}

			&.neighbour.left:hover {
				filter: grayscale(0);
				--carousel-opacity-left: 0.2;
				--carousel-opacity-right: 0.7;
			}

			&.neighbour.right:hover {
				filter: grayscale(0);
				--carousel-opacity-left: 0.7;
				--carousel-opacity-right: 0.2;
			}

		}
	}



</style>
