import type { Photoshoot } from "..";

import backgroundPortrait from "./images/background-portrait.jpg?enhanced"
import backgroundLandscape from "./images/background-landscape.jpg?enhanced"
import cardLeft from "./images/card-left.jpg?enhanced";
import cardCenter from "./images/card-center.jpg?enhanced";
import cardRight from "./images/card-right.jpg?enhanced";

const data: Photoshoot = {
		name: {en: "The Hunt", bg:"Ловът"},
		description: {
			en: "The hunt begins in silence, shadows stretching long beneath the ancient trees.",
			bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."
		},
		backgroundPortrait,
		backgroundLandscape,
		cardLeft,
		cardCenter,
		cardRight,
		color: "#809D5C"
};

export default data;
