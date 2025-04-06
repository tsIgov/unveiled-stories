<script lang="ts">
	import { t } from "$lib/utils";
	import PhotoCard from "$lib/components/PhotoCard.svelte";

	import image from "$lib/assets/the-hunt.jpg?enhanced";
	import image2 from "$lib/assets/the-hunt-3.jpg?enhanced";
	import image3 from "$lib/assets/the-hunt-4.jpg?enhanced";


	let { ...others } :
	{
		class? : string | undefined,
	} = $props();
</script>




	<div class="relative items-start justify-center flex aspect-[1.26] {others.class}">
		<PhotoCard class="left-1/2 absolute z-0 w-[48%] -translate-x-[105%] translate-y-[17%]  origin-top-left -rotate-15 scale-90 saturate-[0.30]" image={image3} />
		<PhotoCard class="relative z-100 w-[48%] flex-none" name={t({ en: "The Hunt", bg: "Ловът" })} number="XVIII" {image}	/>
		<PhotoCard class="right-1/2 top-0 absolute z-0 w-[48%] translate-x-[105%] translate-y-[17%] origin-top-right rotate-15 scale-90 saturate-[0.30]" image={image2} />
	</div>

