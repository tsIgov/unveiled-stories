import type { Picture } from 'vite-imagetools';

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

export { default as TheHunt } from './the-hunt';
export { default as NocturnalGlow } from './nocturnal-glow';
