import type { MultilingualText } from '$lib/i18n/languages';

export interface Metadata
{
	title: MultilingualText,
	description: MultilingualText,
	keywords: MultilingualText,
	image: string
}

const defaultOgImage = "http://localhost:5173/og-image.jpg";

export const home : Metadata = {
	title: {
		en: "Unveiled Stories - Boudoir Photography",
		bg: "Unveiled Stories - Boudoir Photography"
	},
	description: {
		en: "",
		bg: ""
	},
	keywords: {
		en: "boudoir, photography",
		bg: ""
	},
	image: defaultOgImage
}

export const privacy : Metadata = {
	title: {
		en: "Unveiled Stories - Boudoir Photography",
		bg: "Unveiled Stories - Boudoir Photography"
	},
	description: {
		en: "",
		bg: ""
	},
	keywords: {
		en: "boudoir, photography",
		bg: ""
	},
	image: defaultOgImage
}
