<script lang="ts">
	import CardSpread from "$lib/components/CardSpread.svelte";
	import heroimage from "$lib/assets/the-hunt-2.jpg?enhanced"

</script>


<div class="w-full h-svh overflow-hidden relative flex flex-col landscape:hsm:flex-row justify-center items-center p-16 gap-6">


	<enhanced:img class="absolute left-0 top-0 object-cover w-full h-full saturate-[0.25] brightness-[0.25] opacity-20" src={heroimage} />

	<!-- <CardSpread class="flex-auto h-0 max-w-[145svw] max-h-[115.08svw]" /> -->
	<CardSpread class="flex-auto
		h-0 max-w-[145svw] max-h-[115.08svw]
		landscape:hsm:h-auto landscape:hsm:max-h-full  landscape:hsm:max-w-[85svh]" />

	<div class="w-sm max-w-full">
		<p class="italic w-full text-[#ebead8] text-center">The hunt begins in silence, shadows stretching long beneath the ancient trees.</p>
		<!-- <p class="italic pb-8 text-[#ebead8]">The hunt begins in silence, shadows stretching long beneath the ancient trees. The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey. The stag moves cautiously, its hooves pressing into the damp earth, ears flicking at the distant rustle of unseen danger.</p> -->
		<button class="border w-full border-[#928f67]">See more</button>
	</div>
</div>

