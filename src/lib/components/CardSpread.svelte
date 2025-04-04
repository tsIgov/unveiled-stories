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

	<div class="relative flex-col flex w-full h-full justify-center items-center p-16 gap-6">

		<div class="inline-flex relative items-center flex-[1_1_0] h-0">
			<!-- <PhotoCard class="relative -left-8 translate-y-[18%] origin-top-left w-1/2 -rotate-20 scale-90 saturate-[0.30]" image={image3} /> -->
			<PhotoCard class="absolute w-full -left-8 -translate-x-[50%] translate-y-[18%] origin-top-left -rotate-20 scale-90 saturate-[0.30]" image={image3} />
			<PhotoCard class="z-100 max-h-full max-w-full" name={t({ en: "The Hunt", bg: "Ловът" })} number="XVIII" {image}	/>
			<PhotoCard class="absolute w-full left-8 translate-x-[50%] translate-y-[18%] origin-top-right rotate-20 scale-90 saturate-[0.30]" image={image2} />
			<!-- <PhotoCard class="relative left-8 translate-y-[18%] origin-top-right w-1/2 rotate-20 scale-90 saturate-[0.30]" image={image2} /> -->
		</div>

		<div class="w-sm max-w-full flex flex-col flex-none justify-center">
			<p class="italic pb-8 text-[#ebead8] text-center">The hunt begins in silence, shadows stretching long beneath the ancient trees.</p>
			<!-- <p class="italic pb-8 text-[#ebead8]">The hunt begins in silence, shadows stretching long beneath the ancient trees. The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey. The stag moves cautiously, its hooves pressing into the damp earth, ears flicking at the distant rustle of unseen danger.</p> -->
			<button class="border border-[#928f67]">See more</button>
		</div>
	</div>
</div>

