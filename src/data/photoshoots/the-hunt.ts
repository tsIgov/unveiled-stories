import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "The Hunt", bg:"Ловът"},
	description: {
		en: "The hunt begins in silence, shadows stretching long beneath the ancient trees.",
		bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."
	},
	color: "#809D5C",
	photos: getPhotos("the-hunt")
}

export default photoshoot;
