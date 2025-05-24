import { languages, type Language } from "$lib/i18n/languages";
import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param: string): param is Language => {
	return languages.includes(param as Language);
}) satisfies ParamMatcher;
