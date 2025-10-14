<script lang="ts">
	import { ExpandIndicator, Rule } from 'components/common';
	import { Card } from '.';

	interface MultipleDetailsCardData {
		title: string,
		details: string
	}

	interface Props {
		data: MultipleDetailsCardData[],
		slots: number,
		glow?: boolean,
		active?: boolean,
	}

	let { data, slots, glow = true, active = true } : Props = $props();

	let chosenItem = $state(-1);
	let fr = $derived(100 / slots);

	function getTop(index : number) {
		if(chosenItem == -1)
			return fr * index + fr * (slots - data.length) / 2;

		if (chosenItem > index)
			return (index - chosenItem) * fr;

		if (chosenItem < index)
			return (index - chosenItem - 1) * fr + 100;

		return 0;
	}

</script>


<Card class="multiple-details-card" {glow}>
	<div class="content">
		{#each data as item, index }

			<p style="top:{getTop(index) + fr}%; height:{100 -fr}%; opacity: {index == chosenItem ? "100%" : "0%"};">
				{item.details}
			</p>

			<div style="height: {fr}%; top: {getTop(index)}%;"
				class:first={index == 0}
				class:next={chosenItem != -1 && index == chosenItem + 1}>
				<Rule />

				{#if active}
					<button onclick={() => { if(chosenItem == index) chosenItem = -1; else chosenItem = index; }}>
						<ExpandIndicator expanded={chosenItem == index} />
						<h3>{item.title}</h3>
						<Rule />
					</button>
				{:else}
					<div>
						<ExpandIndicator expanded={chosenItem == index} />
						<h3>{item.title}</h3>
						<Rule />
					</div>
				{/if}
			</div>

		{/each}
	</div>
</Card>



<style>
	@reference "style";

	.content {
		@apply w-full h-full overflow-hidden;
		@apply flex flex-col justify-center-safe;

		&::before {
			content: "";
			@apply w-svw h-svh;
		}

		& > p {
			@apply absolute p-4;
			@apply flex items-center-safe;
			@apply transition-[top,opacity] duration-[1.5s];
		}

		& > div {
			@apply absolute w-full left-0 overflow-hidden;
			@apply bg-neutral-800;
			@apply flex flex-col items-center-safe;
			@apply transition-[top] duration-[1.5s];
			transform: translateZ(0);
			will-change: transform;

			& > :global(.rule) {
				@apply transition-[display] duration-[1.5s] transition-discrete;
				display: none;
			}

			&.next > :global(.rule),
			&.first > :global(.rule) {
				display: block;
			}

			& > button,
			& > div {
				@apply w-full h-full p-4;
				@apply flex flex-row gap-4;
				@apply items-center-safe;
				@apply text-center;
				@apply cursor-pointer hover-glow;

				& > h3 {
					@apply overflow-auto max-h-full grow;
					@apply text-lg font-bold text-moonlight;
					@apply text-shadow-sm text-shadow-neutral-900;
				}

				& > :global(.expand-indicator) {
					@apply w-6 h-6 shrink-0;
					@apply text-neutral-100/70;
				}

				& > :global(.rule) {
					@apply absolute left-0 w-full;
					top: calc(100% - 1px);
				}
			}
		}
	}

</style>
