export type Language = (typeof languages)[number];
export interface MultilingualText
{
	en: string,
	bg: string
}

const languages = ["en", "bg"] as const;
const defaultLanguage = "en" as Language;

export { languages, defaultLanguage };
