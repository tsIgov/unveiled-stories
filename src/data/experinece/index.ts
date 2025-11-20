import { type MultilingualText } from "$lib/i18n/languages";

export interface Chapter
{
	title: MultilingualText,
	text: MultilingualText,
}

export const header : MultilingualText ={
	en: "The Boudoir Photoshoot Experience",
	bg:"Преживяването от фотосесията в будоар"
};

export const summary: MultilingualText = {
	en: "Step into a space where your story comes alive  — raw, real, and entirely yours. This is a chance to be present with everything you carry: the moments that shaped you, the emotions that move you, the parts of yourself that are ready to be unveiled. Whether you are honouring a turning point, embracing a quiet truth, or simply allowing yourself to feel, this is where it all unfolds.",
	bg: "Влез в пространство, където твоята история оживява – автентична, реална и неподправена. Тук имаш шанса да посрещнеш всичко, което си: онези моменти, които са те изградили, чувствата, които те вълнуват, и всички онези кътчета от душата ти, които са готови да бъдат видяни. Без значение дали отдаваш почит на важен момент в живота ти, дали приемаш някоя тиха, лична истина, или просто си даваш разрешение да изпиташ всичко – тук е мястото, където това се случва."
};

const chapter1 : Chapter = {
	title: {
		en: "Chapter 1: Planning",
		bg: "Глава 1: Планиране"
	},
	text: {
		en: "It all begins with a relaxed, judgment-free conversation. We’ll explore what you want to express and how you want to feel, shaping a story that’s bold, tender, playful, or powerful — whatever feels true to you. Together, we’ll define the visual direction, styling, and mood.",
		bg: "Всичко започва с непринуден разговор, свободен от предразсъдъци. Ще изследваме какво искаш да изразиш и как искаш да се чувстваш, оформяйки история, която е дръзка, нежна, игрива или силна — каквото усещаш като автентично за теб. Заедно ще определим визуалната посока, стила и цялостното усещане."
	},
};

const chapter2 : Chapter = {
	title: {
		en: "Chapter 2: Preparation",
		bg: "Глава 2: Подготовка"
	},
	text: {
		en: "With your story gently taking shape, we gather what brings it to life — a private location, meaningful locations and props, booking your makeup artist, and setting the date when it all comes together. Every detail is chosen to reflect the tone and truth of your story, curating a world where your experience can unfold fully and authentically.",
		bg: "След като идеята е придобила форма, е време да съберем елементите, които ще ѝ вдъхнат живот. Това означава да открием уединено, спокойно място, да подберем дрехи и реквизит и да определим датата, на която всичко ще се случи. Всеки детайл е съобразен с тона и истината на твоята история. Така изграждаме онази среда, в която преживяването ти може да се разгърне в пълния си блясък."
	},
};

const chapter3 : Chapter = {
	title: {
		en: "Chapter 3: The Shoot",
		bg: "Глава 3: Заснемане"
	},
	text: {
		en: "This is the day your story unfolds. In a calm, supportive space, we’ll spend unhurried time exploring and expressing the world we’ve created together. You’ll be guided with care so you can stay relaxed, present, and connected to what this day means to you. It’s not about performing — it’s about being.",
		bg: "Това е денят, в който твоята история се разгръща. В спокойна и подкрепяща атмосфера ще отделим нужното време, за да изследваме и изразим света, който сме изградили заедно. Ще те напътстваме деликатно, за да можеш да се отпуснеш и да присъстваш в момента. Не е нужно да бъдеш модел — важното е просто да бъдеш."
	},
};

const chapter4 : Chapter = {
	title: {
		en: "Chapter 4: The Reveal",
		bg: "Глава 4: Разкриване"
	},
	text: {
		en: "Once your story is captured, we’ll experience it together — not just as images, but as moments remembered and felt. You’ll choose how to honour it: with a handcrafted leather album, a custom deck of cards, or even an oil painting by our incredible artist. This final step is about creating something lasting — a way to hold your story in your hands and return to it again and again.",
		bg: "След като уловим вашата история, ще я преживеем заедно – не просто като снимки, а като съхранени и почувствани мигове. Вие ще решите как да ѝ отдадете почит: чрез ръчно изработен кожен албум, персонализирано тесте карти или пък чрез маслена картина, нарисувана от нашия невероятен художник. Тази последна стъпка е посветена на създаването на нещо вечно – начин да задържите тази история си в ръцете и да се връщате към нея отново и отново."
	},
};

export const chapters : Chapter[] = [
	chapter1,
	chapter2,
	chapter3,
	chapter4,
]
