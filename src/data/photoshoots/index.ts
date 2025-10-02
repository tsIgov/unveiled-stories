import type { Picture } from 'vite-imagetools';
import type { MultilingualText } from '$lib/i18n/languages';

import { default as theHunt } from './the-hunt'
import { default as nocturnalGlow } from './nocturnal-glow'

export interface Photoshoot
{
    name: MultilingualText,
	description: MultilingualText,
	color: string,
	backgroundPortrait : Picture,
	backgroundLandscape : Picture,
	cardLeft : Picture,
	cardCenter : Picture,
	cardRight : Picture,
	gallery : Picture[]
}

export const photoshoots : Photoshoot[] = [
	theHunt,
	nocturnalGlow
]
