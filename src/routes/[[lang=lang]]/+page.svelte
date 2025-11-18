<script lang="ts">
	import { Rule } from "components/common"
	import { PortfolioPreview, TheExperience, Faq, Team, Testimonials } from "components/sections/home";
	import { Contacts } from "components/sections/shared";
</script>

<main>
	<PortfolioPreview />
	<Rule />

	<!-- <TheExperience />
	<Rule />

	<Faq />
	<Rule />

	<Team />
	<Rule />

	<Testimonials />
	<Rule />

	<Contacts /> -->
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

		& > :global(.rule) {
			@apply w-full;
		}
	}
</style>
