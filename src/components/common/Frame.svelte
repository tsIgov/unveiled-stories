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


<div class="frame" class:chipped={chipped}>
	<div class="glow"
		class:disabled={!glow}
		style="--color: {color}">
		<div class="glow-base"></div>
	</div>

	<div class="frame-border" style="--color: {color}">
		<div class="content">
			{@render children()}
		</div>
	</div>
</div>

<style>
	@reference "style";

	/* clip-path: polygon(5rem 0, 9rem 0, 10rem 1rem, 10rem 9rem, 9rem 10rem, 1rem 10rem, 0rem 9rem, 0rem 1rem, 1rem 0, 5rem 0,
		5rem 0.5rem, 1.5rem 0.5rem, 0.5rem 1.5rem, 0.5rem 8.5rem, 1.5rem 9.5rem, 8.5rem 9.5rem, 9.5rem 8.5rem, 9.5rem 1.5rem, 8.5rem 0.5rem, 5rem 0.5rem
		);

    clip-path: shape(
    	from top,
    	hline to 9rem,
    	arc to 10rem 1rem of 1rem ccw,
    	vline to 9rem,
 	    arc to 9rem 10rem of 1rem ccw,
 	    hline to 1rem,
 	    arc to 0 9rem of 1rem ccw,
 	    vline to 1rem,
 	    arc to 1rem 0 of 1rem ccw,
 	    close,
 	    move by 0 0.5rem,
 	    hline to 1.5rem,
 	    arc to 0.5rem 1.5rem of 1rem cw,
 	    vline to 8.5rem,
 	    arc to 1.5rem 9.5rem of 1rem cw,
 	    hline to 8.5rem,
		arc to 9.5rem 8.5rem of 1rem cw,
		vline to 1.5rem,
		arc to 8.5rem 0.5rem of 1rem cw,
 	    close
    	); */

	.frame {
		@apply h-full;

		&.chipped .glow-base,
		&.chipped .frame-border,
		&.chipped .content {
			--inverse-corner-size: 1rem;
			mask: radial-gradient(var(--inverse-corner-size) at var(--inverse-corner-size) var(--inverse-corner-size) , transparent 95%, black) calc(var(--inverse-corner-size) * -1) calc(var(--inverse-corner-size) * -1);
		}

	}

	.glow {
		@apply w-full h-full absolute top-0 left-0;
		filter: blur(var(--blur-size));
		animation: pulse 4s linear infinite alternate;

		@apply transition-all duration-[1500ms];

		&.disabled {
			opacity: 0;
		}
	}

	.glow-base {
		@apply w-full h-full absolute top-0 left-0;
		animation: rotation 20s linear infinite;

		background-image:conic-gradient(from calc(var(--angle) + 45deg), var(--color) 0deg, var(--color-moonlight) 90deg, var(--color) 180deg, var(--color-moonlight) 270deg, var(--color) 360deg);
	}

	.frame-border {
		@apply p-[2px] h-full;
		animation: rotation 20s linear infinite;
		background-image:conic-gradient(from calc(var(--angle) + 45deg), var(--color) 0deg, var(--color-moonlight) 90deg, var(--color) 180deg, var(--color-moonlight) 270deg, var(--color) 360deg);
	}

	.content {
		@apply bg-neutral-800 h-full;
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
