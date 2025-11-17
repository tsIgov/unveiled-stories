import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "Nocturnal Glow", bg:"Нощен блясък"},
	description: {
		en: "A soft neon glow, whispering a hidden promise, through the darkness. Delicate but impossible to ignore.",
		bg:"Мек неонов блясък, нашепва скрито обещание в мрака. Нежно, но неустоимо."
	},
	color: "#5e1e5e",
	photos: getPhotos("nocturnal-glow")
}

export default photoshoot;
