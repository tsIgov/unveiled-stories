export const prerender = true;
import "style";

import type { LayoutLoad } from './$types';
import { defaultLanguage } from "$lib/i18n/languages";
import { createTranslator } from "$lib/i18n/translator";

export const load : LayoutLoad = ({ params, route }) => {
	const lang = params.lang ?? defaultLanguage;
	const translator = createTranslator(lang);

	return { route: route.id, lang, translator};
};
