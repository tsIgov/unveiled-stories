import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "The Court", bg:"Дворцови игри"},
	description: {
		en: "She glides through the court like a whispered spell, her beauty bending intentions, turning glances into offerings, and power into something softly, silently obedient.",
		bg:"Тя се движи из двореца като тиха магия, красотата ѝ огъва чуждите намерения, погледът ѝ е дар, а властта се превръща в хрисим и покорен неин слуга."
	},
	color: "#8E5A47",
	photos: getPhotos("the-court")
}

export default photoshoot;
