<script lang="ts">
	import { onMount } from "svelte";


let { children, minSize = 0.75, maxSize = 1.5, step = 0.0625 } = $props();
let node : HTMLElement;

onMount(() => {
	const onResize = (): void => {
		resize(node, minSize, maxSize, step);
	}
	const resizeObserver = new ResizeObserver(onResize);
	resizeObserver.observe(node);

	return () => {
		resizeObserver.disconnect();
	};
});

$effect(() => {
	resize(node, minSize, maxSize, step);
});

function resize(node : HTMLElement, minSize : number, maxSize: number, step: number) {
	for (let i = minSize + step; i <= maxSize; i += step) {
		node.style.fontSize = `${i}em`
		if (overflows(node)) {
			node.style.fontSize = `${i - step}em`;
			break;
		}
	}
}

function overflows({clientWidth, clientHeight, scrollWidth, scrollHeight}: HTMLElement): boolean {
	return scrollWidth > clientWidth || scrollHeight > clientHeight;
}

</script>

<div bind:this={node} class="section w-full h-full snap-start snap-always">
	{@render children()}
</div>


<style>
	:global(.section:not(:first-child)) {
		padding-top: var(--navbar-height);
	}
</style>
