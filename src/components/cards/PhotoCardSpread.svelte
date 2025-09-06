<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { PhotoCard } from "components/cards";

	interface Props {
		imageLeft : Picture,
		imageCenter: Picture,
		imageRight: Picture,
		name: string,
		color: string,
	}

	let { imageLeft, imageCenter, imageRight, name, color } : Props = $props();

</script>

<div class="photo-card-spread">
	<PhotoCard
		image={imageLeft}
		name={name}
		{color}
	/>

	<PhotoCard
		image={imageCenter}
		name={name}
		{color}
	/>

	<PhotoCard
		image={imageRight}
		name={name}
		{color}
	/>
</div>

<style>
	@reference "style";

	.photo-card-spread {
		@apply flex items-start justify-center aspect-spread;

		& > :global(.photo-card):nth-child(1) {
			@apply absolute left-1/2 z-0 w-[48%];
			@apply -translate-x-[105%] translate-y-[17%] origin-top-left -rotate-15 scale-90;
			@apply saturate-50;
		}

		& > :global(.photo-card):nth-child(2) {
			@apply z-100 w-[48%] flex-none;
		}

		& > :global(.photo-card):nth-child(3) {
			@apply right-1/2 top-0 absolute z-0 w-[48%];
			@apply translate-x-[105%] translate-y-[17%] origin-top-right rotate-15 scale-90;
			@apply saturate-50;
		}
	}
</style>
