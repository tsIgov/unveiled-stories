<script lang="ts">
	import { t } from "$lib/utils";
	import HeroPreview from "$lib/components/HeroPreview.svelte";

	import imagePortrait from "$lib/assets/hunt-portrait.jpg?enhanced"
	import imageLandscape from "$lib/assets/hunt-landscape.jpg?enhanced"
	import imageLeft from "$lib/assets/hunt-left.jpg?enhanced";
	import imageCenter from "$lib/assets/hunt-center.jpg?enhanced";
	import imageRight from "$lib/assets/hunt-right.jpg?enhanced";

	let name = t({en: "The Hunt", bg:"Ловът"});
	let description = t({en: "The hunt begins in silence, shadows stretching long beneath the ancient trees.", bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."});

	let props:
	{
		class? : string | undefined,
	} = $props();


</script>


<HeroPreview class={props.class}
	{name}
	{description}
	{imagePortrait}
	{imageLandscape}
	{imageLeft}
	{imageCenter}
	{imageRight}
	color="#809D5C"
/>





		<!-- <p>The hunt begins in silence, shadows stretching long beneath the ancient trees. The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey. The stag moves cautiously, its hooves pressing into the damp earth, ears flicking at the distant rustle of unseen danger.</p> -->

