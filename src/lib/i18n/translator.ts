import { defaultLanguage, type Language, type MultilingualText } from "./languages";

export type Translator = (text: MultilingualText) => string;

export const createTranslator = (lang : Language) => {
	const result = (text: MultilingualText) => {
		const result = text[lang];
		return result ?? text[defaultLanguage];
	};

	return result;
};
