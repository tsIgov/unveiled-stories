import { t } from "$lib/utils";
import type { PhotoshootData } from "../PhotoshootData";

import backgroundPortrait from "./images/background-portrait.jpg?enhanced"
import backgroundLandscape from "./images/background-landscape.jpg?enhanced"
import cardLeft from "./images/card-left.jpg?enhanced";
import cardCenter from "./images/card-center.jpg?enhanced";
import cardRight from "./images/card-right.jpg?enhanced";

export let theHunt : PhotoshootData = {
	name:  t({en: "The Hunt", bg:"Ловът"}),
	description: t({en: "The hunt begins in silence, shadows stretching long beneath the ancient trees.", bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."}),
	backgroundPortrait,
	backgroundLandscape,
	cardLeft,
	cardCenter,
	cardRight,
	color: "#809D5C"
};
