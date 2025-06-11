<script lang="ts">
	import { onMount } from "svelte";
	import { initializeFullPageScrollingContext } from "./FullPageContext";

	const context = initializeFullPageScrollingContext();
	const heightsStore = context.heights;
	const transformationsStore = context.transformations;
	const propertiesStore = context.properties;

	let scroller : HTMLElement;

	let mounted = false;
	// heightsStore.subscribe(redraw);
	// propertiesStore.subscribe(redraw);

	let { offsetHeight = $bindable(), scrollY = $bindable(), children } : {
		offsetHeight: number,
		scrollY: number,
		children : any
	} = $props();

	onMount(() => {
		mounted = true;
		scrollY = scroller.scrollTop;
	});

	$effect(() => redraw());

	function redraw() {
		if (!mounted)
			return;

		let availableSpace = offsetHeight - 80;
		let sections : number[] = [];
		let currentScreenRemainingHeight = availableSpace;

		for (let i = 0; i< $heightsStore.length; i++) {
			if (sections.length == 0 || $propertiesStore[i].forceNewPage) {
				transformScreen(sections, currentScreenRemainingHeight)
				sections = [i];
				currentScreenRemainingHeight = Math.max(0, availableSpace - $heightsStore[i]);
				continue;
			}

			if (currentScreenRemainingHeight < $heightsStore[i]) {
				transformScreen(sections, currentScreenRemainingHeight);
				sections = [i];
				currentScreenRemainingHeight = availableSpace - $heightsStore[i];
				continue;
			}

			sections.push(i);
			currentScreenRemainingHeight -= $heightsStore[i];
		}

		if (sections.length > 0)
			transformScreen(sections, currentScreenRemainingHeight);
	}

	function transformScreen(sections : number[], currentScreenRemainingHeight : number) {
		if (sections.length == 0)
			return;

		let additionalSpace = 0;
		if (currentScreenRemainingHeight > 0)
			additionalSpace = Math.floor(currentScreenRemainingHeight / (sections.length + 1))

		sections.forEach((section, index) => {
			if (index == 0) {
				$transformationsStore[section].marginTop = additionalSpace;
				$transformationsStore[section].snap = true;
			}
			else {
				$transformationsStore[section].marginTop = additionalSpace;
				$transformationsStore[section].snap = false;
			}

			currentScreenRemainingHeight -= additionalSpace;

			if (index == sections.length - 1)
				$transformationsStore[section].marginBottom = currentScreenRemainingHeight;
			else
				$transformationsStore[section].marginBottom = 0;
		});
	}

</script>

<div bind:offsetHeight={offsetHeight}
	bind:this={scroller}
	onscroll={(e) => scrollY = e.currentTarget.scrollTop}>

	{@render children()}

</div>

<style>
	@reference "style";

	div {
		@apply w-full h-svh overflow-x-hidden overflow-y-scroll snap-y snap-proximity scroll-smooth;
		scroll-padding-top: var(--navbar-height);
	}
</style>
