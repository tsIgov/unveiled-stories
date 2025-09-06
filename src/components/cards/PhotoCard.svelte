<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { Frame } from 'components/common'

	interface Props {
		name: string,
		image : Picture,
		color: string,
	}

	let { name, image, color } : Props  = $props();

</script>


<div class="photo-card">
	<Frame {color}>
		<div class="frame-gap">
			<Frame glow={false} {color}>
				<enhanced:img class=""
					src={image} alt={name} />
			</Frame>
		</div>
	 </Frame>
</div>


<style>
	@reference "style";

	.photo-card {
		@apply aspect-card;

		& .frame-gap {
			@apply w-full h-full;
			padding: min(1.5cqb, 0.5rem);
		}

		& :global(img) {
			@apply w-full h-full;
			@apply bg-neutral-900 object-cover;
			@apply select-none;
		}
	}
</style>
