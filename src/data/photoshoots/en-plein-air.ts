import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "En Plein Air", bg:"Ловът"},
	description: {
		en: "In the pine-shadowed hush, she sketches the world before her, wind lifting her hair as the landscape drifts onto the page like a quiet memory.",
		bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."
	},
	color: "#453938",
	photos: getPhotos("en-plein-air")
}

export default photoshoot;
