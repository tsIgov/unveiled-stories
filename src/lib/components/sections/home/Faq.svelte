<script lang="ts">
	import { Rule } from "$lib/components/common";

	interface Props {
		faq: { question : string; answer: string }[];
	}

	let { faq } : Props = $props();

	let openedFaq = $state(-1);

	function onToggle(i : number) {
		openedFaq = (openedFaq == i ? -1 : i)
	}
</script>

<section>
	<div class="questions">
		{#each faq as item, i}
			<div class="{openedFaq == i ? "expanded" : ""}">

				<Rule class="w-full" />
				<button onclick={() => onToggle(i)}>
					<h2>{item.question}</h2>
				</button>
				<div class="content">
					<p>{item.answer}</p>
				</div>
				<Rule class="w-full" />

			</div>
		{/each}
	</div>
</section>

<style>
	@reference "style";

	.questions {
		& > div {
			@apply max-w-xl p-2;

			& > button {
				@apply w-full px-4 py-2 text-light text-center text-lg;
			}

			& > .content {
				display: grid;
				grid-template-rows: 0fr;
				transition: grid-template-rows 0.5s ease-out;

				& > p {
					@apply px-4 mb-4;
					overflow: hidden;
				}
			}
		}

		& > .expanded > .content {
			grid-template-rows: 1fr;
		}

	}
</style>
