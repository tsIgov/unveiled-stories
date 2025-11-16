import { type Chapter } from "data/experinece";
import { photos } from "data/photos"

const data : Chapter = {
	title: {
		en: "Chapter 1: Planning",
		bg: "Глава 1: Планиране"
	},
	text: {
		en: "It all begins with a relaxed, judgment-free conversation. We’ll explore what you want to express and how you want to feel, shaping a story that’s bold, tender, playful, or powerful — whatever feels true to you. Together, we’ll define the visual direction, styling, and mood.",
		bg: "Всичко започва с непринуден разговор, свободен от предразсъдъци. Ще изследваме какво искаш да изразиш и как искаш да се чувстваш, оформяйки история, която е дръзка, нежна, игрива или силна — каквото усещаш като автентично за теб. Заедно ще определим визуалната посока, стила и цялостното усещане."
	},
	background: {
		landscape: photos["photoshoots/electric-romeo/backgrounds/landscape.avif"],
		portrait: photos["photoshoots/electric-romeo/backgrounds/portrait.avif"]
	}
};

export default data;
