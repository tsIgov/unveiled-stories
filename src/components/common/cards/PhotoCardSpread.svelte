<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import { PhotoCard } from "components/common";

	interface Props {
		imageLeft : Picture,
		imageCenter: Picture,
		imageRight: Picture,
		color: string,
		onclick?: (() => void),
	}

	let { imageLeft, imageCenter, imageRight, color, onclick } : Props = $props();

</script>

	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="photo-card-spread" class:interactive={onclick} {onclick}>
		<PhotoCard image={imageLeft} {color} glow={false}	/>
		<PhotoCard image={imageCenter} {color} glow={true} />
		<PhotoCard image={imageRight} {color} glow={false} />
	</div>

<style>
	@reference "style";

	.photo-card-spread.interactive {
		@apply cursor-pointer;
	}

	.photo-card-spread {
		@apply flex items-start justify-center aspect-spread;

		& > :global(.photo-card):nth-child(1) {
			@apply absolute left-1/2 z-0 w-[48%];
			@apply -translate-x-[105%] translate-y-[17%] origin-top-left -rotate-15 scale-90;
			@apply saturate-50;
		}

		& > :global(.photo-card):nth-child(2) {
			@apply z-100 w-[48%] flex-none;
		}

		& > :global(.photo-card):nth-child(3) {
			@apply right-1/2 top-0 absolute z-0 w-[48%];
			@apply translate-x-[105%] translate-y-[17%] origin-top-right rotate-15 scale-90;
			@apply saturate-50;
		}
	}
</style>
