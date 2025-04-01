<script lang="ts">
	import { t } from "$lib/utils";
	import PhotoCard from "$lib/components/PhotoCard.svelte";

	import heroimage from "$lib/assets/the-hunt-2.jpg?enhanced"
	import image from "$lib/assets/the-hunt.jpg?enhanced";
</script>

<div class="w-full h-svh">
	<enhanced:img class="absolute object-cover w-full h-full saturate-[0.25] brightness-[0.25] opacity-20" src={heroimage} />
	<div class="w-full h-full flex flex-none justify-center items-center">
		<PhotoCard class="translate-x-1/2 -rotate-20 scale-90 saturate-[0.25]" number="XVIII" {image} />
		<PhotoCard class="z-100" name={t({ en: "The Hunt", bg: "Ловът" })} number="XVIII" {image}	/>
		<PhotoCard class="-translate-x-1/2 rotate-20 scale-90 saturate-[0.25]" number="XVIII" {image} />
	</div>
</div>

