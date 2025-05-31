<script lang="ts">
	import Break from '$lib/common/Break.svelte';
	import CardSpread from '$lib/photoshoots/CardSpread.svelte';
	import type { PhotoshootData } from '$lib/photoshoots/PhotoshootData';

	interface Props {
		class? : string;
		data : PhotoshootData
	}

	let { data, ...others } : Props = $props();


</script>


<div class="flex hero-portrait:flex-col justify-center items-center p-16 gap-6 {others.class}" style="--glow-color:{data.color}">

	<enhanced:img class="landscape:hidden absolute left-0 top-0 object-cover w-full h-full brightness-75 opacity-20" src={data.backgroundPortrait} />
	<enhanced:img class="portrait:hidden absolute left-0 top-0 object-cover w-full h-full brightness-75 opacity-20" src={data.backgroundLandscape} />

	<CardSpread
		class="flex-auto shrink-0`
			h-1/2 max-w-[145svw] max-h-[115.08svw]
			hero-landscape:h-auto hero-landscape:max-w-[85svh] hero-landscape:max-h-[67.46svh]"
		imageLeft={data.cardLeft}
		imageCenter={data.cardCenter}
		imageRight={data.cardRight}
		name={data.name}
		color={data.color}
	/>

	<div class="flex hero-portrait:flex-col gap-8">

		<Break orientation="horizontal" centerOrnament={true} class="hero-landscape:hidden"/>
		<Break orientation="vertical" centerOrnament={true} class="hero-portrait:hidden"/>

		<div class="flex flex-col gap-3 max-w-xs hero-landscape:py-16">

			<div class="inline-block p-[2px] glow inverse-corners">
				<p class="bg-neutral-100 text-center font-bold uppercase px-[2.5em] py-1 select-none inverse-corners">{data.name}</p>
			</div>

			<p class="italic text-center">{data.description}</p>

		</div>

	</div>

</div>
