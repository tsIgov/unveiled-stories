<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';
	import { swipe, type SwipeCustomEvent } from 'svelte-gestures';
  	import { useMediaQuery } from '$lib/utils/media-queries';

	interface Props {
		data: T[],
		loop?: boolean,
		expandIfFit?: boolean,
		itemSnippet: Snippet<[item: T, active: boolean]>
	}

	let { itemSnippet, data, loop = false, expandIfFit = false} : Props =$props();

	// Padding + item gaps + max item size
	let remToFit = 1.5 * 2 + (data.length - 1) * 1.5 + data.length * 20;
	let mediaQuery = expandIfFit ? `(width >= ${remToFit}rem)` : undefined;
	let expanded = useMediaQuery(mediaQuery);

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

	function isActive(index: number) {
		const dist = distance(index, currentItem);
		return dist == 0;
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

	function next() {
		currentItem++;

		if (loop) {
			if (currentItem == -1) currentItem = count - 1;
			if (currentItem == count) currentItem = 0;
		}
		else
			currentItem = Math.max(0, Math.min(count - 1, currentItem));
	}

	function prev() {
		currentItem--;

		if (loop) {
			if (currentItem == -1) currentItem = count - 1;
			if (currentItem == count) currentItem = 0;
		}
		else
			currentItem = Math.max(0, Math.min(count - 1, currentItem));
	}

	function swipeHandler(event: SwipeCustomEvent) {
		if (event.detail.pointerType == "mouse")
			return;

		if (event.detail.direction == "left")
			next();
		else if (event.detail.direction == "right")
			prev();
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key == "ArrowLeft")
			prev();
		if (event.key == "ArrowRight")
			next();
	}

</script>

{#if $expanded}
	<div class="carousel list">
		{#each data as item}
			<div class="item" >
				{@render itemSnippet(item, true)}
			</div>
		{/each}
	</div>
{:else}
	<div class="carousel"
		tabindex="0"
		onkeydown={handleKeyDown}
		role="tablist"
		use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' })} onswipe={swipeHandler}>

		{#each { length: count }, index}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="item {getNeighbourClasses(index, currentItem)}" onclick={() => {changeCurrentItem(index)}}>
					{@render itemSnippet(data[index % data.length], isActive(index))}
			</div>
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

	.carousel.list {
		@apply flex content-center-safe justify-center-safe gap-6;
	}

	.carousel:not(.list) {
		@apply grid grid-cols-5 grid-rows-1 justify-items-center-safe items-center-safe;
		@apply max-w-full max-h-full;
		@apply overflow-hidden;

		& > .item {
			@apply p-4;
			@apply col-start-2 col-end-5 row-start-1 max-h-full;
			@apply ease-out duration-1000;

			transition-property: --carousel-opacity-left, --carousel-opacity-right, scale, translate, filter;
			mask: linear-gradient(to right,rgba(255,255,255,var(--carousel-opacity-left)), rgba(255,255,255,var(--carousel-opacity-right)));
			scale: 1;
			filter: grayscale(0);
			--carousel-opacity-left: 1;
			--carousel-opacity-right: 1;

			&.left {
				--direction: -1;
				--carousel-opacity-left: 0;
				--carousel-opacity-right: 0.8;
			}
			&.right {
				--direction: 1;
				--carousel-opacity-left: 0.8;
				--carousel-opacity-right: 0;
			}

			& :global(.rule) {
				@apply transition-all duration-1000;
			}

			&.active {
				translate: 0%;

				& :global(.rule) {
					@apply scale-100;
				}
			}
			&:not(.active) {
				scale: 0.85;
				filter: grayscale(0.75);

				& :global(*) {
					@apply pointer-events-none;
				}

				& :global(.rule.horizontal) {
					@apply scale-y-[1.2];
				}
				& :global(.rule.vertical) {
					@apply scale-x-[1.2];
				}
			}
			&.neighbour {
				translate: calc(var(--direction) * (100% - 1rem));
				@apply cursor-pointer;
			}
			&.distant {
				translate: calc(var(--direction) * (100% - 1rem) * 2);
				--carousel-opacity-left: 0;
				--carousel-opacity-right: 0;
			}
			&.far {
				@apply invisible;
				translate: calc(var(--direction) * (100% - 1rem) * 2);
				--carousel-opacity-left: 0;
				--carousel-opacity-right: 0;
			}

			&.neighbour.left:hover {
				filter: grayscale(0.5);
				--carousel-opacity-left: 0.2;
				--carousel-opacity-right: 0.9;
			}

			&.neighbour.right:hover {
				filter: grayscale(0.5);
				--carousel-opacity-left: 0.9;
				--carousel-opacity-right: 0.2;
			}

		}
	}

</style>
