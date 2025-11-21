<script lang="ts" generics="T">
	import { useMediaQuery } from "$lib/utils/media-queries";
	import { onMount, type Snippet } from "svelte";

	interface Props {
		data: T[],
		loop?: boolean,
		expandIfFit?: boolean,
		itemSnippet: Snippet<[item: T, spotlight: boolean]>
	}

	let { itemSnippet, data, loop = false, expandIfFit = false} : Props =$props();
	let itemsCount = $derived(data.length);


	let initialized = $state(false);
	let currentItem = $state(0);

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

		return () => {
			observer.disconnect();}
	});


	function resetScroll(width : number = track.getBoundingClientRect().width) {
		track.scrollTo({
			left: width * 2,
			behavior: "instant"
		});
	}


	function changeItem(index: number) {
		currentItem = index;
	}

	function intersected(entry : IntersectionObserverEntry) {
		if (!initialized) return;

		if (entry.target == prevSpacer && entry.isIntersecting) {
			if (entry.intersectionRatio == 1)
				resetScroll(entry.boundingClientRect.width);
			else {
				currentItem = (currentItem - 1 + data.length) % itemsCount;
			}

			return;
		}

		if (entry.target == nextSpacer && entry.isIntersecting) {
			if (entry.intersectionRatio == 1)
				resetScroll(entry.boundingClientRect.width);
			else {
				currentItem = (currentItem + 1) % itemsCount;
			}
			return;
		}
	}

	function getProximityClasses(index: number) {
		if (index == currentItem) return "current";

		if (loop) {

			const next = (currentItem + 1) % itemsCount;
			if (index == next) return "neighbour right";

			const prev = (currentItem - 1 + itemsCount) % itemsCount;
			if (index == prev) return "neighbour left";

			const leftDistance = (currentItem - index + itemsCount) % itemsCount;
			const rightDistance = (index - currentItem + itemsCount) % itemsCount;

			if (leftDistance < rightDistance) return "far left";
			return "far right";
		}
		else {
			if (index == currentItem + 1) return "neighbour right";
			if (index == currentItem - 1) return "neighbour left";
			if (index < currentItem) return "far left";
			return "far right";
		}
	}

</script>

<div bind:this={track} class="carousel" class:initialized={initialized}>

	<div class="item-wrapper">
		{#each data as item, index}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class={`item ${getProximityClasses(index)}`} onclick={() => currentItem = index}>
				{@render itemSnippet(item, currentItem == index)}
			</div>
		{/each}
	</div>

	<div bind:this={prevSpacer} class="spacer prev"></div>
	<div class="spacer current"></div>
	<div bind:this={nextSpacer} class="spacer next"></div>

</div>

<style>
	@reference "style";

	.carousel {
		--max-item-height: calc(100svh - 2rem - var(--navbar-height));
		--max-item-width-portrait: calc(min(22rem, var(--max-item-height) * var(--aspect-card)));
		--max-item-width-landscape: calc(min(34rem, var(--max-item-height) / var(--aspect-card)));

		/* card width * aspect ratio + item padding and padding  */
		--max-carousel-height-portrait: calc(min(80svw, var(--max-item-width-portrait)) / var(--aspect-card) + 4rem);
		--max-carousel-height-landscape: calc(min(80svw, var(--max-item-width-landscape)) * var(--aspect-card) + 4rem);

		--item-width:var(--max-item-width-portrait);
		@apply landscape-cards:[--item-width:var(--max-item-width-landscape)];

		mask-image: linear-gradient(
			to right,
			transparent,
			transparent calc(50% - var(--item-width) * 3 / 2),
			black calc(50% - var(--item-width) / 2),
			black calc(50% + var(--item-width) / 2),
			transparent calc(50% + var(--item-width) * 3 / 2),
			transparent
		);

		@apply flex;
		@apply overflow-x-scroll;
		@apply snap-x snap-mandatory scroll-auto;

		@apply w-full;
		@apply h-(--max-carousel-height-portrait);
		@apply landscape-cards:h-(--max-carousel-height-landscape);

		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.carousel:not(.initialized) {
		& > .spacer.prev { @apply snap-none; }
		& > .item-wrapper > .item:first-child { @apply opacity-100 visible; }
	}

	.spacer {
		@apply w-full h-px shrink-0;
		@apply snap-always snap-start;
	}

	.item-wrapper {
		@apply sticky left-0 w-full h-full shrink-0 overflow-x-hidden;
	}

	.item {
		@apply absolute;
		@apply w-[80%];
		@apply max-w-(--max-item-width-portrait);
		@apply landscape-cards:max-w-(--max-item-width-landscape);

		@apply transition-all ease-in-out duration-500;

		& > :global(*) {
			@apply w-full h-full;
		}

		@apply top-1/2 left-1/2 -translate-y-1/2;

		&.current {
			@apply -translate-x-1/2;
			@apply opacity-100 scale-100 grayscale-0;
			--mask-color: black;
		}

		&:not(.current) {
			@apply scale-[0.85] grayscale-75;

			@apply cursor-pointer;
			& > :global(*) { @apply pointer-events-none; }
		}

		&.neighbour.left {
			@apply -translate-x-3/2;
		}

		&.neighbour.right {
			@apply translate-x-1/2;
		}

		&.far.left {
			@apply -translate-x-5/2 opacity-0;
		}

		&.far.right {
			@apply translate-x-3/2 opacity-0;
		}
	}

</style>
