import type { Picture } from 'vite-imagetools';
import type { MultilingualText } from '$lib/i18n/languages';

import { default as theHunt } from './the-hunt'
import { default as nocturnalGlow } from './nocturnal-glow'

export interface Photoshoot
{
    name: MultilingualText,
	description: MultilingualText,
	color: string,
	background: {
		portrait : Picture,
		landscape : Picture,
	},
	preview: {
		left : Picture,
		center : Picture,
		right : Picture,
	},
	gallery?: () => Picture[]
}

export const photoshoots : Photoshoot[] = [
	theHunt,
	nocturnalGlow
]

export const galleryEnabled : boolean = true;
