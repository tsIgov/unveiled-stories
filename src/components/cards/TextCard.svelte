<script lang="ts">
	import { type Photo } from "data/images";

	import { Ruler } from 'components/basic';
	import { Card } from '.';

	interface Props {
		title: string,
		text: string,

		glow?: boolean
	}

	let { title, text, glow = true } : Props = $props();
</script>

<Card {glow} class="text-card">

	<div class="content">

		<h3>{title}</h3>
		<Ruler centerOrnament={true} />
		<div class="scroller">
			<p>{text}</p>
		</div>
	</div>
</Card>

<style>
	@reference "style";

	.content {
		@apply h-full w-full;
		@apply flex flex-col items-center justify-center;

		& > h3 {
			@apply text-center text-lg text-moonlight uppercase;
			@apply text-shadow-sm text-shadow-neutral-900;
			@apply px-4 pt-4;
		}

		& > :global(.ruler) {
			@apply w-full mb-2 px-4;
		}

		& > .scroller {
			@apply w-full h-0 grow;
			@apply flex items-center-safe;
			@apply overflow-y-auto px-4 pb-4;

			& > p {
				@apply text-center text-neutral-100;
			}
		}
	}

</style>
