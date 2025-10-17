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

	// Padding + item gaps + max item size and glow
	let remToFit = 1.5 * 2 + (data.length - 1) * 1.5 + data.length * (20 + 2);
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
	<div class="carousel expanded">
		{#each data as item}
			<div class="item" >
				{@render itemSnippet(item, true)}
			</div>
		{/each}
	</div>
{:else}
	<div class="carousel collapsed"
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

	.carousel {
		@apply w-full overflow-hidden;

		/* card width * aspect ratio + item padding + padding  */
		@apply h-[calc(min(80svw,_20rem)_*_1.6_+_2rem_+_2rem)];
		@apply landscape-cards:h-[calc(min(80svw,_32rem)_*_0.625_+_2rem_+_2rem)];

		& > .item {
			@apply w-[80%] max-w-[22rem] landscape-cards:max-w-[34rem];
			@apply p-4;
		}

		&.expanded {
			@apply flex content-center-safe justify-center-safe items-center-safe;
		}

		&.collapsed {
			& > .item {
				@apply absolute left-1/2 top-1/2;
				@apply ease-out duration-1000;
				transition-property: --carousel-opacity-left, --carousel-opacity-right, --carousel-translate-x, scale, filter;
				mask: linear-gradient(to right,rgba(255,255,255,var(--carousel-opacity-left)), rgba(255,255,255,var(--carousel-opacity-right)));
				translate: var(--carousel-translate-x) -50%;

				& :global(.rule) { @apply transition-[scale] duration-1000 ease-out; }

				&.active {
					scale: 1;
					filter: grayscale(0);
					--carousel-translate-x: -50%;
					--carousel-opacity-left: 1;
					--carousel-opacity-right: 1;
					& :global(.rule) { @apply scale-100; }
				}

				&:not(.active) {
					scale: 0.85;
					filter: grayscale(0.75);
					& :global(*) { @apply pointer-events-none; }
					& :global(.rule.horizontal) { @apply scale-y-[1.2]; }
					& :global(.rule.vertical) { @apply scale-x-[1.2]; }
				}

				&.neighbour {
					@apply cursor-pointer;

					&.left {
						--carousel-opacity-left: 0;
						--carousel-opacity-right: 0.8;
						--carousel-translate-x: -145%;

						&:hover {
							filter: grayscale(0.5);
							--carousel-opacity-left: 0.2;
							--carousel-opacity-right: 0.9;
						}
					}
					&.right {
						--carousel-opacity-left: 0.8;
						--carousel-opacity-right: 0;
						--carousel-translate-x: 45%;

						&:hover {
							filter: grayscale(0.5);
							--carousel-opacity-left: 0.9;
							--carousel-opacity-right: 0.2;
						}
					}
				}

				&.distant,
				&.far {
					--carousel-opacity-left: 0;
					--carousel-opacity-right: 0;

					&.left { --carousel-translate-x: -245%; }
					&.right { --carousel-translate-x: 145%; }
				}
			}
		}
	}

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

	@property --carousel-translate-x{
		syntax: "<percentage>";
		initial-value: 0%;
		inherits: false;
	}

</style>
