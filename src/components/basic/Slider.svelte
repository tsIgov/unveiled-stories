<script lang="ts">
	import { useMediaQuery } from "$lib/utils/media-queries";
	import { onMount, type Snippet } from "svelte";
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		loop?: boolean,
		itemsCount : number,
		expandQuery?: string | undefined,
		class?: ClassValue,
		itemSnippet: Snippet<[index : number, distance: number]>
	}

	let { itemSnippet, itemsCount, loop = false, expandQuery = undefined, ...rest} : Props =$props();


	let initialized = $state(false);
	let currentItem = $state(0);

	let observer : IntersectionObserver;
	let track: HTMLElement;
	let prevSpacer : HTMLElement;
	let nextSpacer : HTMLElement;

	export function changeItem(index : number) {
		currentItem = index;
	}

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

		return () => {
			observer.disconnect();}
	});


	function resetScroll(width : number = track.getBoundingClientRect().width) {
		track.scrollTo({
			left: width * 2,
			behavior: "instant"
		});
	}

	function intersected(entry : IntersectionObserverEntry) {
		if (!initialized) return;

		if (entry.target == prevSpacer && entry.isIntersecting) {
			if (entry.intersectionRatio == 1)
				resetScroll(entry.boundingClientRect.width);
			else {
				if (loop)
					currentItem = (currentItem - 1 + itemsCount) % itemsCount;
				else
					currentItem = Math.max(currentItem - 1, 0);
			}

			return;
		}

		if (entry.target == nextSpacer && entry.isIntersecting) {
			if (entry.intersectionRatio == 1)
				resetScroll(entry.boundingClientRect.width);
			else {
				if (loop)
					currentItem = (currentItem + 1) % itemsCount;
				else
					currentItem = Math.min(currentItem + 1, itemsCount - 1);
			}
			return;
		}
	}

	function getDistance(index: number) : number {
		if (!loop)
			return index - currentItem;

		if (index == currentItem) return 0;

		const leftDistance = (currentItem - index + itemsCount) % itemsCount;
		const rightDistance = (index - currentItem + itemsCount) % itemsCount;

		if (leftDistance < rightDistance) return -leftDistance;
		return rightDistance;
	}

</script>

<div bind:this={track} class="slider {rest.class}" class:initialized={initialized}>

	<div class="item-wrapper">
		{#each { length: itemsCount }, index}
			{@render itemSnippet(index, getDistance(index))}
		{/each}
	</div>

	<div bind:this={prevSpacer} class="spacer prev"></div>
	<div class="spacer current"></div>
	<div bind:this={nextSpacer} class="spacer next"></div>

</div>

<style>
	@reference "style";

	.slider {
		@apply flex;
		@apply overflow-x-scroll;
		@apply snap-x snap-mandatory scroll-auto;

		scrollbar-width: none;
		-ms-overflow-style: none;

		&:not(.initialized) {
			& > .spacer.prev { @apply snap-none; }
		}
	}

	.spacer {
		@apply w-full h-px shrink-0;
		@apply snap-always snap-start;
	}

	.item-wrapper {
		@apply sticky left-0 w-full h-full shrink-0 overflow-x-hidden;

		& > :global(*) { @apply absolute; }
	}

</style>
