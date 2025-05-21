import type { Picture } from 'vite-imagetools';
import { theHunt } from './the-hunt/data';
import { nocturnalGlow } from './nocturnal-glow/data';

export interface PhotoshootData
{
    name: string,
	description: string,
	color: string,
	backgroundPortrait : Picture,
	backgroundLandscape : Picture,
	cardLeft : Picture,
	cardCenter : Picture,
	cardRight : Picture,
}


export { theHunt, nocturnalGlow }
