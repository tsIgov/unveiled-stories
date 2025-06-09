<script lang="ts">

	import { Break } from "$lib/components/common/index";
	import { fit } from '$lib/utils/text-fit';
	import test2 from "photoshoots/the-hunt/images/background-portrait.jpg?enhanced"

	interface Props {
		class? : string;
		title: string;
		text: string;
	}

	let { title, text, ...others } : Props = $props();
</script>

<div class="glow aspect-card p-[2px] inverse-corners {others.class}"
		style="--glow-color: oklch(0.6201 0.0502 76.88)">

	<div class="h-full w-full p-4 flex flex-col items-center justify-center bg-neutral-100 inverse-corners">

		<enhanced:img class="absolute top-0 left-0 w-full h-full bg-neutral-100 object-cover select-none inverse-corners brightness-75 opacity-10"
		src={test2} alt="{title}" />

		<h3 class="text-center font-serif text-lg text-light uppercase">{title}</h3>
		<Break orientation="horizontal" centerOrnament={true} class="w-full mb-2" />
		<div class="h-0 w-full grow flex items-center">
			<p use:fit class="text-center text-neutral-900">{text}</p>
		</div>
	</div>
</div>
