
import { default as data } from "./data"

export interface Photo
{
    src: string,
	orientation: "landscape" | "portrait"
}

export const photos = data;

export function getPhotoshoot(id: string): {
	gallery: Photo[],
	preview: {
		left: Photo,
		center: Photo
		right: Photo
	},
	backgrounds: {
		portrait: Photo,
		landscape: Photo
	}
} {
	return {
		gallery: [
			data["photoshoots/electric-romeo/gallery/01.avif"],
			data["photoshoots/electric-romeo/gallery/02.avif"],
			data["photoshoots/electric-romeo/gallery/03.avif"],
			data["photoshoots/electric-romeo/gallery/04.avif"],
			data["photoshoots/electric-romeo/gallery/05.avif"],
			data["photoshoots/electric-romeo/gallery/06.avif"]
		] as Photo[],
		preview: {
			left: data["photoshoots/electric-romeo/preview/left.avif"] as Photo,
			center: data["photoshoots/electric-romeo/preview/center.avif"] as Photo,
			right: data["photoshoots/electric-romeo/preview/right.avif"] as Photo
		},
		backgrounds: {
			portrait: data["photoshoots/electric-romeo/backgrounds/portrait.avif"] as Photo,
			landscape: data["photoshoots/electric-romeo/backgrounds/landscape.avif"] as Photo,
		}
	}
};

