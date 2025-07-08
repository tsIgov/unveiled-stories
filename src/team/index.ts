import type { Picture } from 'vite-imagetools';

export interface MemberData
{
	name: string,
	title: string,
	intro: string,
	bio: string,
	photo : Picture,
}

export { default as Tsvetan } from './Tsvetan';
export { default as Julia } from './Julia';
