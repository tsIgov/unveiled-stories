import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "Kissed by the Sun", bg:"Ловът"},
	description: {
		en: "She moves through sunflowers as twilight breathes gold, her silhouette dissolving into light, not illuminated but illuminating, a quiet star blooming on earth.",
		bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."
	},
	color: "#9A5103",
	photos: getPhotos("kissed-by-the-sun")
}

export default photoshoot;
