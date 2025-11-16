import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "The Hunt", bg:"Ловът"},
	description: {
		en: "A flight with wild hope, but inevitability looms just behind. Every frantic heartbeat pulling towards a quiet, irresistible end.",
		bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."
	},
	color: "#809D5C",
	photos: getPhotos("the-hunt")
}

export default photoshoot;
