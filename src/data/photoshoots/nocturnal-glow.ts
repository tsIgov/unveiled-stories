import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "Nocturnal Glow", bg:"Ловът"},
	description: {
		en: "The hunt begins in silence, shadows stretching long beneath the ancient trees.",
		bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."
	},
	color: "#5e1e5e",
	photos: getPhotos("electric-romeo")
}

export default photoshoot;
