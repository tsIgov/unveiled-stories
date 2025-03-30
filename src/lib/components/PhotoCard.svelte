<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	let { name, number, image } :
	{
		name: string | undefined,
		number: string,
		image : Picture
	} = $props();

</script>


<div class="inline-block relative w-sm aspect-[0.625] p-2 bg-[#1e1e2e]">
	<div class="w-full h-full bg-radial from-[#FBC587] via-[#B2542C] to-[#FBC587] p-[2px]">
		<div class="relative w-full h-full bg-[#1e1e2e] p-2">

			<div class="absolute w-1.5 h-1.5 bg-radial from-[#FBC587] to-[#B2542C] rounded-full top-2 left-2 z-10"></div>
			<div class="absolute w-1.5 h-1.5 bg-radial from-[#FBC587] to-[#B2542C] rounded-full top-2 right-2 z-10"></div>
			<div class="absolute w-1.5 h-1.5 bg-radial from-[#FBC587] to-[#B2542C] rounded-full bottom-2 left-2 z-10"></div>
			<div class="absolute w-1.5 h-1.5 bg-radial from-[#FBC587] to-[#B2542C] rounded-full bottom-2 right-2 z-10"></div>

			<p class="absolute left-0 right-0 text-[gainsboro] font-bold text-center top-0.5">{number}</p>

			<div class="relative w-full h-full bg-radial from-[#FBC587] via-[#B2542C] to-[#FBC587] p-[2px] cutout-corners-xs cutout-top-xs">
				<enhanced:img class="object-cover w-full h-full cutout-corners-xs cutout-top-xs" src={image} alt={name} />
				{#if name}
					<div class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#1e1e2e] p-[2px] min-w-1/2 max-w-3/4 w-max cutout-corners-xs">
						<div class="bg-radial from-[#FBC587] via-[#B2542C] to-[#FBC587] p-[2px] cutout-corners-xs">
							<p class="inline-block text-[gainsboro] text-center font-bold w-full uppercase bg-[#1e1e2e] px-10 py-1 cutout-corners-xs">{name}</p>
						</div>
					</div>
				{/if}

			</div>
		</div>
	</div>
</div>
