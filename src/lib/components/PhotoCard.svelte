<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	let props:
	{
		class? : string | undefined,
		name: string,
		image : Picture
	} = $props();

</script>


<div class="aspect-[0.625] p-[2px] glow {props.class}">
	<div class="w-full h-full border-[#081319] border-[8px] p-[2px] overflow-hidden">

		<span class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2
					bg-radial-[at_19px_19px] from-[3px] to-[3px] from-[transparent] to-[#081319]
					rounded-full w-8 h-8" >
		</span>
		<span class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2
					bg-radial-[at_13px_19px] from-[3px] to-[3px] from-[transparent] to-[#081319]
					rounded-full w-8 h-8">
		</span>
		<span class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2
					bg-radial-[at_19px_13px] from-[3px] to-[3px] from-[transparent] to-[#081319]
					rounded-full w-8 h-8">
		</span>
		<span class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2
					bg-radial-[at_13px_13px] from-[3px] to-[3px] from-[transparent] to-[#081319]
					rounded-full w-8 h-8">
		</span>

		<enhanced:img class="bg-[#081319] object-cover w-full h-full select-none cutout"
			 src={props.image} alt={props.name} />
	</div>
</div>
