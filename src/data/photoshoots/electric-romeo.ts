import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot : Photoshoot = {
	name: {en: "Electric Romeo", bg:"Електрически Ромео"},
	description: {
		en: "In the neon hush, she surrenders to a humming presence, its charged breath grazing her skin, a forbidden warmth blooming where darkness longs to touch.",
		bg:"В неоновия свят, тя се предава на жужащото присъствие, което със зареден дъх ближе кожата ѝ, забранена топлина властва в неговото владение."
	},
	color: "#FECE67",
	photos: getPhotos("electric-romeo")
};

export default photoshoot;
