import type { Handle } from "@sveltejs/kit";
import { state } from "$lib/global-state.svelte";

export const handle: Handle = ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%lang%", state.lang),
	});
};
