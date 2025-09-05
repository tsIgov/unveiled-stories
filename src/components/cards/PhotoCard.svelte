<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { Frame } from 'components/common'

	interface Props {
		class? : string,
		name: string,
		image : Picture,
		color: string,
	}

	let { name, image, color, ...others } : Props  = $props();

</script>


<div class="aspect-card {others.class}">
	<Frame {color}>
		<div class="w-full h-full p-[min(1.5cqb,0.5rem)]">
			<Frame glow={false} {color}>
				<enhanced:img class="bg-neutral-900 object-cover w-full h-full select-none"
					src={image} alt={name} />
			</Frame>
		</div>
	 </Frame>
</div>
