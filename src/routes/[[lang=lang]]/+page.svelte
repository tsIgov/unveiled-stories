<script lang="ts">
	import { PortfolioPreview, Explanation } from "$lib/components/sections/home";
	import { Break } from "$lib/components/common"

	let { data } = $props();

</script>

<section>
	<PortfolioPreview class="w-full h-full" photoshoots={data.photoshoots} />
</section>

<Break orientation="horizontal" centerOrnament={false} class="w-full" />

<section>
	<Explanation header={data.texts.theExperienceHeader} paragraph={data.texts.theExperienceParagraph} steps={data.steps} />
</section>

<Break orientation="horizontal" centerOrnament={false} class="w-full" />

<section>
	<p>Lorem ipsum</p>
</section>

<style>
	@reference "style";

	section {
		@apply snap-start snap-always;
		@apply flex flex-col items-center justify-center;
		width: 100%;
	}

	section:first-child {
		height: 100svh;
	}

	section:not(:first-child) {
		min-height: calc(100lvh - var(--navbar-height));
		padding-top: max(1rem, calc(50lvh - 50svh));
		padding-bottom: max(1rem, calc(50lvh - 50svh));
		scroll-margin-top: var(--navbar-height);
	}

</style>
