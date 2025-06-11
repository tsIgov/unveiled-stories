<script lang="ts">
	import { PortfolioPreview, Explanation } from "$lib/components/sections/home";
	import { Break } from "$lib/components/common"
	import { Section } from "$lib/full-page";
	import Steps from "$lib/components/sections/home/Steps.svelte";

	let { data } = $props();

</script>

<Section forceNewPage={true}>
	<PortfolioPreview class="w-full h-svh" photoshoots={data.photoshoots} />
</Section>

<Break orientation="horizontal" centerOrnament={false} class="w-full" />

<Section>
	<Explanation header={data.texts.theExperienceHeader} paragraph={data.texts.theExperienceParagraph} steps={data.steps} />
</Section>

<Section forceNewPage={false}>
	<Steps header={data.texts.theExperienceHeader} paragraph={data.texts.theExperienceParagraph} steps={data.steps} />
</Section>
