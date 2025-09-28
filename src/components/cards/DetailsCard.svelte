<script lang="ts">
	import { ExpandIndicator } from 'components/common';
	import type { Picture } from 'vite-imagetools';

	import { Card } from '.';
	import { CardBackground } from './internal';

	interface Props {
		title : string,
		subtitle : string,
		details : string,
		background: Picture,
		glow?: boolean,
	}

	let { title, subtitle, details, background, glow = true } : Props = $props();
	let expanded = $state(false);

</script>


<Card class="detail-card" {glow}>
	<CardBackground image={background} alt={title} dim={false} />

	<div class="content"
		class:expanded={expanded}>
		<div class="title">
			<button onclick="{() => { expanded = !expanded; }}">
				<h3>{title}</h3>
				<p class="subtitle">{subtitle}</p>
				<ExpandIndicator expanded={expanded} />
			</button>
		</div>
		<div class="details">
			<p>{details}</p>
		</div>
	</div>
</Card>


<style>
	@reference "style";

	.content {
		@apply w-full h-full;
		@apply flex flex-col;
		transition-property: --tw-gradient-from, --tw-gradient-to, --tw-gradient-via;
		transition-duration: 1000ms;

		@apply bg-linear-to-b from-transparent via-neutral-900/50 to-neutral-900 from-50% via-75% to-100%;

		& > .title {
			@apply w-full grow;
			@apply transition-all duration-1000;
			@apply flex flex-col justify-end;

			& > button {
				@apply w-full p-6;
				@apply grid items-center-safe grid-flow-col;
				grid-template-columns: 1fr max-content;
				grid-template-rows: repeat(2, min-content);
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
					@apply row-span-2;
					@apply w-6 h-6;
					@apply text-neutral-100/70;
				}
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

		& > .title {
			@apply grow-0;
		}

		& > .details {
			@apply grow;
		}
	}

</style>
