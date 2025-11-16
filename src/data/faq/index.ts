import { type MultilingualText } from "$lib/i18n/languages";
import { photos } from 'data/photos';

export const title : MultilingualText = {
	en: "FAQ",
	bg: "Често задавани въпроси"
}

export { type Question, questions } from "./questions";

export const background = {
	landscape: photos["photoshoots/electric-romeo/backgrounds/landscape.avif"],
	portrait: photos["photoshoots/electric-romeo/backgrounds/portrait.avif"]
};
