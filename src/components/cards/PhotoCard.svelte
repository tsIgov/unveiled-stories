<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import CardOrnament from './CardOrnament.svelte'

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
	<div class="w-full h-full border-neutral-900 border-[min(1.5cqb,0.5rem)] p-[2px] overflow-hidden">

		<CardOrnament verticalPosition="top" horizontalPosition="left" />
		<CardOrnament verticalPosition="top" horizontalPosition="right" />
		<CardOrnament verticalPosition="bottom" horizontalPosition="left" />
		<CardOrnament verticalPosition="bottom" horizontalPosition="right" />

		<enhanced:img class="bg-neutral-900 object-cover w-full h-full select-none inverse-corners"
			 src={image} alt={name} />
	</div>
</div>
