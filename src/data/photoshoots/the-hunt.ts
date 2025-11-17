import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "The Hunt", bg:"Ловът"},
	description: {
		en: "A flight with wild hope, but inevitability looms just behind. Every frantic heartbeat pulling towards a quiet, imminent end.",
		bg:"Бягство с дива надежда, а неизбежността е точно по петите ѝ. Всеки трясък на сърцето я води към тихия, неминуем край."
	},
	color: "#809D5C",
	photos: getPhotos("the-hunt")
}

export default photoshoot;
