<script lang="ts">
	import { getFullPageScrollingContext } from "./FullPageContext";

	export interface Transformations {
		marginTop : number,
		marginBottom: number,
		snap : boolean
	}

	export interface SectionProperties {
		forceNewPage? : boolean,
		children : any
	}

	let props : SectionProperties = $props();

	const context = getFullPageScrollingContext();
	let heightsStore = context.heights;
	let transformationsStore = context.transformations;
	let propertyStore = context.properties;

	let id = $state($heightsStore.length);
	$heightsStore.push(0);
	$transformationsStore.push({
		marginTop: 0,
		marginBottom: 0,
		snap: false,
	})
	$propertyStore.push(props);
</script>

<div class="section w-full overflow-x-hidden snap-always"
	style="margin-top: {$transformationsStore[id].marginTop}px;
			margin-bottom: {$transformationsStore[id].marginBottom}px;
			scroll-snap-align: {$transformationsStore[id].snap ? "start" : "none"};
			scroll-margin-top: calc({$transformationsStore[id].marginTop}px);"
	bind:offsetHeight={$heightsStore[id]}>
	{@render props.children()}
</div>
