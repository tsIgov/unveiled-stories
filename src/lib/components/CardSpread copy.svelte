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

	<div class="relative flex hsm:flex-col w-full h-full justify-center items-center p-16 gap-6">

		<div class="relative shrink hsm:w-0 h-full hsm:h-[calc((100vw_-_8rem)_*_1.6)]"> <!-- 8rem is the combined inline padding and 1.6 is the aspect ratio -->
			<div class="-z-10 absolute h-full aspect-[0.625] -translate-x-[105%] translate-y-[18%] origin-top-left -rotate-15 scale-90"
				style="box-shadow: rgba(100, 100, 100, 0.2) 0px 5px 25px 15px" > </div>
			<PhotoCard class="absolute z-0 h-full -translate-x-[105%] translate-y-[18%] origin-top-left -rotate-15 scale-90 saturate-[0.30]" image={image3} />
			<div class="-z-10 aspect-[0.625] absolute h-full -translate-x-[50%]"
				style="box-shadow: rgba(100, 100, 100, 0.2) 0px 0px 15px 15px" > </div>
			<PhotoCard class="absolute z-100 h-full -translate-x-[50%]" name={t({ en: "The Hunt", bg: "Ловът" })} number="XVIII" {image}	/>
			<PhotoCard class="absolute z-0 h-full translate-x-[5%] translate-y-[18%] origin-top-right rotate-15 scale-90 saturate-[0.30]" image={image2} />
			<div class="-z-10 aspect-[0.625] absolute h-full translate-x-[5%] translate-y-[18%] origin-top-right rotate-15 scale-90"
				style="box-shadow: rgba(100, 100, 100, 0.2) 0px 0px 15px 15px" > </div>
		</div>

		<div class="w-sm max-w-full flex flex-col flex-none justify-center">
			<p class="italic pb-8 text-[#ebead8] text-center">The hunt begins in silence, shadows stretching long beneath the ancient trees.</p>
			<!-- <p class="italic pb-8 text-[#ebead8]">The hunt begins in silence, shadows stretching long beneath the ancient trees. The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey. The stag moves cautiously, its hooves pressing into the damp earth, ears flicking at the distant rustle of unseen danger.</p> -->
			<button class="border border-[#928f67]">See more</button>
		</div>
	</div>
</div>

