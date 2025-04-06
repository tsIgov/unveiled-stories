<script lang="ts">
	import { t } from "$lib/utils";
	import PhotoCard from "$lib/components/PhotoCard.svelte";

	import heroimage from "$lib/assets/the-hunt-2.jpg?enhanced"
	import image from "$lib/assets/the-hunt.jpg?enhanced";
	import image2 from "$lib/assets/the-hunt-3.jpg?enhanced";
	import image3 from "$lib/assets/the-hunt-4.jpg?enhanced";
</script>




<div class="w-full h-svh overflow-hidden">









	<enhanced:img class="absolute object-cover w-full h-full saturate-[0.25] brightness-[0.25] opacity-20" src={heroimage} />

	<div class="relative grid w-full h-full justify-center items-center p-16 gap-6"
		 style="grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
		 grid-auto-flow: column;
		 grid-template-columns: minmax(auto, max-content);
		 grid-auto-columns: minmax(min-content, 1fr);">

			<PhotoCard class="h-full max-w-[53svh]" name={t({ en: "The Hunt", bg: "Ловът" })} number="XVIII" {image}	/>

		<div class="flex flex-col flex-none justify-center">
			<p class="italic pb-8 text-[#ebead8] text-center">The hunt begins in silence, shadows stretching long beneath the ancient trees.</p>
			<!-- <p class="italic pb-8 text-[#ebead8]">The hunt begins in silence, shadows stretching long beneath the ancient trees. The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey. The stag moves cautiously, its hooves pressing into the damp earth, ears flicking at the distant rustle of unseen danger.</p> -->
			<button class="border border-[#928f67]">See more</button>
		</div>
	</div>
</div>

