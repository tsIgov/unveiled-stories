import { type Photo, photos } from 'data/photos';
import { type MultilingualText } from '$lib/i18n/languages';

export interface Photoshoot
{
    name: MultilingualText,
	description: MultilingualText,
	color: string,
	photos: {
		backgrounds: {
			portrait : Photo,
			landscape : Photo,
		},
		preview: {
			left : Photo,
			center : Photo,
			right : Photo,
		},
		gallery: Photo[]
	}
}

export function getPhotos(id: string): {
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
		gallery: Object.entries(photos)
			.filter(([key]) => key.startsWith(`photoshoots/${id}/gallery`))
			.sort(([a], [b]) => a.localeCompare(b))
			.map(([, value]) => value),
		preview: {
			left: photos[`photoshoots/${id}/preview/left.avif`] as Photo,
			center: photos[`photoshoots/${id}/preview/center.avif`] as Photo,
			right: photos[`photoshoots/${id}/preview/right.avif`] as Photo
		},
		backgrounds: {
			portrait: photos[`photoshoots/${id}/backgrounds/portrait.avif`] as Photo,
			landscape: photos[`photoshoots/${id}/backgrounds/landscape.avif`] as Photo,
		}
	}
};
