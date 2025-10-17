<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	import { Rule } from 'components/common';
	import { Card } from '.';
	import { CardBackground } from './internal';

	interface Props {
		title: string,
		text: string,
		background?: {
			portrait: Picture,
			landscape: Picture
		},
		glow?: boolean
	}

	let { title, text, background, glow = true } : Props = $props();
</script>

<Card {glow} class="text-card">
	{#if background}
		<CardBackground portrait={background.portrait} landscape={background.landscape} alt={title} />
	{/if}
	<div class="content">

		<h3>{title}</h3>
		<Rule centerOrnament={true} />
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

		& > :global(.rule) {
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
