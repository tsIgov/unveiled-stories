<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import CardSpread from './CardSpread.svelte';
	import Break from './Break.svelte';

	let props:
	{
		class? : string | undefined,
		name: string,
		description: string,
		color: string,
		imagePortrait : Picture,
		imageLandscape : Picture,
		imageLeft : Picture,
		imageCenter : Picture,
		imageRight : Picture,
	} = $props();

</script>


<div class="flex hero-portrait:flex-col justify-center items-center p-16 gap-6 {props.class}" style="--glow-color-1:{props.color}">

	<enhanced:img class="landscape:hidden absolute left-0 top-0 object-cover w-full h-full saturate-25 brightness-25 opacity-20" src={props.imagePortrait} />
	<enhanced:img class="portrait:hidden absolute left-0 top-0 object-cover w-full h-full saturate-25 brightness-25 opacity-20" src={props.imageLandscape} />

	<CardSpread
		class="flex-auto shrink-0`
			h-1/2 max-w-[145svw] max-h-[115.08svw]
			hero-landscape:h-auto hero-landscape:max-w-[85svh] hero-landscape:max-h-[67.46svh]"
		imageLeft={props.imageLeft}
		imageCenter={props.imageCenter}
		imageRight={props.imageRight}
		name={props.name}
	/>

	<div class="flex hero-portrait:flex-col gap-8">

		<Break orientation="horizontal" class="hero-landscape:hidden"/>
		<Break orientation="vertical" class="hero-portrait:hidden"/>

		<div class="flex flex-col gap-1 max-w-xs hero-landscape:py-16">

			<div class="inline-block p-[2px] glow inverse-corners">
				<p class="text-base bg-surface text-center font-bold uppercase px-[2.5em] py-1 select-none inverse-corners">{props.name}</p>
			</div>

			<p class="italic text-base text-center">{props.description}</p>

		</div>

	</div>

</div>
