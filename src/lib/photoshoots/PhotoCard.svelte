<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import CardOrnament from './CardOrnament.svelte';

	interface Props {
		class? : string,
		name: string,
		image : Picture,
		color: string,
	}

	let { name, image, color, ...others } : Props  = $props();

</script>


<div class="aspect-card p-[2px] glow {others.class}"
	style="--glow-color: {color}">
	<div class="w-full h-full border-neutral-100 border-8 p-[2px] overflow-hidden">

		<CardOrnament verticalPosition="top" horizontalPosition="left" />
		<CardOrnament verticalPosition="top" horizontalPosition="right" />
		<CardOrnament verticalPosition="bottom" horizontalPosition="left" />
		<CardOrnament verticalPosition="bottom" horizontalPosition="right" />

		<enhanced:img class="bg-neutral-100 object-cover w-full h-full select-none inverse-corners"
			 src={image} alt={name} />
	</div>
</div>




<!-- <script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import CardOrnament from './CardOrnament.svelte';

	interface Props {
		class? : string,
		name: string,
		image : Picture,
		color: string,
	}

	let { name, image, color, ...others } : Props  = $props();

</script>


<div class="aspect-card p-[2px] glow inverse-corners {others.class} "
	style="--glow-color: {color}">
	<div class="w-full h-full bg-neutral-100 p-[8px] overflow-hidden inverse-corners">
		<div class="w-full h-full p-[2px] glow inverse-corners">

			<enhanced:img class="bg-neutral-100 object-cover w-full h-full select-none inverse-corners"
			 	src={image} alt={name} />
		</div>
	</div>
</div> -->
