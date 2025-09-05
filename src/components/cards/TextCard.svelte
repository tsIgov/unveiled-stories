<script lang="ts">

	import { Frame, Rule } from 'components/common';
	import test2 from "photoshoots/the-hunt/images/background-portrait.jpg?enhanced"

	interface Props {
		class? : string;
		title: string;
		text: string;
		glow?: boolean;
	}

	let { title, text, glow = true, ...others } : Props = $props();
</script>

<div class="aspect-card {others.class}">
	<Frame color="var(--color-gold-dim)" {glow}>

		<div class="h-full w-full p-4 flex flex-col items-center justify-center bg-neutral-900">

			<enhanced:img class="absolute top-0 left-0 w-full h-full bg-neutral-900 object-cover select-none brightness-75 opacity-10"
			src={test2} alt="{title}" />

			<h3 class="text-center font-serif text-lg text-moonlight uppercase">{title}</h3>
			<Rule centerOrnament={true} class="w-full mb-2" />
			<div class="h-0 w-full grow flex items-center">
				<p class="text-center text-neutral-100">{text}</p>
			</div>
		</div>
	</Frame>
</div>
