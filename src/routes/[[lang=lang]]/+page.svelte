<script lang="ts">
	import { PortfolioPreview, Explanation } from "$lib/components/sections/home";
	import { Break } from "$lib/components/common"
	import Section from "$lib/utils/Section.svelte";

	let { data } = $props();

</script>

<Section minSize={1} maxSize={1}>
	<PortfolioPreview class="w-full h-full" photoshoots={data.photoshoots} />
</Section>

<Break orientation="horizontal" centerOrnament={false} class="w-full" />

<Section>
	<Explanation header={data.texts.theExperienceHeader} paragraph={data.texts.theExperienceParagraph} steps={data.steps} />
</Section>
