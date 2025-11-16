import { type Photo } from 'data/photos';
import { type MultilingualText } from '$lib/i18n/languages';

// import { default as theHunt } from './the-hunt'
// import { default as nocturnalGlow } from './nocturnal-glow'
import { default as electricRomeo } from './electric-romeo'
// import { default as enPleinAir } from './en-plein-air'
// import { default as kissedByTheSun } from './kissed-by-the-sun'
// import { default as versailles } from './versailles'

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

export const photoshoots : Photoshoot[] = [
	electricRomeo,
	// theHunt,
	// nocturnalGlow,
	// enPleinAir,
	// kissedByTheSun,
	// versailles
]

export const galleryEnabled : boolean = true;
