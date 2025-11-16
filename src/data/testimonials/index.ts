import type { MultilingualText } from "$lib/i18n/languages";
import { photos } from 'data/photos';


export interface Quote
{
	author: MultilingualText,
	quote: MultilingualText
}

export const title : MultilingualText = {
	en: "Testimonials",
	bg: "Отзиви"
}

export const background = {
	landscape: photos["photoshoots/electric-romeo/backgrounds/landscape.avif"],
	portrait: photos["photoshoots/electric-romeo/backgrounds/portrait.avif"]
};

export const quotes: Quote[] = [
	{
		author: {
			en: "July",
			bg: "Юлка"
		},
		quote: {
			en: "Tsvetan and I have worked together on a few different ideas I've wanted to create and he has always been very enthusiastic about bringing my vision to life and surprising me with his ingenuity. He senses the vibe I'm going for and helps me pull it off. He's incredibly easy to work with. If you can, book a session and get an album after! My friends love to browse through my collection when they visit.",
			bg: "С Цветан сме работили по няколко различни идеи, които съм искала да създам и той винаги откликва с голямо желание и винаги ме изненадва с неговия собствен принос към тях. Той усеща настроението, което искам да създам и ми помага да го постигна по време на снимките. С него се работи изключително лесно. Силно препоръчвам да си запазите сесия и да си вземете албумче след това. Приятелите ми обожават да разглеждат колекцията ми като са ми на гости. "
		}
	},
	{
		author: {
			en: "Bibi",
			bg: "Биби"
		},
		quote: {
			en: "Comfortable, mischievous and so much fun!",
			bg: "Комфортно, пакостливо и страшно забавно!"
		}
	},
	{
		author: {
			en: "Ven",
			bg: "Вен"
		},
		quote: {
			en: "Tsvetan is an inspiring photographer! He has unique ideas, each one of them carefully crafted into a scenario that uncovers a whole story not just a single beautiful shot! ... Every idea is carefully designed long before he goes on the field with his models. ... [He] is not afraid of experiments or provocation and always figures out how to make something amazing out of every situation! ... Can't wait to see more of his art!",
			bg: "Цветан е вдъхновяващ фотограф! Той има уникални идеи, всяка една от които е внимателно изработена в сценарий, който разкрива цяла история, а не просто един красив кадър! ... Всяка идея е внимателно проектирана много преди той да излезе на терена с моделите си. ... [Той] не се страхува от експерименти или провокации и винаги намира как да направи нещо невероятно от всяка ситуация! ... Нямам търпение да видя още от неговото изкуство!"
		}
	}
]

