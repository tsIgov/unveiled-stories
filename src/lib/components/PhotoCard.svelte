<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	let { name, number, image, ...others } :
	{
		class? : string | undefined,
		name?: string | undefined,
		number?: string,
		image : Picture
	} = $props();


</script>


<div class="aspect-[0.625] p-2 bg-[#081319] {others.class}">
	<div class="w-full h-full bg-radial from-[#AF5612] via-[#FCF8B2] to-[#AF5612] p-[2px]">
		<div class="relative w-full h-full bg-[#081319] p-2">

			<div class="absolute w-1.5 h-1.5 bg-radial from-[#AF5612] to-[#FCF8B2] rounded-full top-2 left-2 z-10"></div>
			<div class="absolute w-1.5 h-1.5 bg-radial from-[#AF5612] to-[#FCF8B2] rounded-full top-2 right-2 z-10"></div>
			<div class="absolute w-1.5 h-1.5 bg-radial from-[#AF5612] to-[#FCF8B2] rounded-full bottom-2 left-2 z-10"></div>
			<div class="absolute w-1.5 h-1.5 bg-radial from-[#AF5612] to-[#FCF8B2] rounded-full bottom-2 right-2 z-10"></div>

			<p class="absolute left-0 right-0 text-[gainsboro] font-bold text-center top-0.5 select-none">{number}</p>

			<div class="relative w-full h-full bg-radial from-[#AF5612] via-[#FCF8B2] to-[#AF5612] p-[2px] cutout-corners-xs {number ? "cutout-top-xs" : ""}">
				<enhanced:img class="object-cover w-full h-full cutout-corners-xs {number ? "cutout-top-xs" : ""} select-none" src={image} alt={name} />
				{#if name}
					<div class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#081319] p-[2px] min-w-1/2 max-w-3/4 w-max cutout-corners-xs">
						<div class="bg-radial from-[#AF5612] via-[#FCF8B2] to-[#AF5612] p-[2px] cutout-corners-xs">
							<p class="inline-block text-[gainsboro] text-center font-bold w-full uppercase bg-[#081319] px-10 py-1 cutout-corners-xs select-none">{name}</p>
						</div>
					</div>
				{/if}

			</div>
		</div>
	</div>
</div>
