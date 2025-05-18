<script lang="ts">
	import { t } from "$lib/utils";
	import HeroPreview from "$lib/components/HeroPreview.svelte";

	import imagePortrait from "$lib/assets/glow-portrait.jpg?enhanced"
	import imageLandscape from "$lib/assets/glow-landscape.jpg?enhanced"
	import imageLeft from "$lib/assets/glow-left.jpg?enhanced";
	import imageCenter from "$lib/assets/glow-center.jpg?enhanced";
	import imageRight from "$lib/assets/glow-right.jpg?enhanced";

	let name = t({en: "Nocturnal Glow", bg:"Нощен блясък"});
	let description = t({en: "TThe predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey.", bg:"The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey."});

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
	color="#5e1e5e"
/>





		<!-- <p>The hunt begins in silence, shadows stretching long beneath the ancient trees. The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey. The stag moves cautiously, its hooves pressing into the damp earth, ears flicking at the distant rustle of unseen danger.</p> -->

