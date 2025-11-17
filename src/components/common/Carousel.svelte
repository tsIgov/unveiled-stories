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

	let scroller : HTMLElement;
	let items: HTMLElement[] = $state([]);
	let spotlightIndex = $state(0);

	let mediaQuery = getExpandMediaQuery();
	let expanded = useMediaQuery(mediaQuery);

	function getExpandMediaQuery() {
		if (!expandIfFit) return undefined;

		// Padding + item gaps + max item size
		const remToFitLandscape = 1.5 * 2 + (data.length - 1) * 1.5 + data.length * 34;
		const remToFitPortrait = 1.5 * 2 + (data.length - 1) * 1.5 + data.length * 22;

		const landscapeMediaQuery = `(height < 40rem) and (orientation: landscape) and (width >= ${remToFitLandscape * 18}px)`;
		const portraitMediaQuery = `((height >= 40rem) or (orientation: portrait)) and (width >= ${remToFitPortrait * 18}px)`;

		const mediaQuery = `(${landscapeMediaQuery}) or (${portraitMediaQuery})`;

		return mediaQuery;
	}

	function onclick(index : number) {

		if (index == spotlightIndex) return;

		const item = items[index];
		const rect = scroller.getBoundingClientRect();
		const scrollerCenter = rect.width / 2;

		const itemRect = item.getBoundingClientRect();
		const itemCenter = itemRect.left + itemRect.width / 2;

		const delta = itemCenter - (rect.left + scrollerCenter);

		scroller.scrollBy({
			left: delta,
			behavior: "smooth"
		});
	}

	onMount(() => updateSpotlight());

	$effect(() => {
		if ($expanded)
			for (let i = 0; i < items.length; i++)
				items[i].style = "";
		else
			scroller.scrollBy({left: 0});
	});

	function updateSpotlight() {
		if ($expanded) return;

		const rect = scroller.getBoundingClientRect();
		const center = rect.left + rect.width / 2;
		let itemWidth;

		for (let i = 0; i < items.length; i++) {
			const item = items[i];

			const box = item.getBoundingClientRect();
			itemWidth = box.width;
			const itemCenter = box.left + box.width / 2;

			const distance = Math.abs(center - itemCenter);
			const maxDist = box.width;

			// Normalize distance 0→1
			const t = Math.min(distance / maxDist, 1);

			const scale = 1 - t * 0.15;
			const greyscale = t * 0.75;

			item.style.transform = `scale(${scale})`;
			item.style.filter = `grayscale(${greyscale})`;

			if (distance < 1)
				spotlightIndex = i;
		}

		scroller.style = `--item-width: ${itemWidth}px;`;

		if (loop)
			if (spotlightIndex < data.length || spotlightIndex >= data.length * 2) {
				const targetIndex = spotlightIndex % data.length + data.length;
				const newTarget = items[targetIndex];
				const box = newTarget.getBoundingClientRect();
				const itemCenter = box.left + box.width / 2;
				const delta = itemCenter - (rect.left + center);
				const newOffset = scroller.scrollLeft + delta;

				newTarget.style.transform = `scale(1)`;
				newTarget.style.filter = `grayscale(0)`;

				scroller.scrollTo({
					left: newOffset,
					behavior: "instant"
				});
			}
	}
</script>

<svelte:window onresize={updateSpotlight} />


<div class="carousel" class:expanded={$expanded}
	bind:this={scroller}
	onscroll={updateSpotlight}>

	<div class="spacer"></div>

	{#each data as item, index}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="item"
			class:spotlight={spotlightIndex == index || $expanded}
			bind:this={items[index]}
			onclick={() => onclick(index)}>

				{@render itemSnippet(item, spotlightIndex == index)}

		</div>
	{/each}

	{#if loop}
		{#each data as item, index}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="item" bind:this={items[index + data.length]} onclick={() => onclick(index + data.length)}>
				{@render itemSnippet(item, false)}
			</div>
		{/each}

		{#each data as item, index}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="item" bind:this={items[index + 2 * data.length]} onclick={() => onclick(index + 2 * data.length)}>
				{@render itemSnippet(item, false)}
			</div>
		{/each}
	{/if}


	<div class="spacer"></div>

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

		@apply w-full flex;

		overflow-x: scroll;
		scrollbar-width: none;
		scroll-behavior: smooth;
		scroll-snap-type: x mandatory;
		-ms-overflow-style: none;

		scroll-snap-type: x mandatory;

		mask-image: linear-gradient(
			to right,
			transparent,
			transparent calc(50% - var(--item-width) * 3 / 2),
			black calc(50% - var(--item-width) / 2),
			black calc(50% + var(--item-width) / 2),
			transparent calc(50% + var(--item-width) * 3 / 2),
			transparent
		);

		&::-webkit-scrollbar { display: none;}
	}

	.expanded {
		@apply gap-6;
		@apply justify-center-safe items-center-safe content-center-safe;

		& > .spacer {
			@apply hidden;
		}
	}
	.expanded > .spacer { display: none;}
	.spacer {
		@apply w-1/2 shrink-0;
	}

	.item {
		@apply w-[80%] shrink-0 grow-0;
		@apply max-w-[var(--max-item-width-portrait)];
		@apply landscape-cards:max-w-[var(--max-item-width-landscape)];

		scroll-snap-align: center;
		scroll-snap-stop: always;

		@apply flex items-center justify-center;

		&:not(.spotlight) {
			@apply cursor-pointer;
			& > :global(*) {
				@apply pointer-events-none;
				@apply select-none;
			}
		}
	}

</style>
