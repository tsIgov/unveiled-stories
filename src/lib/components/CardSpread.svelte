<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import PhotoCard from "$lib/components/PhotoCard.svelte";

	let props :
	{
		imageLeft : Picture,
		imageCenter: Picture,
		imageRight: Picture,
		name: string,
		class? : string | undefined,
	} = $props();

</script>

	<div class="flex items-start justify-center aspect-[1.26] {props.class}">
		<PhotoCard
			class="absolute left-1/2 z-0 w-[48%] -translate-x-[105%] translate-y-[17%] origin-top-left -rotate-15 scale-90 saturate-50"
			image={props.imageLeft}
			name={props.name}
		/>

		<PhotoCard
			class="z-100 w-[48%] flex-none"
			image={props.imageCenter}
			name={props.name}
		/>

		<PhotoCard
			class="right-1/2 top-0 absolute z-0 w-[48%] translate-x-[105%] translate-y-[17%] origin-top-right rotate-15 scale-90 saturate-50"
			image={props.imageRight}
			name={props.name}
		/>
	</div>

