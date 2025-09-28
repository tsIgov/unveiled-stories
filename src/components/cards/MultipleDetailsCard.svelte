<script lang="ts">
	import { ExpandIndicator, Rule } from 'components/common';
	import { Card } from '.';

	import {fly } from "svelte/transition"

	interface MultipleDetailsCardData {
		title: string,
		details: string
	}

	interface Props {
		data: MultipleDetailsCardData[],
		slots: number,
		glow?: boolean,
	}

	let { data, slots, glow = true } : Props = $props();
	let itemIndex = $state(-1);

</script>


<Card class="multiple-details-card" {glow}>

	<div class="content w-full h-full flex flex-col justify-center-safe"
		class:expanded={itemIndex >= 0}>

		{#each data as item, index }

			<div
				class="overflow-hidden flex flex-col bg-neutral-800 h-0 grow justify-between"
			class:grow={itemIndex == index || itemIndex == -1}
			class:chosen={itemIndex == index}
			class:before={index < itemIndex}
			class:after={index > itemIndex}

			>
				<Rule />

					<button class="transition-all duration-[1.5s]" onclick={() => { if(itemIndex == index) itemIndex = -1; else itemIndex = index; }}>
						<ExpandIndicator expanded={itemIndex == index} />
						<h3>{item.title}</h3>

					</button>
				<Rule />
			{#if index == itemIndex}

				<p class=" h-0 p-0 overflow-hidden transition-all duration-[1.5s] grow flex items-center-safe opacity-0"
				transition:fly>{item.details}</p>
			{/if}
			</div>


		{/each}

	</div>

</Card>



<style>
	@reference "style";

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
		/* top: var(--top); */
	}

	.content > div.chosen {
		 /* @apply top-4; */
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
