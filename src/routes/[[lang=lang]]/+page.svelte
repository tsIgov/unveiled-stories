<script lang="ts">
	import { PortfolioPreview, Explanation } from "$lib/components/sections/home";
	import { Rule } from "$lib/components/common"
	import Faq from "$lib/components/sections/home/Faq.svelte";

	let { data } = $props();


</script>

<main>
	<PortfolioPreview photoshoots={data.photoshoots} />
	<Rule class="w-full" />
	<Explanation header={data.texts.theExperienceHeader} paragraph={data.texts.theExperienceParagraph} steps={data.steps} />
	<Rule class="w-full" />
	<Faq faq={data.faq} />
</main>

<style>
	@reference "style";

	main {
		& > :global(section) {
			@apply snap-start snap-always;
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
