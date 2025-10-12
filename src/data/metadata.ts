import type { MultilingualText } from '$lib/i18n/languages';

export interface Metadata
{
	title: MultilingualText,
	description: MultilingualText,
	keywords: MultilingualText,
	image?: string
}

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
}
