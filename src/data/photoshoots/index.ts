import type { Picture } from 'vite-imagetools';
import type { MultilingualText } from '$lib/i18n/languages';

import { default as theHunt } from './the-hunt'
import { default as nocturnalGlow } from './nocturnal-glow'
import { default as electricRomeo } from './electric-romeo'
import { default as enPleinAir } from './en-plein-air'
import { default as kissedByTheSun } from './kissed-by-the-sun'
import { default as versailles } from './versailles'

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
	nocturnalGlow,
	electricRomeo,
	enPleinAir,
	kissedByTheSun,
	versailles
]

export const galleryEnabled : boolean = true;
