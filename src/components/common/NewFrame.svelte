<script lang="ts">
	import type { Snippet } from "svelte";

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


<div class="frame">
	<div class="glow expanded"
		class:disabled={!glow}
		style="--color: {color}">
		<div class="expanded spinner cutout" class:chipped={chipped}></div>
	</div>

	<div class="expanded spinner cutout" class:chipped={chipped} style="--color: {color}">	</div>

	<div class="content" class:chipped={chipped}>
		{@render children()}
	</div>
</div>

<style>
	@reference "style";

	.frame {
		--corner-size: 1rem;
		--border-size: 2px;

		padding: var(--border-size);


	}

	.spinner {
		animation: rotation 20s linear infinite;
		background-image:conic-gradient(from calc(var(--angle) + 45deg), var(--color) 0deg, var(--color-moonlight) 90deg, var(--color) 180deg, var(--color-moonlight) 270deg, var(--color) 360deg);
	}

	.content {
		padding: 1rem;
		@apply bg-neutral-800/40 backdrop-blur-xs;
	}

	.content.chipped {
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
		.content.chipped {
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



	.expanded {
		@apply w-full h-full absolute top-0 left-0;
	}

	.glow {
		filter: blur(var(--blur-size));
		animation: pulse 4s linear infinite alternate;

		@apply transition-opacity duration-[1500ms];

		&.disabled {
			opacity: 0;
		}
	}

	@keyframes pulse {
		from {
			--blur-size: 0.375rem;
		}
		to {
			--blur-size: 0.5rem;
		}
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

	@property --blur-size{
		syntax: "<length>";
		initial-value: 4px;
		inherits: true;
	}

</style>
