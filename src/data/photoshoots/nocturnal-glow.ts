import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "Nocturnal Glow", bg:"Ловът"},
	description: {
		en: "A soft neon glow, whispering a hidden promise, through the darkness. Delicate but impossible to ignore.",
		bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."
	},
	color: "#5e1e5e",
	photos: getPhotos("nocturnal-glow")
}

export default photoshoot;
