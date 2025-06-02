<script lang="ts">
	import HeroPreview from "./HeroPreview.svelte";
	import Slideshow from "$lib/common/Slideshow.svelte";
	import { type PhotoshootData, theHunt, nocturnalGlow } from "$lib/photoshoots/PhotoshootData";
	import Break from "$lib/common/Break.svelte";

	import test from "$lib/photoshoots/the-hunt/images/background-landscape.jpg?enhanced"
	import test2 from "$lib/photoshoots/nocturnal-glow/images/background-landscape.jpg?enhanced"

	let { data } = $props();

</script>

{#snippet slide(photoshoot : PhotoshootData)}
	<HeroPreview data={photoshoot}/>
{/snippet}

<Slideshow slideSnippet={slide} data={data.photoshoots} timeout={5000} />
<Break orientation="horizontal" centerOrnament={false} class="w-full" />
<!-- <div class="p-4 flex flex-col items-center max-w-3xl mx-auto gap-8">
	<div class="text-center">
		<h2 class="font-serif text-3xl text-light uppercase mb-2">The Experience</h2>
		<p class="text-neutral-900">A boudoir photography session is a gift for yourself that you'll never forget. Spend the day with the Matt Mathews Team for a fun, empowering, confidence-boosting experience that will leave you charmed and smiling. See yourself the way your loved one sees you, and embrace your body's natural beauty. It's time to accept the gifts of life that nature has given you.</p>
	</div>
	<div class="grid grid-cols-2 gap-4">

		<div>
			<div class="min-h-16 flex items-center justify-center border border-light/20">
				<enhanced:img class="absolute left-0 top-0 object-cover w-full h-full brightness-50 opacity-80" src={test} />
				<h3 class="font-serif text-xl text-light uppercase ">
					<span class="">1.</span>The Consultation
				</h3>
			</div>
			<p class="text-neutral-900/80 p-4">We expect you to be nervous at first, our boudoir photography consultations are a great way to get the conversation started and learn more about boudoir photography. During your consultation, we will chat about expectations, what you would like to gain from this experience, the boudoir process, and answer any questions you may have..</p>
		</div>
		<div>
			<div class="min-h-16 flex items-center justify-center border border-light/20">
				<enhanced:img class="absolute left-0 top-0 object-cover w-full h-full brightness-50 opacity-80" src={test2} />
				<h3 class="font-serif text-xl text-light uppercase ">
					<span class="">2.</span> The Choice
				</h3>
			</div>
			<p class="text-neutral-900/80 p-4">We inspire to create an experience that is easy, fun, and truly about YOU. Boudoir photography is all about feeling good in your own skin! It’s about celebrating curves, learning to love your flaws, and seeing yourself for who you truly are. Let us take you on an exploration of who you are, independent from the way the world has defined who and what you should be.</p>
		</div>
		<div class="border border-light/20">
			<div class="min-h-16 flex items-center justify-center border-b border-light/20">
				<enhanced:img class="absolute left-0 top-0 object-cover w-full h-full brightness-50 opacity-80" src={test2} />
				<h3 class="font-serif text-xl text-light uppercase ">
					<span class="">3.</span> The Shoot
				</h3>
			</div>
			<p class="text-neutral-900/80 p-4">Boudoir is the perfect way to celebrate and remember your feminine beauty and sensuality. We will guide you through poses that accentuate your best features, allowing you to feel beautiful and confident. With hair and make-up by a professional artist, you’ll leave feeling confident and empowered. Let us capture your exquisiteness and let you see just how extraordinary you are.</p>
		</div>
		<div>
			<div class="min-h-16 flex items-center justify-center border border-light/20">
				<enhanced:img class="absolute left-0 top-0 object-cover w-full h-full brightness-50 opacity-80" src={test} />
				<h3 class="font-serif text-xl text-light uppercase ">
					<span class="">4.</span> The Reveal
				</h3>
			</div>
			<p class="text-neutral-900/80 p-4">Spend a part of your day with me at my studio, having wine while I reveal the best of your boudoir session. These pictures will be SO powerful! Have fun and enjoy the final part of the experience of celebrating you and the beauty that will shine through as we discuss our premium collections, luxury leather albums and wall art.</p>
		</div>
	</div>
</div>
<Break orientation="horizontal" centerOrnament={false} class="w-full" /> -->
<!-- <div class="h-svh">
	<div class="w-full h-52 overflow-hidden">
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] aspect-square border-2 border-light border-dashed rounded-full">

		</div>
	</div>
</div> -->

<div class="py-4 flex flex-col items-center mx-auto gap-8 min-h-[calc(100svh_-_5rem)]">
	<div class="text-center max-w-3xl">
		<h2 class="font-serif text-3xl text-light uppercase mb-2">{data.texts.theExperienceHeader}</h2>
		<p class="text-neutral-900">{data.texts.theExperienceParagraph}</p>
	</div>

	<div class="flex flex-col justify-center items-center gap-4 self-start">
		<div class="flex justify-center items-center p-2 w-16 aspect-square border border-light rounded-full">
			<span class="text-xl">01</span>
		</div>
		<div class="flex justify-center items-center p-2 w-16 aspect-square border border-light rounded-full opacity-50 -mr-12">
			<span class="text-xl">02</span>
		</div>
		<div class="flex justify-center items-center p-2 w-16 aspect-square border border-light rounded-full opacity-50 -mr-12">
			<span class="text-xl">03</span>
		</div>
		<div class="flex justify-center items-center p-2 w-16 aspect-square border border-light rounded-full opacity-50">
			<span class="text-xl">04</span>
		</div>
	</div>

	<div class="flex flex-col justify-center items-center gap-4 grow w-full mt-4">

		<enhanced:img class="absolute left-0 top-0 object-cover w-svw h-full brightness-50 opacity-20" src={test} />

		<h3 class="font-serif text-xl text-light uppercase mt-2 max-w-3xl ">
			{data.texts.planningHeader}
			<Break orientation="horizontal" centerOrnament={true} class="absolute left-1/2 -bottom-2 w-[150%] -translate-x-1/2" />
		</h3>


		<p class="text-neutral-900/80 max-w-3xl px-4">{data.texts.planningParagraph}</p>
	</div>
</div>






