import type { PhotoshootData } from "../photoshoot-data";
import type { Translator } from "$lib/i18n/translator";
type Factory = (t: Translator) => PhotoshootData;

import backgroundPortrait from "./images/background-portrait.jpg?enhanced"
import backgroundLandscape from "./images/background-landscape.jpg?enhanced"
import cardLeft from "./images/card-left.jpg?enhanced";
import cardCenter from "./images/card-center.jpg?enhanced";
import cardRight from "./images/card-right.jpg?enhanced";

export const nocturnalGlow : Factory = (t) => {
	return {
		name:  t({en: "Nocturnal Glow", bg:"Нощен блясък"}),
		description: t({en: "The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey.", bg:"The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey."}),
		backgroundPortrait,
		backgroundLandscape,
		cardLeft,
		cardCenter,
		cardRight,
		color: "#5e1e5e"
	};
};
