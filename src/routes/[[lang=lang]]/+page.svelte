<script lang="ts">
	import { PortfolioPreview, Explanation } from "$lib/components/sections/home";
	import { Break } from "$lib/components/common"
	import Section from "$lib/full-page/Section.svelte";
	import Fullpage from "$lib/full-page/Fullpage.svelte";

	let { data } = $props();
</script>

<!-- <div class="section h-full">
	<PortfolioPreview class="w-full h-full" photoshoots={data.photoshoots} />
</div>

<Break orientation="horizontal" centerOrnament={false} class="w-full" />

<div class="section h-auto min-h-full">
	<Explanation header={data.texts.theExperienceHeader} paragraph={data.texts.theExperienceParagraph} steps={data.steps} />
</div> -->


<Fullpage>
	<Section>
		<div class="w-full bg-[red] h-[50svh]"></div>
	</Section>

	<Section>
		<div class="w-full bg-[blue] h-[70svh]"></div>
	</Section>
</Fullpage>

<style>
	@reference "style";

	.section {
		@apply w-full snap-start snap-always;
	}

	.section:not(:first-child) {
		@apply pt-[var(--navbar-height)];
	}
</style>
