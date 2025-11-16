import { type Chapter } from "data/experinece";
import { photos } from "data/photos"

const data : Chapter = {
	title: {
		en: "Chapter 3: The Shoot",
		bg: "Глава 3: Заснемане"
	},
	text: {
		en: "This is the day your story unfolds. In a calm, supportive space, we’ll spend unhurried time exploring and expressing the world we’ve created together. You’ll be guided with care so you can stay relaxed, present, and connected to what this day means to you. It’s not about performing — it’s about being.",
		bg: "Това е денят, в който твоята история се разгръща. В спокойна и подкрепяща атмосфера ще отделим нужното време, за да изследваме и изразим света, който сме изградили заедно. Ще те напътстваме деликатно, за да можеш да се отпуснеш и да присъстваш в момента. Не е нужно да бъдеш модел — важното е просто да бъдеш."
	},
	background: {
		landscape: photos["photoshoots/electric-romeo/backgrounds/landscape.avif"],
		portrait: photos["photoshoots/electric-romeo/backgrounds/portrait.avif"]
	}
};

export default data;
