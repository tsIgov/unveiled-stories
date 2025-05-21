import { t } from "$lib/utils";
import type { PhotoshootData } from "../PhotoshootData";

import backgroundPortrait from "./images/background-portrait.jpg?enhanced"
import backgroundLandscape from "./images/background-landscape.jpg?enhanced"
import cardLeft from "./images/card-left.jpg?enhanced";
import cardCenter from "./images/card-center.jpg?enhanced";
import cardRight from "./images/card-right.jpg?enhanced";

export let nocturnalGlow : PhotoshootData = {
	name:  t({en: "Nocturnal Glow", bg:"Нощен блясък"}),
	description: t({en: "The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey.", bg:"The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey."}),
	backgroundPortrait,
	backgroundLandscape,
	cardLeft,
	cardCenter,
	cardRight,
	color: "#5e1e5e"
};
