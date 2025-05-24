export const prerender = true;
import "$lib/styles/app.css";

import type { LayoutLoad } from './$types';
import type { MultilingualText } from "$lib/i18n/multilingual-text";

export const load : LayoutLoad = ({ params, route }) => {
	const lang = params.lang ?? "en";

	const translator = (text: MultilingualText) => {
		const result = text[lang];
		return result ?? text.en;
	};

	return { route: route.id, lang, translator};
};
