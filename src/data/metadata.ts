import type { MultilingualText } from '$lib/i18n/languages';

export interface Metadata
{
	title: MultilingualText,
	description: MultilingualText,
	keywords: MultilingualText,
	image: string
}

const defaultOgImage = "http://unveiledstories.org/og-image.jpg";

export const ogLocale : MultilingualText = { en: "en_US", bg: "bg_BG" }

export const home : Metadata = {
	title: {
		en: "Unveiled Stories - Boudoir Photography in Sofia",
		bg: "Unveiled Stories - Будоарна фотография в София"
	},
	description: {
		en: "A soulful boudoir photography experience in Sofia that captures your story — raw, real, and authentically you.",
		bg: "Едно душевно преживяване в будоар фотография в София, което улавя вашата история — сурова, истинска и автентична."
	},
	keywords: {
		en: "boudoir photography Sofia, Sofia boudoir photographer, intimate photography Bulgaria, female empowerment photoshoot, personal storytelling photography, emotional portrait session, self-love photoshoot, body confidence photography, artistic boudoir session, storytelling photo experience, couple boudoir shoot Sofia, women’s portrait photography, fine art boudoir Bulgaria, gift for a bachelorette party, gift for a partner",
		bg: "Будоарна фотография София, будоарен фотограф София, интимна фотография България, фотография за разказване на лични истории, емоционална портретна сесия, еротична фотосесия, фотография за увереност в тялото, артистична будоарна сесия, фотосесия за разказване на истории, будоарна фотография за двойки София, арт будоар България, подарък за моминско парти, подарък за партньор"
	},
	image: defaultOgImage
}

export const privacy : Metadata = {
	title: {
		en: "Unveiled Stories - Privacy Policy",
		bg: "Unveiled Stories - Политика на поверителност"
	},
	description: {
		en: "",
		bg: ""
	},
	keywords: {
		en: "",
		bg: ""
	},
	image: defaultOgImage
}
