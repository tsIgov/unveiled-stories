// import type { Photoshoot } from "..";
// import type { Picture } from 'vite-imagetools';

// import backgroundPortrait from "./backgrounds/portrait.jpg?enhanced"
// import backgroundLandscape from "./backgrounds/landscape.jpg?enhanced"

// import previewLeft from "./preview/left.jpg?enhanced";
// import previewCenter from "./preview/center.jpg?enhanced";
// import previewRight from "./preview/right.jpg?enhanced";

// function importGallery() {
// 	const modules = import.meta.glob("./gallery/*.{jpg,png,webp,svg}", {
// 		query: { enhanced: true },
// 		import: 'default',
// 		eager: true
// 	});

// 	const images = Object.values(modules);
// 	images.sort();

// 	return images as Picture[];
// }

// const data : Photoshoot = {
// 		name: {en: "En Plein Air", bg:"Нощен блясък"},
// 		description: {
// 			en: "The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey.",
// 			bg:"The predator watches, eyes sharp, muscles tensed, as the whisper of the wind carries the scent of its prey."
// 		},
// 		color: "#241B14",
// 		background: {
// 			portrait : backgroundPortrait,
// 			landscape : backgroundLandscape
// 		},
// 		preview: {
// 			left: previewLeft,
// 			center: previewCenter,
// 			right: previewRight
// 		},
// 		gallery: () => importGallery(),
// };

// export default data;
