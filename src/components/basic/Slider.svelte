<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		loop?: boolean,
		itemsCount : number,
		expandQuery?: string | undefined,
		class?: ClassValue,
		onchanged? : (index : number) => void,
		autoChangeTime?: number
		itemSnippet: Snippet<[index : number, distance: number]>
	}

	let { itemSnippet, itemsCount, loop = false, expandQuery = undefined, onchanged, autoChangeTime = 0, ...rest} : Props =$props();


	let initialized = $state(false);
	let currentItem = $state(0);
	let running = $state(false);

	let observer : IntersectionObserver;
	let track: HTMLElement;
	let prevSpacer : HTMLElement;
	let nextSpacer : HTMLElement;

	export function changeItem(index : number) {
		currentItem = index;
		resetTimer();
	}

	export function pause() {
		if (!running) return;
		clearTimer();
	}

	export function unpause() {
		if (running) return;
		resetTimer();
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
		resetTimer();

		return () => {
			clearTimer();
			observer.disconnect();}
	});

	$effect(() => {
		onchanged?.(currentItem);
	});

	let timer = -1;
	function clearTimer() {
		if (!autoChangeTime) return;
		clearInterval(timer);
		running = false;
	}
	function resetTimer() {
		if (!autoChangeTime) return;

		clearInterval(timer);
		timer = setInterval(() => {
			changeItem((currentItem + 1) % itemsCount);
		}, autoChangeTime);
		running = true;
	}


	function resetScroll(width : number = track.getBoundingClientRect().width) {
		track.scrollTo({
			left: width + 160,
			behavior: "instant"
		});
	}

	function intersected(entry : IntersectionObserverEntry) {
		if (!initialized) return;

		if (entry.target == prevSpacer && entry.isIntersecting) {
			if (entry.intersectionRatio == 1)
				resetScroll();
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
				resetScroll();
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

		{#if autoChangeTime}
			<div class="navigation">
				{#each { length: itemsCount }, itemIndex}
				<button
						class:active={currentItem == itemIndex}
						onclick="{() => changeItem(itemIndex)}"
						tabindex="-1">
						<span>{String(itemIndex + 1).padStart(2, '0')}</span>

						<div
							id="progress-line-{itemIndex}"
							class="progress-line"
							class:running={itemIndex == currentItem && running}
							style="animation-duration: {autoChangeTime}ms">
						</div>

					</button>
				{/each}
			</div>
		{/if}
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
		@apply h-px shrink-0;
		@apply snap-always snap-start;
		width: 160px;

		&.current { @apply w-full ; }
	}

	.item-wrapper {
		@apply sticky left-0 w-full h-full shrink-0 overflow-x-hidden;

		& > :global(*) { @apply absolute; }
	}

	.navigation {
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
