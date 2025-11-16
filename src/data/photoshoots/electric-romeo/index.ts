import type { Photoshoot } from "..";
import { getPhotoshoot } from "data/photos";

const data : Photoshoot = {
		name: {en: "Nocturnal Glow", bg:"Нощен блясък"},
		description: {
			en: "The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey.",
			bg:"The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey."
		},
		color: "#5e1e5e",
		photos: getPhotoshoot("electric-romeo")
};

export default data;
