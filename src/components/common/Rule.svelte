<script lang="ts">
	interface Props {
		orientation? : "horizontal" | "vertical",
		error? : boolean,
		centerOrnament?: boolean,
	}

	let { orientation = "horizontal", centerOrnament = false, error=false} : Props = $props();

</script>

<div class="rule {orientation}"
	class:ornament={centerOrnament}
	class:error={error}>
	{#if centerOrnament}
		<span></span>
		<span></span>
		<span></span>
	{/if}

</div>

<style>
	@reference "style";

	.rule {
		@apply shrink-0 grow-0;
	}

	.rule.ornament {
		@apply flex gap-3 items-center;

		& > span:not(:nth-child(2))  {
			@apply from-gold to-moonlight grow;
			width: 1px;
			height: 1px;
			min-height: 1.15px;

			&::after {
				@apply from-neutral-900 to-neutral-900/0;
				@apply absolute top-0 left-0 w-full h-full;
				content: "";
			}
		}

		& > span:nth-child(2) {
			@apply w-1.5 h-1.5 bg-moonlight rounded-full;
		}

		&.horizontal {
			@apply flex-row;

			& > span:first-child,
			& > span:first-child::after {
				@apply bg-gradient-to-r;
			}

			& > span:last-child,
			& > span:last-child::after {
				@apply bg-gradient-to-l;
			}
		}

		&.vertical {
			@apply flex-col;

			& > span:first-child,
			& > span:first-child::after {
				@apply bg-gradient-to-b;
			}

			& > span:last-child,
			& > span:last-child::after {
				@apply bg-gradient-to-t;
			}
		}

		&.error {
			& > span:not(:nth-child(2)) {
				@apply to-error from-moonlight;
			}

			& > span:nth-child(2) {
				@apply bg-error;
			}
		}
	}

	.rule:not(.ornament) {
		@apply from-gold via-moonlight to-gold;
		min-height: 1.15px;

		&::after {
			@apply from-neutral-900 via-neutral-900/0 to-neutral-900;
			@apply absolute top-0 left-0;
			content: "";
		}

		&.horizontal,
		&.horizontal::after {
			@apply bg-gradient-to-r;
			width: 100%;
			height: 1px;
		}

		&.vertical,
		&.vertical::after {
			@apply bg-gradient-to-b;
			width: 1px;
			height: 100%;
		}
		&.error {
			@apply via-error from-moonlight to-moonlight;
		}

	}
</style>
