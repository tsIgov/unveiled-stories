<script lang="ts">
	import type { Snippet } from "svelte";
	import { cubicOut } from "svelte/easing";
	import { fade } from 'svelte/transition';

	interface Props {
		color? : string,
		glow? : boolean,
		chipped? : boolean,
		children : Snippet
	}

	let {
		color = "var(--color-gold)",
		glow = true,
		chipped = true,
		children
	} : Props = $props();
</script>


<div class="frame" style="--color: {color}">
	{#if false}
		<div transition:fade={{ duration: 1000, easing: cubicOut }} class="glow"></div>
	{/if}
	<div class="spinner cutout" class:chipped={chipped}></div>
	<div class="content" class:chipped={chipped}>
		{@render children()}
	</div>
</div>

<style>
	@reference "style";

	.frame {
		@apply w-full h-full;

		--corner-size: 1rem;
		--border-size: 2px;

		padding: var(--border-size);
	}

	.glow {
		@apply absolute inset-0;
		filter: drop-shadow(0 0 2px var(--color-moonlight)) drop-shadow(0 0 8px var(--color));

		&::before {
			content: "";
			@apply absolute inset-0;
			@apply bg-neutral-800;
		}
	}



	.content {
		@apply w-full h-full;
		@apply bg-neutral-800;
	}

	.spinner {
		@apply w-full h-full absolute top-0 left-0;

		animation: rotation 10s linear infinite;
		background-image:conic-gradient(from calc(var(--angle) + 45deg), var(--color) 0deg, var(--color-moonlight) 90deg, var(--color) 180deg, var(--color-moonlight) 270deg, var(--color) 360deg);
	}

	@keyframes rotation {
		from {
			--angle: 0deg;
		}
		to {
			--angle: 360deg;
		}
	}

	@property --angle{
		syntax: "<angle>";
		initial-value: 0deg;
		inherits: true;
	}

	.content.chipped,
	.glow::before {
		clip-path: polygon(
			50% 0,
			calc(100% - var(--corner-size)) 0,
			100% var(--corner-size),
			100% calc(100% - var(--corner-size)),
			calc(100% - var(--corner-size)) 100%,
			var(--corner-size) 100%,
			0 calc(100% - var(--corner-size)),
			0 var(--corner-size),
			var(--corner-size) 0,
			50% 0
		);
	}

	@supports (clip-path: shape(from top, hline to 100%, vline to 100%, hline to 0, close)) {
		.content.chipped,
		.glow::before {
			clip-path: shape(
				from top,
				hline to calc(100% - var(--corner-size)),
				arc to 100% var(--corner-size) of var(--corner-size) ccw,
				vline to calc(100% - var(--corner-size)),
				arc to calc(100% - var(--corner-size)) 100% of var(--corner-size) ccw,
				hline to var(--corner-size),
				arc to 0 calc(100% - var(--corner-size)) of var(--corner-size) ccw,
				vline to var(--corner-size),
				arc to var(--corner-size) 0 of var(--corner-size) ccw,
				close
			);
		}
	}

	.cutout {
		clip-path: polygon(
			50% 0,
			100% 0,
			100% 100%,
			0 100%,
			0 0,
			50% 0,
			50% var(--border-size),
			var(--border-size) var(--border-size),
			var(--border-size) calc(100% - var(--border-size)),
			calc(100% - var(--border-size)) calc(100% - var(--border-size)),
			calc(100% - var(--border-size)) var(--border-size),
			50% var(--border-size)
		);
	}

	.cutout.chipped {
		clip-path: polygon(
			50% 0,
			calc(100% - var(--corner-size)) 0,
			100% var(--corner-size),
			100% calc(100% - var(--corner-size)),
			calc(100% - var(--corner-size)) 100%,
			var(--corner-size) 100%,
			0 calc(100% - var(--corner-size)),
			0 var(--corner-size),
			var(--corner-size) 0,
			50% 0,
			50% var(--border-size),
			calc(var(--border-size) + var(--corner-size)) var(--border-size),
			var(--border-size) calc(var(--border-size) + var(--corner-size)),
			var(--border-size) calc(100% - var(--border-size) - var(--corner-size)),
			calc(var(--border-size) + var(--corner-size)) calc(100% - var(--border-size)),
			calc(100% - var(--border-size) - var(--corner-size)) calc(100% - var(--border-size)),
			calc(100% - var(--border-size)) calc(100% - var(--border-size) - var(--corner-size)),
			calc(100% - var(--border-size)) calc(var(--border-size) + var(--corner-size)),
			calc(100% - var(--border-size) - var(--corner-size)) var(--border-size),
			50% var(--border-size)
		);


	}

	@supports (clip-path: shape(from top, hline to 100%, vline to 100%, hline to 0, close)) {
		.cutout.chipped {
			clip-path: shape(
				from top,
				hline to calc(100% - var(--corner-size)),
				arc to 100% var(--corner-size) of var(--corner-size) ccw,
				vline to calc(100% - var(--corner-size)),
				arc to calc(100% - var(--corner-size)) 100% of var(--corner-size) ccw,
				hline to var(--corner-size),
				arc to 0 calc(100% - var(--corner-size)) of var(--corner-size) ccw,
				vline to var(--corner-size),
				arc to var(--corner-size) 0 of var(--corner-size) ccw,
				close,
				move by 0 var(--border-size),
				hline to calc(var(--border-size) + var(--corner-size)),
				arc to var(--border-size) calc(var(--border-size) + var(--corner-size)) of var(--corner-size) cw,
				vline to calc(100% - var(--border-size) - var(--corner-size)),
				arc to calc(var(--border-size) + var(--corner-size)) calc(100% - var(--border-size)) of var(--corner-size) cw,
				hline to calc(100% - var(--border-size) - var(--corner-size)),
				arc to calc(100% - var(--border-size)) calc(100% - var(--border-size) - var(--corner-size)) of var(--corner-size) cw,
				vline to calc(var(--border-size) + var(--corner-size)),
				arc to calc(100% - var(--border-size) - var(--corner-size)) var(--border-size) of var(--corner-size) cw,
				close
			);
		}
	}

</style>
