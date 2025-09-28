import type { MultilingualText } from "$lib/i18n/languages";
import type { Picture } from 'vite-imagetools';

import { default as tsvetan } from "./tsvetan";
import { default as julia } from "./julia";

export interface TeamMember
{
	name: MultilingualText,
	title: MultilingualText,
	bio: MultilingualText,
	photo: Picture
}

export const header : MultilingualText ={
	en: "The Team",
	bg: "Екипът"
};

export const members : TeamMember[] = [
	tsvetan,
	julia
]
