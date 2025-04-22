<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	let { name, image, ...others } :
	{
		class? : string | undefined,
		name?: string | undefined,
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

			<div class="relative w-full h-full bg-radial from-[#AF5612] via-[#FCF8B2] to-[#AF5612] p-[2px] cutout">
				<enhanced:img class="bg-[#081319] object-cover w-full h-full cutout select-none" src={image} alt={name} />
			</div>
		</div>
	</div>
</div>
