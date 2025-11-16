import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "Kissed by the Sun", bg:"Ловът"},
	description: {
		en: "The hunt begins in silence, shadows stretching long beneath the ancient trees.",
		bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."
	},
	color: "#9A5103",
	photos: getPhotos("kissed-by-the-sun")
}

export default photoshoot;
