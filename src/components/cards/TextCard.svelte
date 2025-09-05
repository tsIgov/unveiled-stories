<script lang="ts">

	import { Frame, Rule } from 'components/common';
	import test2 from "photoshoots/the-hunt/images/background-portrait.jpg?enhanced"

	interface Props {
		title: string;
		text: string;
		glow?: boolean;
	}

	let { title, text, glow = true } : Props = $props();
</script>

<div class="text-card">
	<Frame color="var(--color-gold-dim)" {glow}>
		<div class="content">
			<enhanced:img class="absolute top-0 left-0 w-full h-full bg-neutral-900 object-cover select-none brightness-75 opacity-10"
			src={test2} alt="{title}" />

			<h3 class="text-center font-serif text-lg text-moonlight uppercase px-4 pt-4">{title}</h3>
			<Rule centerOrnament={true} class="w-full mb-2 px-4" />
			<div class="h-0 w-full grow flex items-center-safe overflow-y-auto px-4 pb-4">
				<p class="text-center text-neutral-100">{text}</p>
			</div>
		</div>
	</Frame>
</div>

<style>
	@reference "style";

	.text-card {
		@apply aspect-card;
	}

	.content {
		@apply h-full w-full;
		@apply flex flex-col items-center justify-center;
		@apply bg-neutral-900;
	}
</style>
