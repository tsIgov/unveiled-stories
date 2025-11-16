import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot : Photoshoot = {
	name: {en: "Electric Romeo", bg:"Нощен блясък"},
	description: {
		en: "In the neon hush, she surrenders to a humming presence, its charged breath grazing her skin, a forbidden warmth blooming where darkness longs to touch.",
		bg:"The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey."
	},
	color: "#FECE67",
	photos: getPhotos("electric-romeo")
};

export default photoshoot;
