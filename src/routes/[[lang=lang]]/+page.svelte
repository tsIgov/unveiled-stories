<script lang="ts">
	import CardSpread from "$lib/components/CardSpread.svelte";

	import heroimage from "$lib/assets/glow.jpg?enhanced"
	import imageLeft from "$lib/assets/glow-2.jpg?enhanced";
	import imageCenter from "$lib/assets/glow-1.jpg?enhanced";
	import imageRight from "$lib/assets/glow-3.jpg?enhanced";

	import { t } from "$lib/utils";
	let name = t({en: "Nocturnal Glow", bg:"Нощен блясък"});


</script>


<div class="w-full h-svh overflow-hidden flex flex-col near-portrait:flex-row justify-center items-center p-16 gap-6">

	<enhanced:img class="absolute left-0 top-0 object-cover w-full h-full saturate-25 brightness-25 opacity-20" src={heroimage} />

	<CardSpread
		class="flex-auto shrink-0`
			h-1/2 max-w-[145svw] max-h-[115.08svw]
			near-portrait:h-auto near-portrait:max-w-[85svh] near-portrait:max-h-[67.46svh]"
		{imageLeft}
		{imageCenter}
		{imageRight}
		{name}
	/>





	<div class="flex flex-col near-portrait:flex-row gap-8">

		<div class="flex near-portrait:flex-col gap-3 content-center justify-center items-center">
			<div class="bg-gradient-to-r near-portrait:bg-gradient-to-b from-[#AF561200] to-[#FCF8B290] h-[1px] w-[1px] grow"> </div>
			<div class="w-1.5 h-1.5 bg-radial from-[#AF5612] to-[#FCF8B2] rounded-full"></div>
			<div class="bg-gradient-to-l near-portrait:gradient-to-t from-[#AF561200] to-[#FCF8B290] h-[1px] w-[1px] grow"> </div>
		</div>

		<div class="flex flex-col gap-1 max-w-xs near-portrait:py-16">

			<div class="inline-block  p-[2px] cutout glow">
				<p class="text-[#dcdcdc] bg-[#081319] text-center font-bold uppercase px-[2.5em] py-1 cutout select-none">{name}</p>
			</div>



			<p class="italic text-[#ebead8] text-center">The hunt begins in silence, shadows stretching long beneath the ancient trees.</p>

		</div>

	</div>

</div>




		<!-- <p class="italic pb-8 text-[#ebead8]">The hunt begins in silence, shadows stretching long beneath the ancient trees. The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey. The stag moves cautiously, its hooves pressing into the damp earth, ears flicking at the distant rustle of unseen danger.</p> -->

