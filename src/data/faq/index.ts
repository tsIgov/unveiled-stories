import { type MultilingualText } from "$lib/i18n/languages";
import backgroundLandscape from "./backgrounds/faq-landscape.jpg?enhanced";
import backgroundPortrait from "./backgrounds/faq-portrait.jpg?enhanced";

export const title : MultilingualText = {
	en: "FAQ",
	bg: "Често задавани въпроси"
}

export { type Question, questions } from "./questions";

export const background = {
	landscape: backgroundLandscape,
	portrait: backgroundPortrait
};
