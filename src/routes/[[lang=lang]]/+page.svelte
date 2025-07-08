<script lang="ts">
	import { PortfolioPreview, TheExperience, Faq, Team } from "components/sections/home";
	import { Rule } from "components/common"

	let { data } = $props();

</script>

<main>
	<PortfolioPreview photoshoots={data.portfolio} />
	<Rule class="w-full" />
	<TheExperience data={data.theExperinece} />
	<Rule class="w-full" />
	<Faq data={data.faq} />
	<Rule class="w-full" />
	<Team data={data.team} />
</main>

<style>
	@reference "style";

	main {
		& > :global(section) {
			/* @apply snap-start snap-always; */
			@apply flex flex-col items-center justify-center gap-8;
			width: 100%;
		}

		& > :global(section:first-child) {
			height: 100svh;
		}

		& > :global(section:not(:first-child)) {
			min-height: calc(100lvh - var(--navbar-height));
			padding-top: max(1rem, calc(50lvh - 50svh));
			padding-bottom: max(1rem, calc(50lvh - 50svh));
			scroll-margin-top: var(--navbar-height);
		}
	}
</style>
