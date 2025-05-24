import type { Handle } from "@sveltejs/kit";

export const handle: Handle = ({ event, resolve }) => {
	const lang = event.params?.lang ?? "en";
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%lang%", lang),
	});
};
