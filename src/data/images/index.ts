import { imageModules } from "./images"
import type { Picture } from 'vite-imagetools';


export const getPhoto = (path: string) => {
	path = `./${path}`;
	const module = imageModules[path] as { default: Picture };
	return module.default;
};

export const getPhotosInDir = (dir: string) => {
	dir = `./${dir}`;

	const values = Object.keys(imageModules)
		.filter(key => key.startsWith(dir))
		.sort()
		.map(key => (imageModules[key] as { default: Picture }).default);

	return values;
};
