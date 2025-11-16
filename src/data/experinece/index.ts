import { type MultilingualText } from "$lib/i18n/languages";
import { type Photo } from "data/photos";

import { default as chapter1 } from "./chapters/1"
import { default as chapter2 } from "./chapters/2"
import { default as chapter3 } from "./chapters/3"
import { default as chapter4 } from "./chapters/4"

export interface Chapter
{
	title: MultilingualText,
	text: MultilingualText,
	background: {
		portrait: Photo,
		landscape: Photo
	}
}

export const header : MultilingualText ={
	en: "The Boudoir Photoshoot Experience",
	bg:"Преживяването от фотосесията в будоар"
};

export const summary: MultilingualText = {
	en: "Step into a space where your story comes alive  — raw, real, and entirely yours. This is a chance to be present with everything you carry: the moments that shaped you, the emotions that move you, the parts of yourself that are ready to be unveiled. Whether you are honouring a turning point, embracing a quiet truth, or simply allowing yourself to feel, this is where it all unfolds.",
	bg: "Влез в пространство, където твоята история оживява – автентична, реална и неподправена. Тук имаш шанса да посрещнеш всичко, което си: онези моменти, които са те изградили, чувствата, които те вълнуват, и всички онези кътчета от душата ти, които са готови да бъдат видяни. Без значение дали отдаваш почит на важен момент в живота ти, дали приемаш някоя тиха, лична истина, или просто си даваш разрешение да изпиташ всичко – тук е мястото, където това се случва."
};

export const chapters : Chapter[] = [
	chapter1,
	chapter2,
	chapter3,
	chapter4,
]
