export const prerender = true;
import "$lib/styles/app.css";
import { state } from "$lib/global-state.svelte.js";

export const load = ({ params }) => {
	state.lang = params.lang ?? "en";
};
