<script lang="ts">

	interface Props {
		horizontalPosition: "left" | "right",
		verticalPosition: "top" | "bottom"
	}

	let { horizontalPosition, verticalPosition } : Props  = $props();;
</script>

<span class="absolute rounded-full orn-{verticalPosition} orn-{horizontalPosition}"></span>

<style>
	span {
		--ornament-radius: 3px;
		width: calc(var(--inverse-corner-size) * 2);
		height: calc(var(--inverse-corner-size) * 2);
		background-image: radial-gradient(at var(--gradientPositionX) var(--gradientPositionY), transparent var(--ornament-radius), var(--color-neutral-100) var(--ornament-radius));
		translate: var(--translateX) var(--translateY);
	}

	.orn-top {
		--gradientPositionY: calc(var(--inverse-corner-size) + var(--ornament-radius));
		--translateY: -50%;
		top: 0;
	}

	.orn-bottom {
		--gradientPositionY: calc(var(--inverse-corner-size) - var(--ornament-radius));
		--translateY: 50%;
		bottom: 0;
	}

	.orn-left {
		--gradientPositionX: calc(var(--inverse-corner-size) + var(--ornament-radius));
		--translateX: -50%;
		left: 0;
	}

	.orn-right {
		--gradientPositionX: calc(var(--inverse-corner-size) - var(--ornament-radius));
		--translateX: 50%;
		right: 0;
	}

</style>
