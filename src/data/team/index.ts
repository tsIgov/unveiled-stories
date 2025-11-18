import type { MultilingualText } from "$lib/i18n/languages";
import { type Photo } from "data/images";

import tsvetan from "./tsvetan";
import julia from "./julia";

export interface TeamMember
{
	name: MultilingualText,
	title: MultilingualText,
	bio: MultilingualText,
	photos: {
		portrait: Photo,
		landscape: Photo
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
