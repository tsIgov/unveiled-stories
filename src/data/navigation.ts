import type { MultilingualText } from "$lib/i18n/languages";

export interface NavLink
{
	sectionId: string,
	text: MultilingualText
}

export const navLinks : NavLink[] = [
	{
		text: {
			en: "Portfolio",
			bg: "Портфолио"
		},
		sectionId: "portfolio"
	},
	{
		text: {
			en: "The Experience",
			bg: "Преживяването"
		},
		sectionId: "experience"
	},
	{
		text: {
			en: "FAQ",
			bg: "Често задавани въпроси"
		},
		sectionId: "faq"
	},
	{
		text: {
			en: "Team",
			bg: "Екип"
		},
		sectionId: "team"
	},
	{
		text: {
			en: "Book Your Experience",
			bg: "Запази своето преживяване"
		},
		sectionId: "booking"
	},
];

