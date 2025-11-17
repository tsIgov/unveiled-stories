import { type Photoshoot, getPhotos } from './photoshoot';

const photoshoot: Photoshoot = {
	name: {en: "En Plein Air", bg:"Пленер"},
	description: {
		en: "In the pine-shadowed stillness, she sketches the world before her, wind lifting her hair as the landscape drifts onto the page like a quiet memory.",
		bg: "С единствено вятъра в косите си и сянката на боровите ели за компания, пейзажът се появява на платното като тих спомен изпод ръцете ѝ."
	},
	color: "#453938",
	photos: getPhotos("en-plein-air")
}

export default photoshoot;
