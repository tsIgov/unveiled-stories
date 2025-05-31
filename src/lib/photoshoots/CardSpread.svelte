<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import PhotoCard from "./PhotoCard.svelte";

	interface Props {
		imageLeft : Picture,
		imageCenter: Picture,
		imageRight: Picture,
		name: string,
		color: string,
		class? : string,
	}

	let { imageLeft, imageCenter, imageRight, name, color, ...others } : Props = $props();

</script>

	<div class="flex items-start justify-center aspect-[1.26] {others.class}">
		<PhotoCard
			class="absolute left-1/2 z-0 w-[48%] -translate-x-[105%] translate-y-[17%] origin-top-left -rotate-15 scale-90 saturate-50"
			image={imageLeft}
			name={name}
			{color}
		/>

		<PhotoCard
			class="z-100 w-[48%] flex-none"
			image={imageCenter}
			name={name}
			{color}
		/>

		<PhotoCard
			class="right-1/2 top-0 absolute z-0 w-[48%] translate-x-[105%] translate-y-[17%] origin-top-right rotate-15 scale-90 saturate-50"
			image={imageRight}
			name={name}
			{color}
		/>
	</div>

