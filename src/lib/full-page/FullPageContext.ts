import { getContext, setContext } from 'svelte';
import { readonly, writable, type Writable } from 'svelte/store';

export interface Transformations {
	marginTop : number,
	snap : boolean,
	textSize : number
}

export function initializeFullPageScrollingContext() {

	const heights : number[] = [];
	const transformations : Transformations[] = [];

	const context = {
		heights: writable(heights),
		transformations: writable(transformations)
	};

	setContext("fullPageScrollingContext", context);
	return context;
}

export function getFullPageScrollingContext() {
	let context = getContext("fullPageScrollingContext") as {
		heights: Writable<number[]>,
		transformations: Writable<Transformations[]>
	};
	return context;
}
