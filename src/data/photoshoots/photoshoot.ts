import { type MultilingualText } from '$lib/i18n/languages';
import type { Picture } from 'vite-imagetools';
import { getPhoto, getPhotosInDir } from 'data/images';

export interface Photoshoot
{
    name: MultilingualText,
	description: MultilingualText,
	color: string,
	photos: {
		backgrounds: {
			portrait : Picture,
			landscape : Picture,
		},
		preview: {
			left : Picture,
			center : Picture,
			right : Picture,
		},
		gallery: Picture[]
	}
}

export function getPhotos(id: string): {
	gallery: Picture[],
	preview: {
		left: Picture,
		center: Picture
		right: Picture
	},
	backgrounds: {
		portrait: Picture,
		landscape: Picture
	}
} {
	return {
		gallery: getPhotosInDir(`photoshoots/${id}/gallery/`),
		preview: {
			left: getPhoto(`photoshoots/${id}/preview/left.jpg`),
			center: getPhoto(`photoshoots/${id}/preview/center.jpg`),
			right: getPhoto(`photoshoots/${id}/preview/right.jpg`)
		},
		backgrounds: {
			portrait: getPhoto(`photoshoots/${id}/backgrounds/portrait.jpg`),
			landscape: getPhoto(`photoshoots/${id}/backgrounds/landscape.jpg`),
		}
	}
};
