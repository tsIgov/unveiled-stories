<script lang="ts">
	import { Rule } from "components/common"

	import PortfolioPreview from "./PortfolioPreview.svelte";
	import TheExperience from "./TheExperience.svelte";
	import Faq from "./Faq.svelte";
	import Team from "./Team.svelte";
	import Testimonials from "./Testimonials.svelte";
	import Contact from "./Contact.svelte";

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
	<Rule class="w-full" />
	<Testimonials data={data.testimonials} />
	<Rule class="w-full" />
	<Contact />

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
