import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot : Photoshoot = {
	name: {en: "Electric Romeo", bg:"Нощен блясък"},
	description: {
		en: "The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey.",
		bg:"The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey."
	},
	color: "#FECE67",
	photos: getPhotos("electric-romeo")
};

export default photoshoot;
