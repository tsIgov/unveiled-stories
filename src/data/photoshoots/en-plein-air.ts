import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "En Plein Air", bg:"Ловът"},
	description: {
		en: "The hunt begins in silence, shadows stretching long beneath the ancient trees.",
		bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."
	},
	color: "#453938",
	photos: getPhotos("en-plein-air")
}

export default photoshoot;
