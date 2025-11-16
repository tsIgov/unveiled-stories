import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "The Court", bg:"Ловът"},
	description: {
		en: "She glides through the court like a whispered spell, her beauty bending intentions, turning glances into offerings, and power into something softly, silently obedient.",
		bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."
	},
	color: "#8E5A47",
	photos: getPhotos("the-court")
}

export default photoshoot;
