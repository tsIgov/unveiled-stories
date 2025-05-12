<script lang="ts">
	import type { Picture } from 'vite-imagetools';


	let { name, image, ...others } :
	{
		class? : string | undefined,
		name?: string | undefined,
		image : Picture
	} = $props();
</script>


<!-- <div class="aspect-[0.625] p-[8px] bg-[#081319] {others.class}">
	<div class="w-full h-full bg-radial from-[#AF5612] via-[#FCF8B2] to-[#AF5612] p-[2px]">
		<div class="relative w-full h-full bg-[#081319] p-[8px]">


			<div class="absolute w-1.5 h-1.5 bg-radial from-[#AF5612] to-[#FCF8B2] rounded-full top-2 left-2 z-10"></div>
			<div class="absolute w-1.5 h-1.5 bg-radial from-[#AF5612] to-[#FCF8B2] rounded-full top-2 right-2 z-10"></div>
			<div class="absolute w-1.5 h-1.5 bg-radial from-[#AF5612] to-[#FCF8B2] rounded-full bottom-2 left-2 z-10"></div>
			<div class="absolute w-1.5 h-1.5 bg-radial from-[#AF5612] to-[#FCF8B2] rounded-full bottom-2 right-2 z-10"></div>

			<div class="relative p-[2px] w-full h-full cutout bg-radial from-[#c07921] via-[#FCF8B2] to-[#c07921]">
				<enhanced:img class="bg-[#081319] object-cover w-full h-full cutout select-none" src={image} alt={name} />
			</div>
		</div>
	</div>
</div> -->





<div class="aspect-[0.625] border-[#081319] border-[8px] p-[2px] overflow-hidden  {others.class}">

	<div class="absolute top-0 left-0 w-full h-full animate-[gradient_5s_linear_infinite_alternate]
		bg-linear-to-br from-[#AF5612] via-[#FCF8B2] to-[#AF5612]" style="background-size: 200% 200%;"></div>

	<div class="relative w-full h-full border-[#081319] border-[8px] p-[2px] overflow-hidden">

		<div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2
					bg-radial-[at_19px_19px] from-[3px] to-[3px] from-[transparent] to-[#081319]
					rounded-full w-8 h-8">
		</div>

		<div class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2
					bg-radial-[at_13px_19px] from-[3px] to-[3px] from-[transparent] to-[#081319]
					rounded-full w-8 h-8">
		</div>

		<div class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2
					bg-radial-[at_19px_13px] from-[3px] to-[3px] from-[transparent] to-[#081319]
					rounded-full w-8 h-8">
		</div>

		<div class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2
					bg-radial-[at_13px_13px] from-[3px] to-[3px] from-[transparent] to-[#081319]
					rounded-full w-8 h-8">
		</div>





		<!-- <div class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 border-8 border-[#081319] rounded-full w-8 h-8"></div>
		<div class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 border-8 border-[#081319] rounded-full w-8 h-8"></div>
		<div class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 border-8 border-[#081319] rounded-full w-8 h-8"></div> -->

		<enhanced:img class="bg-[#081319] object-cover w-full h-full cutout select-none" src={image} alt={name} />
	</div>

</div>
