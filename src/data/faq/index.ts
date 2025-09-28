import { type MultilingualText } from "$lib/i18n/languages";
import backgroundLandscape from "./backgrounds/landscape.jpg?enhanced";
import backgroundPortrait from "./backgrounds/portrait.jpg?enhanced";

export const title : MultilingualText = {
	en: "FAQ",
	bg: "Често задавани въпроси"
}

export { type Question, questions } from "./questions";

export const background = {
	landscape: backgroundLandscape,
	portrait: backgroundPortrait
};
