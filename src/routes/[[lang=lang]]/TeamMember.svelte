<script lang="ts">
	import { ExpandIndicator } from 'components/common';
	import type { MemberData } from 'team';

	interface Props {
		data : MemberData,
	}

	let { data } : Props = $props();

	let expanded = $state(false);

</script>


<div class="card">
	<div class="card-border">
		<enhanced:img class="background" src={data.photo} alt={data.name} />

		<div class="content"
			class:expanded={expanded}>
			<div class="top-gap"></div>
			<button onclick="{() => { expanded = !expanded; }}">
				<h3>{data.name}</h3>
				<p class="title">{data.title}</p>
				<ExpandIndicator expanded={expanded} class="indicator" />
			</button>
			<div class="bio">
				<p>{data.bio}</p>
			</div>
		</div>

	</div>
</div>



<style>
	@reference "style";

	.card {
		@apply max-w-3xs aspect-card;
		@apply glow p-[2px] inverse-corners;
		--glow-color: oklch(0.6201 0.0502 76.88);
	}

	.card-border {
		@apply w-full h-full inverse-corners;
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

			& > .title {
				@apply text-shadow-sm text-shadow-neutral-900;
			}

			& > :global(.indicator) {
				@apply w-6 h-6 top-1/2 -mt-3;
				@apply absolute right-0 mr-4;
				@apply text-3xl text-neutral-100/70;
			}
		}

		& > .bio {
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

		& > .bio {
			@apply grow;
		}
	}

</style>
