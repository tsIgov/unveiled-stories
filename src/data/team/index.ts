import type { MultilingualText } from "$lib/i18n/languages";
import type { Picture } from 'vite-imagetools';

import tsvetan from "./tsvetan";
import julia from "./julia";

export interface TeamMember
{
	name: MultilingualText,
	title: MultilingualText,
	bio: MultilingualText,
	photos: {
		portrait: Picture,
		landscape: Picture
	}
}

export const header : MultilingualText ={
	en: "The Team",
	bg: "Екипът"
};

export const members : TeamMember[] = [
	tsvetan,
	julia
]
