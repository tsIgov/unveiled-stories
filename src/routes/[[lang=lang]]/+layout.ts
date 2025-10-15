export const prerender = true;
import "style";

import type { LayoutLoad } from './$types';
import { defaultLanguage } from "$lib/i18n/languages";

export const load : LayoutLoad = ({ params, route, url }) => {
	const lang = params.lang ?? defaultLanguage;

	return { route: route.id, lang};
};
