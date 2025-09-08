<script lang="ts">
	import { ExpandIndicator, Frame } from 'components/common';
	import type { Picture } from 'vite-imagetools';

	interface Props {
		title : string,
		subtitle : string,
		details : string,
		background: Picture
	}

	let { title, subtitle, details, background } : Props = $props();
	let expanded = $state(false);

</script>


<div class="details-card">
	<Frame color="var(--color-gold-dim)" glow={expanded}>
		<enhanced:img class="background" src={background} alt={title} />

		<div class="content"
			class:expanded={expanded}>
			<div class="top-gap"></div>
			<button onclick="{() => { expanded = !expanded; }}">
				<h3>{title}</h3>
				<p class="subtitle">{subtitle}</p>
				<ExpandIndicator expanded={expanded} />
			</button>
			<div class="details">
				<p>{details}</p>
			</div>
		</div>

	</Frame>
</div>



<style>
	@reference "style";

	.details-card {
		@apply max-w-3xs aspect-card;
	}

	.background {
		@apply absolute top-0 left-0 w-full h-full select-none;
	}

	.content {
		@apply w-full h-full;
		@apply flex flex-col;
		transition-property: --tw-gradient-from, --tw-gradient-to, --tw-gradient-via;
		transition-duration: 1000ms;

		@apply bg-linear-to-b from-transparent via-neutral-900/50 to-neutral-900 from-50% via-75% to-100%;

		& > .top-gap {
			@apply grow transition-all duration-1000;
		}

		& > button {
			@apply w-full p-6;
			@apply flex flex-col;
			@apply text-left;
			@apply cursor-pointer hover-glow;

			& > h3 {
				@apply text-xl font-bold text-moonlight;
				@apply text-shadow-sm text-shadow-neutral-900;
			}

			& > .subtitle {
				@apply text-shadow-sm text-shadow-neutral-900;
			}

			& > :global(.expand-indicator) {
				@apply w-6 h-6 top-1/2 -mt-3;
				@apply absolute right-0 mr-4;
				@apply text-3xl text-neutral-100/70;
			}
		}

		& > .details {
			@apply flex flex-col justify-around overflow-hidden;
			@apply basis-0 grow-0 shrink;
			@apply transition-all duration-1000;

			& > p {
				@apply p-6 pt-0 italic;
			}
		}
	}

	.content.expanded {
		@apply bg-linear-to-b from-neutral-900/80 via-neutral-900/80 to-neutral-900/80 from-50% via-75% to-100%;

		& > .top-gap {
			@apply grow-0;
		}

		& > .details {
			@apply grow;
		}
	}

</style>
