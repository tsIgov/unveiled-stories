import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "Kissed by the Sun", bg:"Целунати от слънцето"},
	description: {
		en: "She moves through sunflowers when twilight breathes gold, her silhouette dissolving into light as she becomes as bright as the sun.",
		bg:"Тя се движи из слънчогледовите поля по залез, а силуетът ѝ се топи докато тя и слънцето станат едно."
	},
	color: "#9A5103",
	photos: getPhotos("kissed-by-the-sun")
}

export default photoshoot;
