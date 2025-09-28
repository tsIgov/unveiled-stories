import { type MultilingualText } from "$lib/i18n/languages";
import { type Picture } from 'vite-imagetools';

import { default as chapter1 } from "./chapters/1"
import { default as chapter2 } from "./chapters/2"
import { default as chapter3 } from "./chapters/3"
import { default as chapter4 } from "./chapters/4"

export interface Chapter
{
	title: MultilingualText,
	text: MultilingualText,
	background: Picture
}

export const header : MultilingualText ={
	en: "The Boudoir Photoshoot Experience",
	bg:"Преживяването"
};

export const summary: MultilingualText = {
	en: "Step into a space where your story comes alive  — raw, real, and entirely yours. This is a chance to be present with everything you carry: the moments that shaped you, the emotions that move you, the parts of yourself that are ready to be unveiled. Whether you are honoring a turning point, embracing a quiet truth, or simply allowing yourself to feel, this is where it all unfolds.",
	bg:""
};

export const chapters : Chapter[] = [
	chapter1,
	chapter2,
	chapter3,
	chapter4,
]
