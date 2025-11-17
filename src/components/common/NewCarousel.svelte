<script lang="ts" generics="T">
	import { Card } from "components/cards";
	import { onMount, type Snippet } from "svelte";

	interface Props {
		data: T[],
		loop?: boolean,
		expandIfFit?: boolean,
		itemSnippet: Snippet<[item: T, active: boolean]>
	}

	let { itemSnippet, data, loop = false, expandIfFit = false} : Props =$props();

	let scroller : HTMLElement;
	let items: HTMLElement[] = $state([]);

	function onclick(index : number) {
		const item = items[index];

		if (item.classList.contains("spotlight"))
			return;

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
			const maxDist = box.width;

			// Normalize distance 0→1
			const t = Math.min(distance / maxDist, 1);

			// Spotlight: center item = scale 1, far items shrink to 0.7
			const scale = 1 - t * 0.15;
			const greyscale = t * 0.75;

			item.style.transform = `scale(${scale})`;
			item.style.filter = `grayscale(${greyscale})`;

			if (distance < 10)
				item.classList.add("spotlight");
			else
				item.classList.remove("spotlight");
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

	<div class="spacer"></div>

	{#each data as item, index}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="item" bind:this={items[index]} onclick={() => onclick(index)}>
			<Card>
				{@render itemSnippet(item, true)}
			</Card>
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
	}

	.carousel::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Edge */
	}

	.spacer {
		width: 50%;
		flex-shrink: 0;
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

		transition: transform 0.2s ease-out;

		& > :global(.card) {
			@apply w-full;
		}
	}

	.item.spotlight {

	}

	.item:not(.item.spotlight) {
		@apply cursor-pointer;
		& > :global(*) {
			@apply pointer-events-none;
		}
	}

</style>
