import { defaultLanguage, type Language, type MultilingualText } from "./languages";
import { page } from '$app/state';


export type Translator = (text: MultilingualText) => string;

export const createTranslator = (lang : Language) => {
	const result = (text: MultilingualText) => {
		const result = text[lang];
		return result ?? text[defaultLanguage];
	};

	return result;
};

export const getTranslator = () => createTranslator(page.data.lang);
