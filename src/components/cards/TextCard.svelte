<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	import { Frame, Rule } from 'components/common';

	interface Props {
		title: string;
		text: string;
		backgroundImage? : Picture,
		glow?: boolean;
	}

	let { title, text, backgroundImage, glow = true } : Props = $props();
</script>

<div class="text-card">
	<Frame color="var(--color-gold-dim)" {glow}>
		<div class="content">
			{#if backgroundImage}
				<enhanced:img class="background" src={backgroundImage} alt="{title}" />
			{/if}
			<h3>{title}</h3>
			<Rule centerOrnament={true} />
			<div class="scroller">
				<p>{text}</p>
			</div>
		</div>
	</Frame>
</div>

<style>
	@reference "style";

	.text-card {
		@apply aspect-card;

		& .content {
			@apply h-full w-full;
			@apply flex flex-col items-center justify-center;
			@apply bg-neutral-900;

			& .background {
				@apply absolute top-0 left-0 w-full h-full;
				@apply bg-neutral-900 object-cover brightness-75 opacity-10;
				@apply select-none;
			}

			& > h3 {
				@apply text-center font-serif text-lg text-moonlight uppercase;
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
	}

</style>
