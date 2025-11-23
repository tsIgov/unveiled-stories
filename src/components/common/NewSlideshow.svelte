<script lang="ts" generics="T">
	import { type Snippet, onMount } from "svelte";
	import { Slider } from "components/basic"

	interface Props {
		data: T[],
		slideSnippet: Snippet<[T, number]>
		timeout: number,
		onchanged? : (index : number) => void
	}

	let { data, slideSnippet, timeout, onchanged } : Props =$props();
	let slidesCount = $derived(data.length);

	let slider : Slider;

	export function pause() { slider.pause(); }
	export function unpause() {slider.unpause; }

</script>

	{#snippet sliderSnippet(index : number, distance : number )}
		<div class="slide" class:active={distance == 0}>
			{@render slideSnippet(data[index], index)}
		</div>
	{/snippet}

<Slider
	bind:this={slider}
	class="slideshow"
	itemsCount={slidesCount}
	loop={true}
	itemSnippet={sliderSnippet}
	autoChangeTime={timeout}
	{onchanged}
/>

<style>
	@reference "style";

	:global(:root) {
		--slideshow-navigation-height: 3.5rem;
	}

	.slide {
		@apply flex absolute top-0 left-0 w-full h-full;
		@apply transition-opacity ease-in-out duration-1000;
		@apply opacity-0 pointer-events-none;

		&.active {
			@apply opacity-100 pointer-events-auto;
		}

		& > :global(*) {
			@apply w-full h-full;
		}
	}

</style>
