import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import type { SectionProperties, Transformations } from './Section.svelte';

export function initializeFullPageScrollingContext() {

	const heights : number[] = [];
	const transformations : Transformations[] = [];
	const properties : SectionProperties[] = [];

	const context = {
		heights: writable(heights),
		transformations: writable(transformations),
		properties: writable(properties)
	};

	setContext("fullPageScrollingContext", context);
	return context;
}

export function getFullPageScrollingContext() {
	let context = getContext("fullPageScrollingContext") as {
		heights: Writable<number[]>,
		transformations: Writable<Transformations[]>,
		properties: Writable<SectionProperties[]>
	};
	return context;
}
