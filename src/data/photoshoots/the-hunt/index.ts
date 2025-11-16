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
// 	return [] as Picture[];
// }

// const data: Photoshoot = {
// 		name: {en: "The Hunt", bg:"Ловът"},
// 		description: {
// 			en: "The hunt begins in silence, shadows stretching long beneath the ancient trees.",
// 			bg:"The hunt begins in silence, shadows stretching long beneath the ancient trees."
// 		},
// 		color: "#809D5C",
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
