<script lang="ts">
	import CardSpread from "$lib/components/CardSpread.svelte";
	import heroimage from "$lib/assets/glow.jpg?enhanced"

</script>


<div class="w-full h-svh overflow-hidden relative flex flex-col ar:flex-row justify-center items-center p-16 gap-6">

	<enhanced:img class="absolute left-0 top-0 object-cover w-full h-full saturate-[0.25] brightness-[0.25] opacity-20" src={heroimage} />

	<CardSpread class="flex-auto shrink-0`
		h-1/2 max-w-[145svw] max-h-[115.08svw]
		ar:h-auto ar:max-w-[85svh] ar:max-h-[67.46svh]" />





	<div class="flex flex-col ar:flex-row gap-8">

		<div class="flex ar:flex-col gap-3 content-center justify-center items-center">
			<div class="bg-gradient-to-r ar:bg-gradient-to-b from-[#AF561200] to-[#FCF8B290] h-[1px] w-[1px] grow"> </div>
			<div class="w-1.5 h-1.5 bg-radial from-[#AF5612] to-[#FCF8B2] rounded-full"></div>
			<div class="bg-gradient-to-l ar:gradient-to-t from-[#AF561200] to-[#FCF8B290] h-[1px] w-[1px] grow"> </div>
		</div>

		<div class="flex flex-col gap-1 max-w-xs ar:py-16">

			<div class="inline-block bg-[#081319] p-[2px] cutout">
				<div class="bg-radial from-[#AF5612] via-[#FCF8B2] to-[#AF5612] p-[2px] cutout">
					<p class="text-[gainsboro] text-center font-bold uppercase bg-[#081319] px-[2.5em] py-1 cutout select-none">Nocturnal Glow</p>
				</div>
			</div>


			<p class="italic text-[#ebead8] text-center">The hunt begins in silence, shadows stretching long beneath the ancient trees.</p>

			<button class="border w-full border-[#928f67]">See more</button>
		</div>

	</div>

</div>



		<!-- <p class="italic pb-8 text-[#ebead8]">The hunt begins in silence, shadows stretching long beneath the ancient trees. The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey. The stag moves cautiously, its hooves pressing into the damp earth, ears flicking at the distant rustle of unseen danger.</p> -->
