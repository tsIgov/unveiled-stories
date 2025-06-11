<script lang="ts">
	import { PortfolioPreview, Explanation } from "$lib/components/sections/home";
	import { Break } from "$lib/components/common"

	let { data } = $props();

</script>

<div class="section h-full">
	<PortfolioPreview class="w-full h-full" photoshoots={data.photoshoots} />
</div>

<Break orientation="horizontal" centerOrnament={false} class="w-full" />

<div class="section h-auto min-h-full">
	<Explanation header={data.texts.theExperienceHeader} paragraph={data.texts.theExperienceParagraph} steps={data.steps} />
</div>

<style>
	@reference "tailwindcss";

	.section {
		@apply w-full snap-start snap-always;
	}

	.section:not(:first-child) {
		@apply pt-[var(--navbar-height)];
	}
</style>
