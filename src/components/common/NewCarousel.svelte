<script lang="ts" generics="T">
	import { onMount, type Snippet } from "svelte";

	interface Props {
		data: T[],
		loop?: boolean,
		expandIfFit?: boolean,
		itemSnippet: Snippet<[item: T, active: boolean]>
	}

	let { itemSnippet, data, loop = false, expandIfFit = false} : Props =$props();

	let scroller : HTMLElement;
	let items: HTMLElement[] = [];

	function onclick(index : number) {
		const item = items[index];

		const rect = scroller.getBoundingClientRect();
		const scrollerCenter = rect.width / 2;

		const itemRect = item.getBoundingClientRect();
		const itemCenter = itemRect.left + itemRect.width / 2;

		const delta = itemCenter - (rect.left + scrollerCenter);

		// Smoothly scroll so this item reaches the center
		scroller.scrollBy({
			left: delta,
		});

		// Apply spotlight immediately so it feels responsive
		// updateSpotlight();
	}

	onMount(() => {
		updateSpotlight();
		return () => { };
	});

	function updateSpotlight() {
		const rect = scroller.getBoundingClientRect();
		const center = rect.left + rect.width / 2;

		items.forEach(item => {
			const box = item.getBoundingClientRect();
			const itemCenter = box.left + box.width / 2;

			const distance = Math.abs(center - itemCenter);
			const maxDist = rect.width / 2;

			// Normalize distance 0→1
			const t = Math.min(distance / maxDist, 1);

			// Spotlight: center item = scale 1, far items shrink to 0.7
			const scale = 1 - t * 0.3;
			const opacity = 1 - t * 0.6;

			// (item as HTMLElement).style.transform = `scale(${scale})`;
			// (item as HTMLElement).style.opacity = opacity.toString();
		});
	}

	function checkLoop() {
		// const left = scroller.scrollLeft;
		// const itemWidth = items[0].getBoundingClientRect().width + 32; // item + gap
		// const originalCount = data.length;
		// const startOffset = itemWidth * originalCount;

		// if (left < startOffset - itemWidth * originalCount) {
		// 	scroller.scrollLeft = left + itemWidth * originalCount;
		// }
		// else if (left > startOffset + itemWidth * originalCount) {
		// 	scroller.scrollLeft = left - itemWidth * originalCount;
		// }
	}
</script>

<svelte:window onresize={updateSpotlight} />

<div class="carousel" bind:this={scroller} onscroll={() => { checkLoop(); updateSpotlight();}}>

	{#each data as item, index}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="item" bind:this={items[index]} onclick={() => onclick(index)}>
			{@render itemSnippet(item, true)}
		</div>
	{/each}

	<!-- {#each data as item, index}
		<div class="item" bind:this={items[index + data.length]} onclick={() => onclick(index + data.length)}>
			{@render itemSnippet(item, true)}
		</div>
	{/each}

	{#each data as item, index}
		<div class="item" bind:this={items[index + 2 * data.length]} onclick={() => onclick(index + 2 * data.length)}>
			{@render itemSnippet(item, true)}
		</div>
	{/each} -->

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

		@apply w-full;
		@apply h-[var(--max-carousel-height-portrait)];
		@apply landscape-cards:h-[var(--max-carousel-height-landscape)];

		display: flex;
		gap: 2rem;

		overflow-x: scroll;
		scrollbar-width: none;
		scroll-behavior: smooth;

		-ms-overflow-style: none;


		scroll-snap-type: x mandatory;


		mask-image: linear-gradient(
			to right,
			transparent,
			transparent calc(50% - var(--max-item-width-portrait) * 3 / 2 - 2rem),
			black calc(50% - var(--max-item-width-portrait) / 2),
			black calc(50% + var(--max-item-width-portrait) / 2),
			transparent calc(50% + var(--max-item-width-portrait) * 3 / 2 - 2rem),
			transparent);

		padding-left: calc(50% - var(--max-item-width-portrait) / 2);
		padding-right: calc(50% - var(--max-item-width-portrait) / 2);

	}

	.carousel::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Edge */
	}

	.item {
		@apply w-[80%];
		@apply max-w-[var(--max-item-width-portrait)];
		@apply landscape-cards:max-w-[var(--max-item-width-landscape)];

		scroll-snap-align: center;
		scroll-snap-stop: always;

		flex-shrink: 0;

		display: flex;
		align-items: center;
		justify-content: center;
		scroll-snap-align: center;

		/* transition spotlight smoothly */
		/* transition: transform 0.25s ease, opacity 0.25s ease; */
	}

</style>
