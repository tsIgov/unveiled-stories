<script lang="ts" generics="T">
	import { type Snippet } from "svelte";
	import { Slider } from "components/basic"
	import { useMediaQuery } from "$lib/utils/media-queries";

	interface Props {
		data: T[],
		loop?: boolean,
		expandIfFit?: boolean,
		itemSnippet: Snippet<[item: T, spotlight: boolean]>
	}

	let slider : Slider | undefined = $state(undefined);

	let { itemSnippet, data, loop = false, expandIfFit = false} : Props =$props();
	let itemsCount = $derived(data.length);

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

	function getProximityClasses(distance: number) {
		if (distance < -1) return "far left";
		if (distance == -1) return "neighbour left";
		if (distance == 0) return "current";
		if (distance == 1) return "neighbour right";
		return "far right";
	}

</script>

{#snippet sliderSnippet(index : number, distance : number )}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class={`item ${getProximityClasses(distance)}`} onclick={() => { if (Math.abs(distance) < 2) slider?.changeItem(index); }}>
		{@render itemSnippet(data[index], distance == 0)}
	</div>
{/snippet}

{#if $expanded}
	<div class="carousel expanded">
		{#each data as item, index}
			{@render itemSnippet(item, true)}
		{/each}
	</div>
{:else}
	<Slider bind:this={slider} class="carousel" {itemsCount} {loop} itemSnippet={sliderSnippet} />
{/if}

<style>
	@reference "style";

	.carousel.expanded {
		@apply flex gap-6;
		@apply justify-center-safe items-center-safe content-center-safe;
	}

	:global(.carousel.slider) {
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

		@apply w-full;

		@apply h-(--max-carousel-height-portrait);
		@apply landscape-cards:h-(--max-carousel-height-landscape);

		scrollbar-width: none;
		-ms-overflow-style: none;
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
			& > :global(*) { @apply pointer-events-none; }
		}

		&.neighhbour {
			@apply cursor-pointer;
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
