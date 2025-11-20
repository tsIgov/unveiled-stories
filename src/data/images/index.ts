import { imageModules } from "./images"
import type { Picture } from 'vite-imagetools';


export const getPhoto = (path: string) => {
	path = `./${path}`;
	const module = imageModules[path] as { default: Picture };
	return module.default;
};
