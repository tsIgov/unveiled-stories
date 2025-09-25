<script lang="ts">
	import { ExpandIndicator, Frame, Rule } from 'components/common';
	import type { Picture } from 'vite-imagetools';
	import TextCard from './TextCard.svelte';

	interface Props {
		title : string[],
		details : string[],
		background: Picture
	}

	let { title, details, background } : Props = $props();
	let itemIndex = $state(-1);

</script>


<div class="multiple-details-card w-svw max-w-xs">
	<Frame color="var(--color-gold-dim)" glow={itemIndex >= 0}>
		<enhanced:img class="background" src={background} alt="background" />

		<div class="content w-full h-full"
			class:expanded={itemIndex >= 0}>

			{#each title as tit, index }
			{#if index < 4}
				<div
					class="absolute w-full h-full overflow-hidden flex flex-col "
				class:chosen={itemIndex == index}
				class:before={index < itemIndex}
				class:after={index > itemIndex}
				style="--top: {itemIndex == -1 ? 22 * index + 5 : ( index > itemIndex ? 22 * (index - itemIndex) + 105 : (itemIndex - index) * -22 - 5) }%;">
						<button class="h-[20%] bg-neutral-900/40" onclick={() => { if(itemIndex == index) itemIndex = -1; else itemIndex = index; }}>
							<ExpandIndicator expanded={itemIndex == index} />
						<h3>{tit}</h3>

						</button>
					<Rule />
					<p class=" overflow-hidden transition-all duration-[1.5s] grow flex items-center-safe opacity-0 p-4">{details[index]}</p>
				</div>
			{/if}
			{/each}

			<!-- <p>{details[0]}</p> -->



			<!-- <div class="title">
				<button onclick="{() => { expanded = !expanded; }}">
					<h3>{title}</h3>
					<ExpandIndicator expanded={expanded} />
				</button>
			</div>
			<div class="details">
				<p>{details}</p>
			</div> -->
		</div>

	</Frame>
</div>



<style>
	@reference "style";

	.multiple-details-card {
		@apply aspect-card;
	}

	button {
		@apply w-full p-4;
		@apply flex flex-row gap-6;
		@apply items-center-safe;
		@apply text-center;
		@apply cursor-pointer hover-glow;

		@apply transition-all duration-[1.5s];

		& > h3 {
			@apply text-lg font-bold text-moonlight;
			@apply text-shadow-sm text-shadow-neutral-900;
			@apply grow;
		}

		& > :global(.expand-indicator) {
			@apply w-6 h-6;
			@apply text-neutral-100/70;
		}
	}

	.chosen > button {
		/* @apply bg-neutral-900/80; */
	}

	.content > div {
		@apply transition-all duration-[1.5s];
		top: var(--top);
	}

	.content > div.chosen {
		 @apply top-4;
		 & > p {
			@apply opacity-100;
		 }
	}
	/* .content.expanded > div.after {
		top: calc(var(--top) + 100%);
	}
	.content.expanded > div.before {
		top: calc(var(--top) - 100%);
	} */

	.background {
		@apply absolute top-0 left-0 w-full h-full;
		@apply bg-neutral-900 object-cover brightness-75 opacity-10;
		@apply select-none;
	}

	/*.content > p {
		@apply overflow-hidden basis-0 grow-0;
		@apply transition-all duration-1000;
	}


	.content.expanded > p {
		@apply grow;
	}



	.background {
		@apply absolute top-0 left-0 w-full h-full;
		@apply bg-neutral-900 object-cover brightness-75 opacity-10;
		@apply select-none;
	}

	.content {
		@apply w-full h-full;
		@apply flex flex-col gap-2;
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
	} */

</style>
