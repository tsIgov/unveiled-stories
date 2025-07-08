<script lang="ts">
	interface Props {
		class? : string,
		orientation? : "horizontal" | "vertical",
		centerOrnament?: boolean,
	}

	let { orientation = "horizontal", centerOrnament = false, ...others} : Props = $props();

</script>

<div class="rule {centerOrnament ? "ornament" : "no-ornament"} {orientation} {others.class}">
	{#if centerOrnament}
		<span></span>
		<span></span>
		<span></span>
	{/if}

</div>

<style>
	@reference "style";

	.rule.ornament {
		@apply flex gap-3 items-center;

		& > span:not(:nth-child(2))  {
			@apply from-gold to-light grow;
			width: 1px;
			height: 1px;

			&::after {
				@apply from-neutral-100 to-neutral-100/0;
				@apply absolute top-0 left-0 w-full h-full;
				content: "";
			}
		}

		& > span:nth-child(2) {
			@apply w-1.5 h-1.5 bg-light rounded-full;
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
	}

	.rule.no-ornament {
		@apply from-gold via-light to-gold;

		&::after {
			@apply from-neutral-100 via-neutral-100/0 to-neutral-100;
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

	}
</style>
